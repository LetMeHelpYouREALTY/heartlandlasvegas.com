import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';
import { GOOGLE_REVIEW_URL } from '@/lib/site-contact';

const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(GOOGLE_REVIEW_URL)}`;
const GOOGLE_REVIEW_BEST_PRACTICES = 'https://support.google.com/business/answer/2622994';

export const metadata: Metadata = {
  title: 'Review Us on Google | Homestead West Las Vegas | Dr. Jan Duffy',
  description: 'Leave a Google review for Dr. Jan Duffy and Homestead West Las Vegas. Reviews build trust and help our Business Profile stand out on Search and Maps.',
  ...canonicalMetadata('/reviews'),
  keywords: [
    'review Homestead West',
    'Google review Dr. Jan Duffy',
    'review Las Vegas real estate',
    'Homestead West Las Vegas reviews',
  ],
  openGraph: {
    title: 'Review Us on Google | Homestead West Las Vegas',
    description: 'Leave a Google review for Dr. Jan Duffy. Reviews build trust and help us stand out on Search and Maps.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/reviews',
    images: ogImages('sales-office'),
  },
};

export default function ReviewsPage() {
  const baseUrl = 'https://www.homesteadwestlasvegas.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Review Us on Google | Homestead West Las Vegas',
    description: 'Leave a Google review for Dr. Jan Duffy. Reviews build trust and help our Business Profile stand out on Search and Maps.',
    url: `${baseUrl}/reviews`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Homestead West | Homes by Dr Jan Duffy',
      url: baseUrl,
      sameAs: [GOOGLE_REVIEW_URL],
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Review Us on Google', url: `${baseUrl}/reviews` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white">
        <PageHero
          imageId="sales-office"
          title="Review Us on Google"
          subtitle="Reviews build trust and help our Business Profile stand out to customers on Search and Maps"
        />

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
              <p className="text-lg mb-4">
                Business Profiles with 5 or more reviews can get up to <strong>twice as many customers</strong>. Your review helps other Homestead West buyers find us and trust our expertise.
              </p>
            </div>

            <div className="max-w-xl mx-auto flex flex-col items-center gap-8">
              {/* Review link - primary CTA */}
              <div className="w-full text-center">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4285F4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3367D6] transition-colors shadow-lg"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden>
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Leave a review on Google
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline break-all">
                    {GOOGLE_REVIEW_URL}
                  </a>
                </p>
              </div>

              {/* QR code */}
              <div className="w-full text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Share your review link</h2>
                <SectionImage
                  imageId="sales-office"
                  heading="Share your review link"
                  caption="Homestead West office at 5592 Dapple Gray Rd, Las Vegas NV 89149"
                />
                <p className="text-sm text-gray-600 mb-4">
                  Right-click the QR code and select &quot;Save Image As...&quot; to share with customers
                </p>
                <div className="inline-block p-4 bg-white rounded-lg shadow-md">
                  <img
                    src={QR_CODE_URL}
                    alt="QR code linking to Google review page for Homestead West | Dr. Jan Duffy"
                    width={256}
                    height={256}
                    className="w-48 h-48 sm:w-64 sm:h-64"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-900 mt-4">Scan me!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best practices */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learn more</h2>
            <p className="text-gray-700 mb-4 max-w-xl mx-auto">
              Best practices for asking for reviews, and what to do about negative reviews.
            </p>
            <a
              href={GOOGLE_REVIEW_BEST_PRACTICES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a365d] font-semibold hover:underline"
            >
              Google Business Profile: Get more reviews
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Looking for a home in Homestead West?</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Browse current MLS listings — separate from leaving a review above.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore more</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Read testimonials
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                About Dr. Jan
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
