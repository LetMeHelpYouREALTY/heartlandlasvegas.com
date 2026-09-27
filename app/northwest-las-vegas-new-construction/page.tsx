import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL, ADDRESS, PHONE_DISPLAY, PHONE_TEL_HREF, BROKERAGE_NAME, LICENSE_ID } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Northwest Las Vegas New Construction & 89149 Homes | Homestead West Area Guide',
  description:
    'Northwest Las Vegas new construction in zip code 89149: growth corridors, schools, and how Homestead West fits Centennial Hills. Dr. Jan Duffy, Nevada license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.',
  keywords: [
    'Northwest Las Vegas new construction',
    '89149 new homes',
    'Centennial Hills new construction',
    'Las Vegas 89149 real estate',
    'Ann Road Fort Apache homes',
    'new construction Northwest Las Vegas',
  ],
  ...canonicalMetadata('/northwest-las-vegas-new-construction'),
  openGraph: {
    title: 'Northwest Las Vegas New Construction & 89149',
    description:
      'Local guide to new construction in Northwest Las Vegas and zip 89149, with Homestead West as a flagship community.',
    type: 'website',
    url: absoluteUrl('/northwest-las-vegas-new-construction'),
    images: ogImages('community-streetscape'),
  },
};

export default function NorthwestLasVegasNewConstructionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Northwest Las Vegas New Construction', url: absoluteUrl('/northwest-las-vegas-new-construction') },
  ]);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Northwest Las Vegas New Construction & 89149',
    description:
      'Guide to new construction homes in Northwest Las Vegas and zip code 89149, including Homestead West and buyer representation.',
    url: absoluteUrl('/northwest-las-vegas-new-construction'),
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'Homestead West Las Vegas' },
    about: {
      '@type': 'Place',
      name: 'Northwest Las Vegas',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <article className="min-h-screen bg-white">
        <PageHero
          imageId="community-streetscape"
          title="Northwest Las Vegas New Construction in 89149"
          subtitle={
            <>
              How the Centennial Hills corridor is growing—and how{' '}
              <Link href="/community" className="text-yellow-400 underline hover:text-yellow-300">
                Homestead West
              </Link>{' '}
              fits buyers who want single-story ranch homes on generous lots.
            </>
          }
          badge="GEO · Northwest Las Vegas · 89149"
        />

        <section className="py-14 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Browse 89149 &amp; Northwest Las Vegas listings</h2>
            <SectionImage
              imageId="listings-search-desk"
              heading="Browse 89149 & Northwest Las Vegas listings"
              caption="Search new construction in zip code 89149 from a Homestead West ranch kitchen"
              className="max-w-3xl mx-auto"
            />
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Live MLS inventory — updated as new homes and phases come online.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 not-prose mb-4">
              What does &quot;Northwest Las Vegas&quot; mean for new construction buyers?
            </h2>
            <SectionImage
              imageId="community-streetscape"
              heading={`What does "Northwest Las Vegas" mean for new construction buyers?`}
              caption="New construction streetscape in Homestead West, Northwest Las Vegas 89149"
            />
            <p className="text-gray-700 text-lg mb-4">
              Northwest Las Vegas generally refers to the area north of US 95 and west of I-15, including master-planned pockets
              and infill near Ann Road, Fort Apache, and Skye Canyon. Zip code <strong>89149</strong> covers much of this
              growth, including Centennial Hills—where buyers balance commute times to Summerlin, the medical district, and
              outdoor recreation toward Mount Charleston and Red Rock Canyon.
            </p>
            <p className="text-gray-700 text-lg">
              New construction here is not one-size-fits-all: communities differ by builder, price band, lot size, and HOA
              structure. A local buyer&apos;s agent helps you compare incentives, lot premiums, and timeline—not just floor
              plans on a brochure.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              If you are also researching the broader Northwest foothills sometimes labeled{' '}
              <strong>La Madre Foothills</strong> (often associated with zip codes 89124, 89149, and 89166), see our{' '}
              <Link href="/la-madre-foothills" className="text-[#1a365d] font-semibold underline">
                La Madre Foothills buyer guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why is zip code 89149 popular for new homes?
            </h2>
            <SectionImage
              imageId="ann-fort-apache-89149"
              heading="Why is zip code 89149 popular for new homes?"
              caption="Ann Road and Fort Apache area of Northwest Las Vegas zip code 89149 near Homestead West"
            />
            <p className="text-gray-700 text-lg mb-4">
              89149 combines newer infrastructure with access to major arterials (CC-215, US 95) and everyday retail along
              Centennial Center and nearby corridors. Buyers often weigh commute time to employment centers,
              named CCSD campuses, and proximity to parks—details that change with boundary updates, so your agent should confirm current zoning and
              school names during your search.
            </p>
            <p className="text-gray-700 text-lg">
              <Link href="/community-map" className="text-[#1a365d] font-semibold underline">
                Explore the community map
              </Link>{' '}
              for Homestead West, then ask how lot orientation, rear yards, and builder incentives compare to other{' '}
              <Link href="/homestead-west-vs-skye-canyon" className="text-[#1a365d] font-semibold underline">
                Northwest communities
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where does Homestead West fit in 89149?</h2>
            <p className="text-gray-700 text-lg mb-4">
              Homestead West is a luxury single-story ranch community near W. Ann Road and N. Fort Apache Road, focused on
              larger floor plans and pool-sized lots. It is a strong match if you want one-level living, optional casita
              flexibility, and a buyer representative who negotiates with the builder on your behalf—not the sales office&apos;s
              default script.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <Link href="/floor-plans" className="text-[#1a365d] font-semibold underline">
                  Compare available floor plans
                </Link>{' '}
                (Plan 3336 and Plan 3704)
              </li>
              <li>
                <Link href="/vip-buyer-program" className="text-[#1a365d] font-semibold underline">
                  VIP buyer program
                </Link>{' '}
                for early-phase access and advocacy
              </li>
              <li>
                <Link href="/contact" className="text-[#1a365d] font-semibold underline">
                  Contact
                </Link>{' '}
                for a private consultation
              </li>
            </ul>
          </div>
        </section>

        <section className="py-14 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local business &amp; license (GEO)</h2>
            <p className="text-gray-800 mb-2">
              <strong>Dr. Jan Duffy</strong> · {BROKERAGE_NAME}
            </p>
            <p className="text-gray-800 mb-2">
              Nevada real estate license <strong>{LICENSE_ID}</strong>
            </p>
            <p className="text-gray-800 mb-2">
              <a href={PHONE_TEL_HREF} className="text-[#1a365d] font-semibold underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="text-gray-800">
              {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
