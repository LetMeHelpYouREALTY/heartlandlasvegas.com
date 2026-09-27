/**
 * Fetch Utilities for Next.js 15 + Vercel
 * 
 * ⚠️ IMPORTANT: Next.js 15 Breaking Change
 * - Fetch is NO LONGER cached by default (unlike Next.js 14)
 * - You MUST explicitly set caching options: { next: { revalidate } } or { cache: 'force-cache' }
 * - Without explicit options, fetch defaults to { cache: 'no-store' } (always fresh)
 * 
 * Vercel-Specific Optimizations:
 * - Uses Vercel's Data Cache for ISR (Incremental Static Regeneration)
 * - Automatic request memoization in Server Components
 * - Edge Network caching for optimal global performance
 * 
 * Best practices:
 * - Server Components: Use native fetch with explicit caching
 * - Route Handlers: Use native fetch for API calls
 * - Client Components: Use fetch with proper error handling
 * 
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
 */

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
  cache?: RequestCache;
};

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  status: number | null;
};

/**
 * Generic fetch wrapper with error handling
 * 
 * @example
 * const { data, error } = await safeFetch<MyType>('https://api.example.com/data', {
 *   next: { revalidate: 3600 }
 * });
 */
export async function safeFetch<T>(
  url: string,
  options?: FetchOptions
): Promise<FetchResult<T>> {
  try {
    // Next.js 15: Ensure caching is explicit
    const fetchOptions: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    };

    // If no cache options provided, default to no-store (Next.js 15 behavior)
    if (!options?.cache && !options?.next) {
      fetchOptions.cache = 'no-store';
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      return {
        data: null,
        error: `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      };
    }

    const data = await response.json();
    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown fetch error',
      status: null,
    };
  }
}

/**
 * Fetch with automatic retry logic
 * 
 * @example
 * const data = await fetchWithRetry('https://api.example.com/data', {
 *   retries: 3,
 *   delay: 1000,
 *   next: { revalidate: 3600 }
 * });
 */
export async function fetchWithRetry<T>(
  url: string,
  options?: FetchOptions & {
    retries?: number;
    delay?: number;
  }
): Promise<T> {
  const { retries = 3, delay = 1000, ...fetchOptions } = options || {};

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);

      if (response.ok) {
        return await response.json();
      }

      // Don't retry on 4xx errors (client errors)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status} ${response.statusText}`);
      }

      // Retry on 5xx errors or network errors
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, delay * (attempt + 1)));
        continue;
      }

      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, delay * (attempt + 1)));
    }
  }

  throw new Error('Max retries exceeded');
}

/**
 * Fetch with timeout
 * 
 * @example
 * const data = await fetchWithTimeout('https://api.example.com/data', {
 *   timeout: 5000,
 *   next: { revalidate: 3600 }
 * });
 */
export async function fetchWithTimeout<T>(
  url: string,
  options?: FetchOptions & {
    timeout?: number;
  }
): Promise<T> {
  const { timeout = 10000, ...fetchOptions } = options || {};

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    throw error;
  }
}

/**
 * Fetch JSON with Next.js 15 + Vercel caching strategies
 * 
 * ⚠️ Next.js 15: You MUST provide caching options explicitly
 * 
 * @example
 * // ISR: Revalidate every hour (Vercel Data Cache)
 * const data = await fetchJSON<MyType>('https://api.example.com/data', {
 *   revalidate: 3600  // Vercel will cache for 1 hour, then revalidate
 * });
 * 
 * // Static: Cache at build time (persistent cache)
 * const data = await fetchJSON<MyType>('https://api.example.com/data', {
 *   cache: 'force-cache'  // Cached until next build
 * });
 * 
 * // Dynamic: Always fresh (no cache)
 * const data = await fetchJSON<MyType>('https://api.example.com/data', {
 *   cache: 'no-store'  // Always fetch fresh data
 * });
 * 
 * // Tagged cache: On-demand revalidation with revalidateTag()
 * const data = await fetchJSON<MyType>('https://api.example.com/data', {
 *   tags: ['posts']  // Can be invalidated with revalidateTag('posts')
 * });
 */
export async function fetchJSON<T>(
  url: string,
  options?: {
    revalidate?: number | false;
    tags?: string[];
    cache?: RequestCache;
    headers?: Record<string, string>;
  }
): Promise<T> {
  const { revalidate, tags, cache, headers, ...restOptions } = options || {};

  // Next.js 15: Explicitly set caching - defaults to no-store if not provided
  const fetchOptions: RequestInit = {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // Set Next.js caching options (for Vercel Data Cache)
  if (revalidate !== undefined || tags) {
    fetchOptions.next = {
      revalidate: revalidate ?? false,
      tags: tags,
    };
  }

  // Set standard cache option (if provided)
  if (cache) {
    fetchOptions.cache = cache;
  } else if (!fetchOptions.next) {
    // Next.js 15 default: no-store if no options provided
    // Explicitly set to make behavior clear
    fetchOptions.cache = 'no-store';
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * POST request helper
 * 
 * @example
 * const result = await postJSON('https://api.example.com/submit', {
 *   name: 'John',
 *   email: 'john@example.com'
 * });
 */
export async function postJSON<T>(
  url: string,
  data: unknown,
  options?: FetchOptions
): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * GET request helper with query parameters
 * 
 * @example
 * const data = await getJSON<MyType>('https://api.example.com/search', {
 *   q: 'Las Vegas',
 *   limit: 10
 * });
 */
export async function getJSON<T>(
  baseUrl: string,
  params?: Record<string, string | number | boolean>,
  options?: FetchOptions
): Promise<T> {
  const url = new URL(baseUrl);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Vercel-optimized fetch for ISR (Incremental Static Regeneration)
 * 
 * This helper is specifically designed for Vercel deployments with optimal caching:
 * - Uses Vercel's Data Cache for server-side caching
 * - Leverages Edge Network for global CDN caching
 * - Automatic request deduplication in Server Components
 * 
 * @example
 * // Revalidate every hour (recommended for most use cases)
 * const data = await fetchVercelISR<MyType>('https://api.example.com/data', 3600);
 * 
 * // Revalidate every 5 minutes (for frequently changing data)
 * const data = await fetchVercelISR<MyType>('https://api.example.com/data', 300);
 * 
 * // With tags for on-demand revalidation
 * const data = await fetchVercelISR<MyType>(
 *   'https://api.example.com/data',
 *   3600,
 *   ['posts', 'blog']
 * );
 */
export async function fetchVercelISR<T>(
  url: string,
  revalidateSeconds: number,
  tags?: string[]
): Promise<T> {
  return fetchJSON<T>(url, {
    revalidate: revalidateSeconds,
    tags,
  });
}
