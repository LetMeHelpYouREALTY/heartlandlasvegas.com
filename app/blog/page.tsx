import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchKCMPosts } from '@/lib/rss-fetcher';
import BlogCard from '@/components/BlogCard';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import RealScoutListings from '@/components/RealScoutListings';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Homestead West Las Vegas | Dr. Jan Duffy',
  description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas from Dr. Jan Duffy and Keeping Current Matters.',
  ...canonicalMetadata('/blog'),
  keywords: [
    'Las Vegas real estate blog',
    'Las Vegas market updates',
    'new construction Las Vegas',
    'new construction news',
    'Homestead West updates',
    'Dr. Jan Duffy blog',
    'Las Vegas real estate trends'
  ],
  openGraph: {
    title: 'Real Estate Blog | Homestead West Las Vegas',
    description: 'Expert real estate insights for Northwest Las Vegas buyers and sellers.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/blog',
    images: ogImages('covered-patio'),
  },
  alternates: {
    canonical: 'https://www.homesteadwestlasvegas.com/blog',
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },
};

// ISR: Revalidate every hour
export const revalidate = 3600;

async function BlogPosts() {
  const posts = await fetchKCMPosts();
  
  if (!posts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-700">No posts available at the moment. Check back soon!</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
          <div className="bg-gray-200 h-6 rounded w-3/4 mb-2"></div>
          <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
          <div className="bg-gray-200 h-4 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Blog', url: 'https://www.homesteadwestlasvegas.com/blog' }
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Homestead West Las Vegas Real Estate Blog',
    description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas',
    url: 'https://www.homesteadwestlasvegas.com/blog',
    publisher: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'VIP New Construction Specialist',
      url: 'https://www.homesteadwestlasvegas.com'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <PageHero
          imageId="covered-patio"
          title="Real Estate Blog & Market Insights"
          subtitle={
            <>
              Las Vegas Market Updates
              <br />
              Expert Insights from VIP New Construction Specialist
            </>
          }
          badge="Market Insights"
        />

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Stay informed with the latest real estate trends, market updates, and expert advice 
                  for buying and selling homes in Northwest Las Vegas.
                </p>
              </div>
              
              <Suspense fallback={<BlogSkeleton />}>
                <BlogPosts />
              </Suspense>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homestead West Homes and Las Vegas MLS Listings
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
