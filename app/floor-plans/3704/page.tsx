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
  title: 'Plan 3704 - 3,704 Sq Ft Ranch with Casita | Homestead West Las Vegas | Dr. Jan Duffy',
  description:
    'Homestead West Plan 3704: 3,704 sq ft single-story ranch, optional detached casita, 4 bedrooms, 4.5 baths, 3–5 car garage, pool-sized lot. From $940,990. 5592 Dapple Gray Rd, Las Vegas NV 89149. Call (702) 299-6607.',
  keywords: [
    'Homestead West Plan 3704',
    'casita ranch home Las Vegas',
    '3704 sq ft new construction 89149',
    'multi-generational ranch Northwest Las Vegas',
  ],
  ...canonicalMetadata('/floor-plans/3704'),
  openGraph: {
    title: 'Plan 3704 | 3,704 Sq Ft Ranch + Casita | Homestead West Las Vegas',
    description: 'Largest Homestead West ranch with optional detached casita. Buyer representation from Dr. Jan Duffy.',
    type: 'website',
    url: absoluteUrl('/floor-plans/3704'),
    images: ogImages('detached-casita'),
  },
};

export default function Plan3704Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Floor Plans', url: absoluteUrl('/floor-plans') },
    { name: 'Plan 3704', url: absoluteUrl('/floor-plans/3704') },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Homestead West Plan 3704 - Single-Story Ranch Home',
    description:
      '3,704 sq ft single-story ranch home with 4 bedrooms, 4.5 baths, 3-5 car garage, optional detached casita, and pool-sized lot. Starting at $940,990.',
    image: [
      mediaAbsoluteUrl('detached-casita'),
      mediaAbsoluteUrl('luxury-kitchen'),
      mediaAbsoluteUrl('covered-patio'),
      mediaAbsoluteUrl('three-car-garage'),
    ],
    brand: { '@type': 'Brand', name: 'Homestead West' },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      price: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      url: absoluteUrl('/floor-plans/3704'),
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
          imageId="detached-casita"
          title="Homestead West Plan 3704 — 3,704 Sq Ft Ranch Home with Casita Option"
          subtitle={`${ADDRESS_LINE} · From $940,990 · Call ${PHONE_DISPLAY}`}
        />

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">When Plan 3704 is the better fit</h2>
            <SectionImage
              imageId="interior-great-room"
              heading="When Plan 3704 is the better fit"
              caption="Larger great room footprint in the 3,704 sq ft Homestead West ranch"
            />
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
              <li><strong>Size:</strong> 3,704 square feet, single story</li>
              <li><strong>Beds / baths:</strong> 4 bedrooms, 4.5 bathrooms</li>
              <li><strong>Casita:</strong> Optional detached guest suite</li>
              <li><strong>Garage:</strong> 3–5 car</li>
              <li><strong>Starting price:</strong> $940,990 (lot and casita premiums extra)</li>
              <li><strong>Office:</strong> {ADDRESS_LINE}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Choose 3704 when you want maximum single-story square footage, a larger entertaining room, or a casita for guests or work. Dr. Jan Duffy compares lot premiums and rear-yard orientation before you write—builder sales staff are paid to sell remaining inventory, not to shop the map for you.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Optional detached casita</h2>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Private suite with a connecting walkway</h3>
            <SectionImage
              imageId="detached-casita"
              heading="Optional detached casita"
              caption="Detached casita option behind a Homestead West ranch in Northwest Las Vegas"
            />
            <p className="text-gray-700">
              The casita is a separate lockable suite—useful for guests or a home office. Confirm setbacks, HVAC, and how the builder prices it on your specific lot before you sign.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Kitchen, patio, and garage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Primary spa bath</h3>
                <SectionImage imageId="spa-primary-bath" heading="Primary spa bath" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Kitchen</h3>
                <SectionImage imageId="luxury-kitchen" heading="Kitchen" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Covered patio</h3>
                <SectionImage imageId="covered-patio" heading="Covered patio" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Garage</h3>
                <SectionImage imageId="three-car-garage" heading="Garage" />
              </div>
            </div>
            <p className="mt-6">
              <Link href="/floor-plans/3336" className="text-[#1a365d] font-semibold underline">
                Compare Plan 3336 (3,336 sq ft) →
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
            <LeadForm source="floor-plan-3704" heading="Tour Plan 3704 with Dr. Jan" />
            <p className="text-center text-sm text-gray-600 mt-4">
              Or <a className="underline font-semibold" href={PHONE_TEL_HREF}>call {PHONE_DISPLAY}</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
