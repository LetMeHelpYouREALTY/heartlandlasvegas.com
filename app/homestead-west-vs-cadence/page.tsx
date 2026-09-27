import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Homestead West vs Cadence (Henderson): New Construction Comparison | Las Vegas Valley',
  description:
    'Compare Homestead West (Northwest Las Vegas, 89149) and Cadence master-planned community in Henderson. Location, commute, home styles, and how to choose with Dr. Jan Duffy.',
  keywords: [
    'Homestead West vs Cadence',
    'Cadence Henderson vs Northwest Las Vegas',
    '89149 vs Henderson new construction',
    'Las Vegas new construction comparison',
    'Centennial Hills vs Cadence',
  ],
  ...canonicalMetadata('/homestead-west-vs-cadence'),
  openGraph: {
    title: 'Homestead West vs Cadence: Comparison',
    description: 'Side-by-side look at two Las Vegas Valley new construction options.',
    type: 'website',
    url: absoluteUrl('/homestead-west-vs-cadence'),
    images: ogImages('cadence-henderson'),
  },
};

export default function HomesteadWestVsCadencePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Homestead West vs Cadence', url: absoluteUrl('/homestead-west-vs-cadence') },
  ]);

  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Homestead West vs Cadence (Henderson): New Construction Comparison',
    description:
      'Comparison of Homestead West in Northwest Las Vegas and Cadence in Henderson for new construction buyers.',
    author: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      url: `${SITE_URL}/about`,
    },
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />

      <article className="min-h-screen bg-white">
        <PageHero
          imageId="cadence-henderson"
          title="Homestead West vs Cadence (Henderson)"
          subtitle="Two different markets—Northwest Las Vegas (89149) vs master-planned Henderson—both with new construction. Here is how buyers often compare them before touring."
        />

        <section className="py-14 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Browse live MLS listings</h2>
            <SectionImage
              imageId="listings-search-desk"
              heading="Browse live MLS listings"
              caption="Live Las Vegas Valley inventory while you compare Homestead West and Cadence"
              className="max-w-3xl mx-auto"
            />
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              See current Las Vegas Valley inventory while you compare Homestead West and Cadence.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Quick comparison</h2>
            <SectionImage
              imageId="cadence-henderson"
              heading="Quick comparison"
              caption="Two-story Henderson new construction compared with Homestead West single-story ranches in 89149"
            />
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Topic</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Homestead West</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Cadence (Henderson)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Primary area</td>
                    <td className="border border-gray-300 px-4 py-3">Northwest Las Vegas · 89149 · near Ann &amp; Fort Apache</td>
                    <td className="border border-gray-300 px-4 py-3">Henderson · master-planned Cadence</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Typical commute focus</td>
                    <td className="border border-gray-300 px-4 py-3">NW corridor, Summerlin adjacency, 215/95 access</td>
                    <td className="border border-gray-300 px-4 py-3">Henderson employers, Galleria corridor, Lake Mead area</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Homestead West product focus</td>
                    <td className="border border-gray-300 px-4 py-3">Luxury single-story ranch, larger plans, pool-sized lots</td>
                    <td className="border border-gray-300 px-4 py-3">Broader mix of builders and product types in a large MPC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Which commute and lifestyle fit you?</h2>
            <SectionImage
              imageId="commute-northwest"
              heading="Which commute and lifestyle fit you?"
              caption="Northwest Las Vegas commute corridors near Homestead West versus southeast-valley Henderson drives"
            />
            <p className="text-lg text-gray-700 mb-4">
              <strong>How do I choose between Northwest Las Vegas and Henderson?</strong> Start with non-negotiables: work
              location, school preferences, and daily drive patterns. Henderson (including Cadence) can be the better fit when
              your life centers on the southeast valley; Homestead West may reduce drive time when your anchor is west or
              northwest of the Strip corridor.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Both markets offer new construction; the difference is community scale, price bands, and HOA structure—not a
              universal &quot;winner.&quot; Dr. Jan Duffy represents buyers (not builders) and can coordinate tours so you compare
              apples-to-apples on incentives, lot premiums, and timelines.
            </p>
            <p className="text-lg text-gray-700">
              See also:{' '}
              <a href="/homestead-west-vs-skye-canyon" className="text-[#1a365d] font-semibold underline">
                Homestead West vs Skye Canyon
              </a>{' '}
              and{' '}
              <a href="/northwest-las-vegas-new-construction" className="text-[#1a365d] font-semibold underline">
                Northwest Las Vegas new construction guide
              </a>
              .
            </p>
          </div>
        </section>

        <CtaBand
          heading="Tour with a buyer's agent"
          body="Call Dr. Jan Duffy to compare Homestead West and Cadence on incentives, lot premiums, and commute—not the builder's sales script alone."
          source="vs-cadence"
        />
      </article>
    </>
  );
}
