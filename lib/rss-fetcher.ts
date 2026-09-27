import Parser from 'rss-parser';
import type { RSSItem, BlogPost } from './rss-types';

const KCM_RSS_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

// Custom parser with extended fields
const parser = new Parser<{}, RSSItem>({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['dc:creator', 'creator'],
      ['media:content', 'mediaContent', { keepArray: false }],
    ],
  },
  timeout: 10000, // 10 second timeout
  maxRedirects: 5,
});

function generateSlug(title: string, guid: string): string {
  // Create URL-safe slug from title
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  
  // Add hash from guid for uniqueness
  const hash = guid.split('/').pop()?.slice(-8) || Date.now().toString(36);
  return `${baseSlug}-${hash}`;
}

function extractFeaturedImage(
  content: string, 
  item?: RSSItem
): string | undefined {
  // First, check for enclosure (RSS feed standard for media)
  if (item?.enclosure?.url && item.enclosure.type?.startsWith('image/')) {
    return item.enclosure.url;
  }
  
  // Check for media:content (Media RSS standard)
  if (item?.mediaContent?.url && 
      (item.mediaContent.type?.startsWith('image/') || item.mediaContent.medium === 'image')) {
    return item.mediaContent.url;
  }
  
  // Check content for images
  if (!content) return undefined;
  
  // Try multiple patterns for image extraction
  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/i,  // Standard img src
    /<img[^>]+src=([^\s>]+)/i,         // Without quotes
    /<img[^>]+data-src=["']([^"']+)["']/i, // Lazy loaded images
    /<img[^>]+data-lazy-src=["']([^"']+)["']/i, // WordPress lazy load
    /background-image:\s*url\(["']?([^"')]+)["']?\)/i, // CSS background images
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match && match[1]) {
      let imageUrl = match[1];
      // Clean up URL
      imageUrl = imageUrl.replace(/^["']|["']$/g, '');
      // Decode HTML entities
      imageUrl = imageUrl.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      // Only return if it's a valid HTTP(S) URL
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
      }
      // Handle relative URLs (convert to absolute if base URL available)
      if (imageUrl.startsWith('//')) {
        return `https:${imageUrl}`;
      }
    }
  }
  
  return undefined;
}

function createExcerpt(content: string, maxLength: number = 160): string {
  // Strip HTML and create excerpt
  const text = content
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (text.length <= maxLength) return text;
  
  // Cut at word boundary
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.slice(0, lastSpace) + '...';
}

// Cache for fallback posts (in case RSS feed fails)
let cachedPosts: BlogPost[] = [];
let cacheTimestamp: number = 0;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function fetchKCMPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(KCM_RSS_URL);
    
    const posts = feed.items.map((item): BlogPost => {
      const content = item.content || item['content:encoded'] || item.contentSnippet || '';
      return {
        slug: generateSlug(item.title || '', item.guid || item.link || ''),
        title: item.title || 'Untitled Post',
        excerpt: item.contentSnippet || createExcerpt(content),
        content: content,
        publishedAt: new Date(item.isoDate || item.pubDate || Date.now()),
        link: item.link || '',
        categories: item.categories || [],
        featuredImage: extractFeaturedImage(content, item),
      };
    });
    
    // Update cache on successful fetch
    cachedPosts = posts;
    cacheTimestamp = Date.now();
    
    return posts;
  } catch (error) {
    console.error('Error fetching KCM RSS feed:', error);
    
    // Return cached posts if available and not too old
    if (cachedPosts.length > 0 && (Date.now() - cacheTimestamp) < CACHE_DURATION) {
      console.warn('Using cached posts due to RSS feed error');
      return cachedPosts;
    }
    
    // Return empty array if no cache available
    return [];
  }
}

export async function fetchKCMPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchKCMPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Export the RSS URL for reference
export { KCM_RSS_URL };
