# Fetch & Push Examples - Next.js 15 + Vercel

Complete guide showing how to **FETCH** (GET) and **PUSH** (POST) data using the fetch utilities.

---

## 📥 FETCH Examples (GET Requests)

### 1. Fetch in Server Component (Recommended)

```typescript
// app/listings/page.tsx
import { fetchVercelISR } from '@/lib/fetch-utils';

type Listing = {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
};

export default async function ListingsPage() {
  // Fetch with ISR - cached for 1 hour
  const listings = await fetchVercelISR<Listing[]>(
    'https://api.example.com/listings',
    3600 // Cache for 1 hour
  );

  return (
    <div>
      <h1>Available Listings</h1>
      {listings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.address}</h2>
          <p>${listing.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2. Fetch with Query Parameters

```typescript
// app/search/page.tsx
import { getJSON } from '@/lib/fetch-utils';

type SearchResult = {
  listings: Listing[];
  total: number;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; minPrice?: string }>
}) {
  const params = await searchParams;
  
  // Fetch with query parameters
  const results = await getJSON<SearchResult>(
    'https://api.example.com/search',
    {
      q: params.q || '',
      minPrice: params.minPrice || '0',
      limit: 20,
    },
    {
      next: { revalidate: 300 } // Cache for 5 minutes
    }
  );

  return (
    <div>
      <h1>Search Results</h1>
      <p>Found {results.total} listings</p>
      {/* Render results */}
    </div>
  );
}
```

### 3. Fetch with Error Handling

```typescript
// app/blog/page.tsx
import { safeFetch } from '@/lib/fetch-utils';

type BlogPost = {
  id: string;
  title: string;
  content: string;
};

export default async function BlogPage() {
  const { data, error, status } = await safeFetch<BlogPost[]>(
    'https://api.example.com/posts',
    {
      next: { revalidate: 3600 }
    }
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading posts: {error}</p>
        <p className="text-gray-500">Status: {status}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      {data.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
```

### 4. Fetch with Retry Logic

```typescript
// app/api/external-data/route.ts
import { fetchWithRetry } from '@/lib/fetch-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Automatically retries 3 times if request fails
    const data = await fetchWithRetry<ExternalData>(
      'https://unreliable-api.example.com/data',
      {
        retries: 3,
        delay: 1000, // Wait 1 second between retries
        next: { revalidate: 3600 }
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
```

---

## 📤 PUSH Examples (POST/PUT Requests)

### 1. Submit Lead Form (Client Component)

```typescript
// components/LeadForm.tsx
'use client';

import { useState } from 'react';
import { postJSON } from '@/lib/fetch-utils';

type LeadData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
};

type LeadResponse = {
  success: boolean;
  leadId: string;
  message: string;
};

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const leadData: LeadData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      // Push data to API
      const response = await postJSON<LeadResponse>(
        '/api/leads/submit',
        leadData
      );

      if (response.success) {
        setSuccess(true);
        e.currentTarget.reset();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit lead');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-800">Thank you! We'll contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Message (optional)"
        className="w-full px-4 py-2 border rounded-lg"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Lead'}
      </button>
    </form>
  );
}
```

### 2. API Route Handler (Server-Side)

```typescript
// app/api/leads/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { postJSON } from '@/lib/fetch-utils';

type LeadSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: LeadSubmission = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Push to external CRM (Follow Up Boss, etc.)
    const crmResponse = await postJSON<{ id: string }>(
      `${process.env.FOLLOW_UP_BOSS_BASE_URL}/leads`,
      {
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,
        phone: body.phone,
        notes: body.message,
        source: 'Website Contact Form',
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.FOLLOW_UP_BOSS_API_KEY}`,
        },
      }
    );

    // Send confirmation email (optional)
    // await sendEmail(body.email, 'Thank you for contacting us');

    return NextResponse.json({
      success: true,
      leadId: crmResponse.id,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
```

### 3. Server Action (Alternative to API Route)

```typescript
// lib/actions.ts
'use server';

import { postJSON } from '@/lib/fetch-utils';
import { revalidateTag } from 'next/cache';

type LeadData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export async function submitLead(formData: FormData) {
  try {
    const leadData: LeadData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    // Validate
    if (!leadData.firstName || !leadData.email || !leadData.phone) {
      return { error: 'Missing required fields' };
    }

    // Push to CRM
    const response = await postJSON<{ id: string }>(
      `${process.env.FOLLOW_UP_BOSS_BASE_URL}/leads`,
      leadData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.FOLLOW_UP_BOSS_API_KEY}`,
        },
      }
    );

    // Revalidate any cached data
    revalidateTag('leads');

    return { success: true, leadId: response.id };
  } catch (error) {
    return { error: 'Failed to submit lead' };
  }
}
```

### 4. Using Server Action in Form

```typescript
// components/ContactForm.tsx
'use client';

import { submitLead } from '@/lib/actions';
import { useActionState } from 'react';

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitLead,
    { error: null, success: false }
  );

  return (
    <form action={formAction}>
      {state.error && (
        <div className="text-red-600">{state.error}</div>
      )}
      
      {state.success && (
        <div className="text-green-600">Thank you! We'll contact you soon.</div>
      )}

      <input name="firstName" type="text" required />
      <input name="lastName" type="text" required />
      <input name="email" type="email" required />
      <input name="phone" type="tel" required />

      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

### 5. Update/Edit Data (PUT Request)

```typescript
// app/api/leads/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchJSON } from '@/lib/fetch-utils';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  try {
    // Update lead in CRM
    const response = await fetchJSON<{ success: boolean }>(
      `${process.env.FOLLOW_UP_BOSS_BASE_URL}/leads/${id}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${process.env.FOLLOW_UP_BOSS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        cache: 'no-store', // Always fresh for updates
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}
```

---

## 🔄 Complete Example: Fetch + Push Workflow

```typescript
// app/valuation/page.tsx
'use client';

import { useState } from 'react';
import { getJSON, postJSON } from '@/lib/fetch-utils';

type ValuationRequest = {
  address: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
};

type ValuationResult = {
  estimatedValue: number;
  confidence: number;
  comparableSales: Array<{
    address: string;
    price: number;
    soldDate: string;
  }>;
};

export function ValuationTool() {
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const request: ValuationRequest = {
      address: formData.get('address') as string,
      bedrooms: parseInt(formData.get('bedrooms') as string),
      bathrooms: parseInt(formData.get('bathrooms') as string),
      squareFeet: parseInt(formData.get('squareFeet') as string),
    };

    try {
      // 1. FETCH: Get valuation estimate
      const valuation = await getJSON<ValuationResult>(
        '/api/valuation/estimate',
        request
      );

      setResult(valuation);

      // 2. PUSH: Save request to database
      await postJSON('/api/valuation/save', {
        ...request,
        estimatedValue: valuation.estimatedValue,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Get Valuation'}
        </button>
      </form>

      {result && (
        <div>
          <h2>Estimated Value: ${result.estimatedValue.toLocaleString()}</h2>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}
```

---

## 🎯 Real Estate Use Cases

### Fetch Listings
```typescript
const listings = await fetchVercelISR<Listing[]>(
  'https://api.mls.com/listings',
  3600, // Cache 1 hour
  ['listings'] // Tag for on-demand revalidation
);
```

### Submit Contact Form
```typescript
await postJSON('/api/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '702-555-1234',
  message: 'Interested in Homestead West',
});
```

### Fetch Blog Posts
```typescript
const posts = await fetchKCMPosts(); // Already implemented
```

### Submit Lead to CRM
```typescript
await postJSON(`${process.env.FOLLOW_UP_BOSS_BASE_URL}/leads`, {
  first_name: 'Jane',
  last_name: 'Smith',
  email: 'jane@example.com',
  phone: '702-555-5678',
  source: 'Website',
});
```

---

## ✅ Best Practices

1. **Server Components**: Use for fetching data (better performance, SEO)
2. **Client Components**: Use for forms and interactive features
3. **Error Handling**: Always handle errors gracefully
4. **Loading States**: Show loading indicators during requests
5. **Validation**: Validate data before pushing
6. **Caching**: Use appropriate cache strategies for fetching
7. **TypeScript**: Always type your requests and responses

---

## 🚀 Quick Reference

| Action | Function | Example |
|--------|----------|---------|
| **Fetch (GET)** | `fetchVercelISR()` | `await fetchVercelISR(url, 3600)` |
| **Fetch with Params** | `getJSON()` | `await getJSON(url, {q: 'search'})` |
| **Fetch Safe** | `safeFetch()` | `await safeFetch(url)` |
| **Push (POST)** | `postJSON()` | `await postJSON(url, data)` |
| **With Retry** | `fetchWithRetry()` | `await fetchWithRetry(url, {retries: 3})` |
| **With Timeout** | `fetchWithTimeout()` | `await fetchWithTimeout(url, {timeout: 5000})` |
