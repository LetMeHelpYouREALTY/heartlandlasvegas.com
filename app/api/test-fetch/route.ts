import { NextRequest, NextResponse } from 'next/server';
import { fetchKCMPosts } from '@/lib/rss-fetcher';

/**
 * Test endpoint to demonstrate fetch usage with Vercel + Next.js 15
 * 
 * Access at: /api/test-fetch
 * 
 * Vercel Compatibility:
 * - Uses native fetch with Next.js 15 caching
 * - Compatible with Vercel's Data Cache and Edge Network
 * - Demonstrates ISR patterns for optimal performance
 */
export const revalidate = 0; // Always fresh for testing

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const testType = searchParams.get('type') || 'rss';

  try {
    switch (testType) {
      case 'rss':
        // Test RSS fetcher
        const startTime = Date.now();
        const posts = await fetchKCMPosts();
        const fetchTime = Date.now() - startTime;

        return NextResponse.json({
          success: true,
          type: 'RSS Fetcher Test',
          timestamp: new Date().toISOString(),
          fetchTime: `${fetchTime}ms`,
          postCount: posts.length,
          posts: posts.slice(0, 3).map(post => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt.substring(0, 100) + '...',
            publishedAt: post.publishedAt.toISOString(),
            hasImage: !!post.featuredImage,
          })),
          cache: {
            used: fetchTime < 100, // Likely cached if very fast
          },
        });

      case 'native':
        // Test native fetch API
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        const fetchStart = Date.now();
        
        const response = await fetch(url, {
          next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const fetchDuration = Date.now() - fetchStart;

        return NextResponse.json({
          success: true,
          type: 'Native Fetch Test',
          timestamp: new Date().toISOString(),
          fetchTime: `${fetchDuration}ms`,
          url,
          status: response.status,
          statusText: response.statusText,
          headers: {
            'content-type': response.headers.get('content-type'),
            'cache-control': response.headers.get('cache-control'),
          },
          data: {
            id: data.id,
            title: data.title,
            body: data.body.substring(0, 100) + '...',
          },
        });

      case 'error':
        // Test error handling
        const errorResponse = await fetch('https://invalid-url-that-does-not-exist-12345.com/api', {
          next: { revalidate: 0 },
        });
        return NextResponse.json({ success: false, error: 'Should not reach here' });

      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid test type',
          availableTypes: ['rss', 'native', 'error'],
        }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      type: testType,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}
