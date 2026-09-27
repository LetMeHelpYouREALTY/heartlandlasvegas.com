import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import AmenityMap from '@/components/AmenityMap';
import {
  AGENT_NAME,
  BROKERAGE_NAME,
  EMAIL,
  LICENSE_ID,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_URL,
} from '@/lib/site-contact';
import { ASSET_HEADSHOT_PATH } from '@/lib/site-assets';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata, absoluteUrl } from '@/lib/metadata';
import {
  AMENITY_GUIDE_SECTIONS,
  AMENITIES_FAQS,
  COMMUNITY_CITY,
  COMMUNITY_NAME,
  agentAreaServedFragment,
  amenitiesFaqSchema,
  communityPlaceNode,
  verifiedPlacesItemListSchema,
} from '@/lib/nearby-amenities-content';
import { MAP_BASE_DISPLAY } from '@/lib/amenities';

export const metadata: Metadata = {
  title: `Nearby Amenities in ${COMMUNITY_NAME}, ${COMMUNITY_CITY} | Restaurants, Parks, Healthcare`,
  description: `Explore verified dining, parks, golf, grocery, healthcare, and schools near ${COMMUNITY_NAME} at ${MAP_BASE_DISPLAY}. Interactive map centered on Northwest Las Vegas 89149. Buyer representation: Dr. Jan Duffy — (702) 299-6607.`,
  ...canonicalMetadata('/amenities'),
  keywords: [
    'Homestead West amenities',
    'Centennial Hills restaurants',
    'Northwest Las Vegas parks',
    'amenities near Homestead West',
    'Las Vegas 89149 shopping',
    'schools near Homestead West',
    'Centennial Hills Hospital',
  ],
  openGraph: {
    title: `Nearby Amenities in ${COMMUNITY_NAME}, Las Vegas`,
    description: `Hyperlocal amenity map and buyer guide for ${COMMUNITY_NAME} — dining, recreation, healthcare, and commute context.`,
    type: 'website',
    url: absoluteUrl('/amenities'),
    images: ogImages('local-park-89149'),
  },
};

export default function AmenitiesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Community', url: `${SITE_URL}/community` },
    { name: 'Nearby Amenities', url: `${SITE_URL}/amenities` },
  ]);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Nearby Amenities in ${COMMUNITY_NAME}, ${COMMUNITY_CITY}`,
    description: `Interactive amenity map and hyperlocal guide for ${COMMUNITY_NAME} in Northwest Las Vegas.`,
    url: absoluteUrl('/amenities'),
    about: communityPlaceNode(),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(amenitiesFaqSchema()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(verifiedPlacesItemListSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentAreaServedFragment()) }}
      />

      <div className="min-h-screen bg-white">
        <PageHero
          imageId="local-park-89149"
          title={`Nearby Amenities in ${COMMUNITY_NAME}, ${COMMUNITY_CITY}`}
          subtitle={
            <>
              Hyperlocal map and buyer guide for Northwest Las Vegas (89149)
              <br />
              Centered near {MAP_BASE_DISPLAY}. Filter restaurants, parks, healthcare, schools, and more.
            </>
          }
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-gray-700 text-lg text-center mb-8">
              {COMMUNITY_NAME} sits at W. Ann Road and N. Fort Apache Road with quick access to US-95 and CC-215.
              Use the interactive map to explore everyday errands, healthcare, and recreation—then read the category
              guide below for context a map pin alone cannot provide.
            </p>
            <AmenityMap variant="default" />
          </div>
        </section>

        <section className="py-12 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
              Browse homes near these amenities
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Live MLS listings for {COMMUNITY_NAME} and Northwest Las Vegas.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 not-prose">
              Living near {COMMUNITY_NAME}: amenity guide
            </h2>
            {AMENITY_GUIDE_SECTIONS.map((section) => (
              <article key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {AMENITIES_FAQS.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-14 bg-[#1a365d] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400">
              <Image
                src={ASSET_HEADSHOT_PATH}
                alt={`${AGENT_NAME} — ${COMMUNITY_NAME} buyer's agent`}
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <h2 className="text-3xl font-bold mb-3">Work with {AGENT_NAME}</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Licensed Nevada REALTOR ({LICENSE_ID}) with {BROKERAGE_NAME}. {AGENT_NAME} represents{' '}
              <strong>you</strong>—not the builder—at {COMMUNITY_NAME} and across Northwest Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex rounded-lg bg-yellow-400 px-6 py-3 font-bold text-[#0f2439] hover:bg-yellow-300 transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex rounded-lg border-2 border-white px-6 py-3 font-bold hover:bg-white/10 transition-colors"
              >
                Schedule a consultation
              </Link>
            </div>
            <p className="text-sm text-blue-200">
              <a href={`mailto:${EMAIL}`} className="underline hover:text-white">{EMAIL}</a>
              {' · '}
              {MAP_BASE_DISPLAY}
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/community-map"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Community Map
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Find Our Office
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Community Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
