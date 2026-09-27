import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL, ADDRESS, PHONE_DISPLAY, PHONE_TEL_HREF, BROKERAGE_NAME, LICENSE_ID } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

/** Visible FAQ copy must match FAQPage JSON-LD below. */
const laMadreFaqs = [
  {
    question: 'What zip codes are associated with La Madre Foothills in Las Vegas?',
    answer:
      'Listings and neighborhood labels often reference Northwest Las Vegas zip codes such as 89124, 89149, and 89166. Exact boundaries depend on the data source, so use live MLS search and map tools—and confirm schools and services for a specific address.',
  },
  {
    question: 'Is Homestead West the same as La Madre Foothills?',
    answer:
      'No. “La Madre Foothills” is a broad area name used for parts of Northwest Las Vegas near the La Madre Mountain foothills. Homestead West is a specific new construction community in the 89149 corridor. Many buyers compare Homestead West to other master-planned pockets in the same general part of town.',
  },
  {
    question: 'Where can I see current prices and inventory?',
    answer:
      'Use the live MLS search on this page. Market conditions and pricing change week to week; your agent should interpret list price, incentives, and comparable sales for the homes you are seriously considering.',
  },
  {
    question: 'How do I verify school assignments?',
    answer:
      'Clark County School District boundaries and programs can change. Confirm the assigned schools for your property address directly with CCSD or the school district’s official tools before you write an offer.',
  },
  {
    question: 'Is Northwest Las Vegas practical for Nellis or Creech commuters?',
    answer:
      'Many buyers weigh drive times to major employment centers and bases in Southern Nevada. The exact commute depends on your start time and route; map a few typical days and compare to other neighborhoods you are considering.',
  },
  {
    question: 'Why work with Dr. Jan Duffy when browsing multiple Northwest communities?',
    answer:
      'As a buyer’s agent, Dr. Jan Duffy represents your interests—not the builder’s sales office. When you are comparing Homestead West with other Northwest Las Vegas options, you get advocacy on incentives, lot selection, and contract terms.',
  },
  {
    question: 'Where can I read official city planning documents for La Madre Foothills?',
    answer:
      'The City of Las Vegas publishes adopted master plans and planning updates through Community Development (Planning & Zoning) at https://www.lasvegasnevada.gov/Business/Planning-Zoning — use the city’s official site for current master plan maps, land-use policies, and amendments, not unofficial copies.',
  },
] as const;

/** Official first-party resource for master plan / zoning (City of Las Vegas). */
const CITY_PLANNING_ZONING_URL = 'https://www.lasvegasnevada.gov/Business/Planning-Zoning' as const;

export const metadata: Metadata = {
  title: 'La Madre Foothills Las Vegas | Homes & Area Guide | Homestead West',
  description:
    'La Madre Foothills homes and area guide: zips 89124–89166, live MLS search, Northwest Las Vegas foothills context, and buyer representation. Call (702) 299-6607. Dr. Jan Duffy, Nevada license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.',
  keywords: [
    'La Madre Foothills Las Vegas',
    'Homestead West Northwest Las Vegas',
    '89149 new homes',
    '89166 Las Vegas real estate',
    '89124 Las Vegas real estate',
    'Northwest Las Vegas homes for sale',
    'La Madre Mountain Las Vegas',
  ],
  ...canonicalMetadata('/la-madre-foothills'),
  openGraph: {
    title: 'La Madre Foothills Las Vegas | Buyer Area Guide',
    description:
      'Northwest Las Vegas foothills context for buyers: live MLS listings, lifestyle overview, and how Homestead West fits the search.',
    type: 'website',
    url: absoluteUrl('/la-madre-foothills'),
    images: ogImages('la-madre-foothills'),
  },
};

export default function LaMadreFoothillsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'La Madre Foothills', url: absoluteUrl('/la-madre-foothills') },
  ]);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'La Madre Foothills Las Vegas | Homes & Area Guide',
    description:
      'Northwest Las Vegas foothills buyer guide for zip codes 89124, 89149, and 89166; Las Vegas Master Plan context; Homestead West; MLS search.',
    url: absoluteUrl('/la-madre-foothills'),
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'Homestead West Las Vegas' },
    about: {
      '@type': 'Place',
      name: 'La Madre Foothills',
      description:
        'Northwest Las Vegas area near the La Madre Mountain foothills, commonly associated with zip codes 89124, 89149, and 89166.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: laMadreFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="min-h-screen bg-white">
        <PageHero
          imageId="la-madre-foothills"
          title="La Madre Foothills, Las Vegas: Area Guide for Buyers"
          subtitle={
            <>
              Northwest Las Vegas near the La Madre Mountain foothills—master-planned communities, mountain views, and everyday
              retail along major corridors. Use this page to orient your search, then dive into live MLS{' '}
              <a href="#available-homes" className="text-yellow-400 underline hover:text-yellow-300">
                listings below
              </a>
              .
            </>
          }
          badge="GEO · Northwest Las Vegas · Foothills"
        >
          <div className="mt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex justify-center items-center rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-[#0f2439] hover:bg-yellow-300 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#available-homes"
              className="inline-flex justify-center items-center rounded-lg border-2 border-white/85 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Browse MLS listings
            </a>
            <Link
              href="/vip-buyer-program"
              className="inline-flex justify-center items-center rounded-lg border-2 border-white/85 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              VIP buyer program
            </Link>
          </div>
        </PageHero>

        <section className="py-14 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Browse Northwest Las Vegas MLS listings</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Live inventory—filter by price, beds/baths, and map as you compare Homestead West with other Northwest Las Vegas
              homes.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-10 bg-slate-50 border-y border-slate-200" id="next-steps" aria-labelledby="next-steps-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="next-steps-heading" className="text-2xl font-bold text-gray-900 mb-3">
              Next steps
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Start with live listings above. When you are ready to compare Homestead West with other La Madre Foothills and
              Northwest Las Vegas options, call or reach out—Dr. Jan represents buyers, not the builder&apos;s sales office.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex justify-center items-center rounded-lg bg-[#1a365d] px-5 py-3 font-semibold text-white hover:bg-[#2d4a7c] transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/vip-buyer-program"
                className="inline-flex justify-center items-center rounded-lg border-2 border-[#1a365d] bg-white px-5 py-3 font-semibold text-[#1a365d] hover:bg-blue-50 transition-colors"
              >
                VIP buyer program
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded-lg border-2 border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 hover:border-[#1a365d] hover:text-[#1a365d] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/appointment"
                className="inline-flex justify-center items-center rounded-lg border-2 border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 hover:border-[#1a365d] hover:text-[#1a365d] transition-colors"
              >
                Book appointment
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 not-prose mb-4">
              What is the La Madre Foothills area in Las Vegas?
            </h2>
            <SectionImage
              imageId="la-madre-foothills"
              heading="What is the La Madre Foothills area in Las Vegas?"
              caption="La Madre Mountain foothills west of Homestead West in Northwest Las Vegas 89149"
            />
            <p className="text-gray-700 text-lg mb-4">
              In everyday Las Vegas real estate language, “La Madre Foothills” refers to a northwest suburban pocket near the
              La Madre Mountain range—often discussed alongside zip codes like <strong>89124</strong>, <strong>89149</strong>,
              and <strong>89166</strong>. It is not a single gated subdivision; it is a geographic label buyers and portals use
              for a mix of newer master-planned communities, established neighborhoods, and custom homesites with mountain
              views—typically well north of the resort corridor.
            </p>
            <p className="text-gray-700 text-lg">
              Because labels and map boundaries vary by source, treat your <strong>exact address</strong> as the source of truth
              for schools, taxes, and HOA—not the neighborhood name alone.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How does the City of Las Vegas plan for La Madre Foothills?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The adopted <strong>Las Vegas Master Plan</strong> (Land Use + Environment) includes planning context for{' '}
              <strong>La Madre Foothills</strong>—covering long-range topics such as land use and place types, parks and open
              space, transportation, and related implementation strategies. Content is updated when the city amends or adopts
              new planning documents; always rely on the <strong>official</strong> published version for maps and policy
              language, not third-party summaries.
            </p>
            <p className="text-gray-700 text-lg">
              For current master plan materials, zoning information, and Community Development resources:{' '}
              <a
                href={CITY_PLANNING_ZONING_URL}
                className="text-[#1a365d] font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                City of Las Vegas Planning &amp; Zoning
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What schools and parks do buyers ask about here?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Families in Clark County typically work within the Clark County School District. Assignments and programs can
              change, so verify the school feeder pattern for your property address during your search—not from a blog
              snapshot.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              For outdoor recreation, Northwest Las Vegas offers a mix of neighborhood parks, trails, and open desert access
              toward the Spring Mountains. Many residents plan weekends around hiking, youth sports, and local parks—exact
              amenities depend on your subdivision and how close you are to regional trailheads.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where do people shop and dine around North Hualapai and Centennial?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Day-to-day retail clusters along major arterials—grocery, services, and casual dining—plus larger centers a short
              drive away. If you are comparing homes, map your typical errands (groceries, gym, daycare, commute) from each
              address you like; the “right” pocket is often the one that fits your real weekly routine, not only the floor plan.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How easy is it to get around the Las Vegas Valley?</h2>
            <p className="text-gray-700 text-lg mb-4">
              Northwest Las Vegas connects to the broader metro via the CC-215 beltway and other major routes toward US 95 and
              I-15. Drive times vary by time of day; if you are relocating, test your likely commute and airport run during
              the hours you actually travel.
            </p>
            <p className="text-gray-700 text-lg">
              Public transit availability varies by route. Confirm current RTC schedules and stops for your address if transit
              matters to your household.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How does Homestead West fit if I am searching the La Madre Foothills area?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              <Link href="/community" className="text-[#1a365d] font-semibold underline">
                Homestead West
              </Link>{' '}
              is a luxury single-story ranch community in the Northwest Las Vegas / 89149 corridor—often on the same buyer’s
              short list as other master-planned communities in the foothills. If you want larger ranch floor plans, pool-sized
              lots, and representation on the buyer side of a new construction purchase, Homestead West is a strong candidate
              to compare alongside your other favorites.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <Link href="/floor-plans" className="text-[#1a365d] font-semibold underline">
                  Compare Homestead West floor plans
                </Link>
              </li>
              <li>
                <Link href="/vip-buyer-program" className="text-[#1a365d] font-semibold underline">
                  VIP buyer program
                </Link>{' '}
                for new construction advocacy
              </li>
              <li>
                <Link href="/northwest-las-vegas-new-construction" className="text-[#1a365d] font-semibold underline">
                  Northwest Las Vegas new construction guide
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-14 bg-gray-50 border-t border-gray-200" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-8">
              Frequently asked questions
            </h2>
            <dl className="space-y-8">
              {laMadreFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-14 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Talk with Dr. Jan about Northwest Las Vegas homes
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl">
              What happens next: share your price range and timeline. You&apos;ll get straight answers on new construction
              incentives, lot strategy, and how Homestead West compares to other foothills communities—before you tour or write
              an offer.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex justify-center items-center rounded-lg bg-[#1a365d] px-6 py-3 font-semibold text-white hover:bg-[#2d4a7c] transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded-lg border-2 border-[#1a365d] px-6 py-3 font-semibold text-[#1a365d] hover:bg-blue-50 transition-colors"
              >
                Contact form
              </Link>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Local business &amp; license (GEO)</h3>
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
