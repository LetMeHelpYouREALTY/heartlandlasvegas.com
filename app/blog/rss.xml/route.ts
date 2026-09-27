import { Feed } from 'feed';
import { fetchKCMPosts } from '@/lib/rss-fetcher';
import { SITE_URL } from '@/lib/site-contact';

export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    const posts = await fetchKCMPosts();
    const siteUrl = SITE_URL;
    
    if (!posts.length) {
      // Return empty feed if no posts available
      const emptyFeed = new Feed({
        title: 'Homestead West Las Vegas Real Estate Blog',
        description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas from Dr. Jan Duffy.',
        id: siteUrl,
        link: siteUrl,
        language: 'en',
        copyright: `All rights reserved ${new Date().getFullYear()}, Dr. Jan Duffy`,
        author: {
          name: 'Dr. Jan Duffy',
          email: 'DrJanSells@HomesteadWestLasVegas.com',
          link: siteUrl,
        },
      });
      
      return new Response(emptyFeed.rss2(), {
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
        },
      });
    }
    
    const feed = new Feed({
    title: 'Homestead West Las Vegas Real Estate Blog',
    description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas from Dr. Jan Duffy.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Dr. Jan Duffy`,
    author: {
      name: 'Dr. Jan Duffy',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      link: siteUrl,
    },
    feedLinks: {
      rss2: `${siteUrl}/blog/rss.xml`,
    },
  });
  
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [
        {
          name: 'Dr. Jan Duffy (via Keeping Current Matters)',
          link: siteUrl,
        },
      ],
      date: post.publishedAt,
      category: post.categories.map((cat) => ({ name: cat })),
      image: post.featuredImage,
    });
  });
  
    return new Response(feed.rss2(), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    
    // Return minimal valid RSS feed on error
    const errorFeed = new Feed({
      title: 'Homestead West Las Vegas Real Estate Blog',
      description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas from Dr. Jan Duffy.',
      id: 'https://www.homesteadwestlasvegas.com',
      link: 'https://www.homesteadwestlasvegas.com',
      language: 'en',
      copyright: `All rights reserved ${new Date().getFullYear()}, Dr. Jan Duffy`,
      author: {
        name: 'Dr. Jan Duffy',
        email: 'DrJanSells@HomesteadWestLasVegas.com',
        link: 'https://www.homesteadwestlasvegas.com',
      },
    });
    
    return new Response(errorFeed.rss2(), {
      status: 200, // Return 200 to avoid breaking RSS readers
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
      },
    });
  }
}
