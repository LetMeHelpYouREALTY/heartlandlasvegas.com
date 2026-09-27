import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchKCMPosts, fetchKCMPostBySlug } from '@/lib/rss-fetcher';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-contact';
import { mediaAbsoluteUrl } from '@/lib/media';

// ISR: Revalidate every hour
export const revalidate = 3600;

// Generate static params for all known posts
export async function generateStaticParams() {
  const posts = await fetchKCMPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchKCMPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | Homestead West Las Vegas Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      images: post.featuredImage
        ? [{ url: post.featuredImage }]
        : [{ url: mediaAbsoluteUrl('covered-patio'), width: 1920, height: 1080 }],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await fetchKCMPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(post.publishedAt);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Blog', url: 'https://www.homesteadwestlasvegas.com/blog' },
    { name: post.title, url: `https://www.homesteadwestlasvegas.com/blog/${slug}` }
  ]);

  // Schema.org BlogPosting structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Keeping Current Matters',
    },
    publisher: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: 'https://www.homesteadwestlasvegas.com',
      jobTitle: 'REALTOR®',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.link,
    },
    image: post.featuredImage || mediaAbsoluteUrl('covered-patio'),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {!post.featuredImage ? (
          <PageHero
            imageId="covered-patio"
            title={post.title}
            subtitle={`${formattedDate} · Homestead West Las Vegas market notes`}
            compact
          />
        ) : null}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
          </nav>
          
          <article>
            {/* Header */}
            <header className="mb-8">
              {/* Categories */}
              {post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <span 
                      key={category}
                      className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              
              {post.featuredImage ? (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
              ) : null}
              
              <div className="flex items-center gap-4 text-gray-700">
                <time dateTime={post.publishedAt.toISOString()}>
                  {formattedDate}
                </time>
                <span>•</span>
                <span>Powered by Keeping Current Matters</span>
              </div>
            </header>
            
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          )}
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-img:rounded-lg prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Browse listings — after article body (article-first layout) */}
            <section className="my-12 not-prose max-w-7xl mx-auto" aria-label="Homestead West MLS listings">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Browse Homestead West &amp; Northwest Las Vegas listings
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Live MLS inventory — see what matches your timeline and budget.
              </p>
              <RealScoutListings />
            </section>
            
            <CtaBand
              heading="Ready to buy in Northwest Las Vegas 89149?"
              body="Call (702) 299-6607, get directions to 5592 Dapple Gray Rd, or send Dr. Jan the Homestead West plan you want to tour."
              source={`blog-${slug}`}
            />
            
            {/* Source Attribution */}
            <footer className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This article is provided by{' '}
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:underline"
                >
                  Keeping Current Matters
                </a>
                . Shared by Dr. Jan Duffy, your Homestead West Las Vegas expert.
              </p>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
