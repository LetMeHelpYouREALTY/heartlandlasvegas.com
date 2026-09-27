import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import LeadForm from '@/components/LeadForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { mediaAbsoluteUrl } from '@/lib/media';
import { ADDRESS_LINE, EMAIL, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Plan 3336 - 3,336 Sq Ft Ranch Home | Homestead West Las Vegas | Dr. Jan Duffy',
  description:
    'Homestead West Plan 3336: 3,336 sq ft single-story ranch, 4–5 bedrooms, 4.5 baths, 3–5 car garage, pool-sized lot. From $910,990 at 5592 Dapple Gray Rd, Las Vegas NV 89149. Call (702) 299-6607.',
  keywords: [
    'Homestead West Plan 3336',
    '3336 sq ft ranch Las Vegas',
    'single story homes Northwest Las Vegas',
    'new construction 89149',
  ],
  ...canonicalMetadata('/floor-plans/3336'),
  openGraph: {
    title: 'Plan 3336 | 3,336 Sq Ft Ranch | Homestead West Las Vegas',
    description: 'Single-story ranch with pool-sized lot in Northwest Las Vegas. Buyer representation from Dr. Jan Duffy.',
    type: 'website',
    url: absoluteUrl('/floor-plans/3336'),
    images: ogImages('luxury-kitchen'),
  },
};

export default function Plan3336Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Floor Plans', url: absoluteUrl('/floor-plans') },
    { name: 'Plan 3336', url: absoluteUrl('/floor-plans/3336') },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Homestead West Plan 3336 - Single-Story Ranch Home',
    description:
      '3,336 sq ft single-story ranch home with 4-5 bedrooms, 4.5 baths, 3-5 car garage, and pool-sized lot. Starting at $910,990.',
    image: [
      mediaAbsoluteUrl('luxury-kitchen'),
      mediaAbsoluteUrl('interior-great-room'),
      mediaAbsoluteUrl('primary-suite'),
      mediaAbsoluteUrl('three-car-garage'),
    ],
    brand: { '@type': 'Brand', name: 'Homestead West' },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      price: '910990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      url: absoluteUrl('/floor-plans/3336'),
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+17022996607',
        email: EMAIL,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="min-h-screen bg-white">
        <PageHero
          imageId="luxury-kitchen"
          title="Homestead West Plan 3336 — 3,336 Sq Ft Ranch Home"
          subtitle={`${ADDRESS_LINE} · From $910,990 · Call ${PHONE_DISPLAY}`}
        />

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What you get in Plan 3336</h2>
            <SectionImage
              imageId="interior-great-room"
              heading="What you get in Plan 3336"
              caption="Open great room in the 3,336 sq ft Homestead West ranch — Northwest Las Vegas 89149"
            />
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
              <li><strong>Size:</strong> 3,336 square feet, single story</li>
              <li><strong>Beds / baths:</strong> 4–5 bedrooms, 4.5 bathrooms</li>
              <li><strong>Garage:</strong> 3–5 car</li>
              <li><strong>Lot:</strong> Pool-sized, optional covered patio</li>
              <li><strong>Starting price:</strong> $910,990 (lot premiums extra)</li>
              <li><strong>Office:</strong> {ADDRESS_LINE}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Plan 3336 is the efficient large ranch in Homestead West—enough square footage for everyday living and guests without jumping to the 3,704 sq ft plan. Dr. Jan Duffy represents you on lot choice, upgrades, and contract terms. Builder-paid buyer-agent commission is typical.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Kitchen, dining, and primary suite</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Kitchen and dining</h3>
                <SectionImage imageId="dining-room" heading="Kitchen and dining" />
                <p className="text-gray-700">Open kitchen to dining and great room—review island, pantry, and appliance packages at the design center with your buyer&apos;s agent, not only the builder&apos;s desk.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Primary suite</h3>
                <SectionImage imageId="primary-suite" heading="Primary suite" />
                <p className="text-gray-700">Split-bedroom ranch layout with a large primary suite. Confirm window orientation before you lock a homesite—mountain vs. neighbor views change by lot.</p>
                <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">Primary spa bath</h3>
                <SectionImage imageId="spa-primary-bath" heading="Primary spa bath" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Garage and pool-sized lot</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">3–5 car garage</h3>
                <SectionImage imageId="three-car-garage" heading="3–5 car garage" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pool-sized backyard</h3>
                <SectionImage imageId="pool-sized-lot" heading="Pool-sized backyard" />
              </div>
            </div>
            <p className="mt-6">
              <Link href="/floor-plans/3704" className="text-[#1a365d] font-semibold underline">
                Compare Plan 3704 (3,704 sq ft + casita option) →
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Available Homestead West homes on the MLS</h2>
            <p className="text-center text-gray-600 mb-8">Inventory changes. Call {PHONE_DISPLAY} to hold a lot.</p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-xl">
            <LeadForm source="floor-plan-3336" heading="Tour Plan 3336 with Dr. Jan" />
            <p className="text-center text-sm text-gray-600 mt-4">
              Or <a className="underline font-semibold" href={PHONE_TEL_HREF}>call {PHONE_DISPLAY}</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
