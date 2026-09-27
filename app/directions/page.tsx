import { Metadata } from 'next';
import Link from 'next/link';
import DeferredIframeEmbed from '@/components/DeferredIframeEmbed';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import {
  PRESET_ORIGINS,
  DESTINATION_DISPLAY,
  presetDirectionsUrl,
  directionsFromYourLocationUrl,
  directionsEmbedUrl,
} from '@/lib/directions';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

/** Google Maps Platform — Commutes Solution embed (Maps JavaScript API). */
const COMMUTES_MAP_EMBED_URL =
  'https://storage.googleapis.com/maps-solutions-v9iuebxrqf/commutes/hq3p/commutes.html' as const;

export const metadata: Metadata = {
  title: 'Directions to Our Office | Homestead West Las Vegas | Dr. Jan Duffy',
  description: `Get directions to Homestead West office at ${DESTINATION_DISPLAY}. From airport, downtown, Henderson, Summerlin. Drive, transit, walk, or bike — estimated travel time. No cost, powered by Google Maps.`,
  keywords: [
    'directions to Homestead West',
    'directions to Dr. Jan Duffy office',
    'how to get to Homestead West Las Vegas',
    '5592 Dapple Gray Rd directions',
    'Centennial Hills directions',
  ],
  ...canonicalMetadata('/directions'),
  openGraph: {
    title: 'Directions to Our Office | Homestead West Las Vegas',
    description: `Plan your visit: directions to ${DESTINATION_DISPLAY}. From airport, downtown, Henderson. Drive, transit, or walk.`,
    type: 'website',
    url: absoluteUrl('/directions'),
    images: ogImages('ann-fort-apache-89149'),
  },
};

const TRAVEL_MODES = [
  { id: 'driving' as const, label: 'By car', icon: '🚗', description: 'Estimated drive time shown in Google Maps' },
  { id: 'transit' as const, label: 'Transit', icon: '🚌', description: 'Public transit options and times' },
  { id: 'walking' as const, label: 'Walking', icon: '🚶', description: 'Walking directions and time' },
  { id: 'bicycling' as const, label: 'Bike', icon: '🚴', description: 'Bicycle routes' },
] as const;

export default function DirectionsPage() {
  const baseUrl = 'https://www.homesteadwestlasvegas.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Directions to Homestead West Office | Homestead West Las Vegas',
    description: `Get directions to our office at ${DESTINATION_DISPLAY}. From airport, downtown, Henderson, Summerlin. Drive, transit, walk, or bike.`,
    url: `${baseUrl}/directions`,
    mainEntity: {
      '@type': 'HowTo',
      name: 'How to get to Homestead West office',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open directions',
          text: 'Click Get directions for your starting point or open Google Maps and enter your address.',
        },
        {
          '@type': 'HowToStep',
          name: 'Set destination',
          text: `Destination: ${DESTINATION_DISPLAY}`,
        },
        {
          '@type': 'HowToStep',
          name: 'Choose travel mode',
          text: 'Select driving, transit, walking, or bicycling in Google Maps for estimated travel time.',
        },
      ],
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Find Our Office', url: `${baseUrl}/location` },
    { name: 'Directions', url: `${baseUrl}/directions` },
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
          imageId="ann-fort-apache-89149"
          title="Directions to Our Office"
          subtitle={
            <>
              Plan your visit with directions from Google Maps — no cost
              <br />
              Destination: {DESTINATION_DISPLAY}
            </>
          }
        />

        <section className="py-12 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
              See homes before you visit
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Current Homestead West and Northwest Las Vegas MLS listings — updated regularly.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Get directions and see estimated travel time by car, transit, walking, or bike. Click any link below to open Google Maps — you can change your starting point or mode there.
            </p>
          </div>
        </section>

        {/* Transportation modes */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Travel Mode</h2>
            <SectionImage
              imageId="ann-fort-apache-89149"
              heading="Choose Travel Mode"
              caption="Ann Road and Fort Apache area of Northwest Las Vegas 89149 near 5592 Dapple Gray Rd"
            />
            <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
              Open directions with your preferred mode. Google Maps will show estimated travel time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {TRAVEL_MODES.map((mode) => (
                <a
                  key={mode.id}
                  href={directionsFromYourLocationUrl(mode.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-[#1a365d] hover:bg-blue-50/50 transition-colors text-center"
                >
                  <span className="text-3xl mb-2" aria-hidden>{mode.icon}</span>
                  <span className="font-semibold text-gray-900">{mode.label}</span>
                  <span className="text-sm text-gray-600 mt-1">{mode.description}</span>
                  <span className="text-[#1a365d] font-medium mt-3 text-sm">Get directions →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* From your location */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">From Your Location</h2>
            <p className="text-center text-gray-600 mb-6 max-w-xl mx-auto">
              Enter your address in Google Maps to get directions and estimated travel time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={directionsFromYourLocationUrl('driving')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4a7c] transition-colors"
              >
                🚗 Get directions (enter your address in Maps)
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white" aria-labelledby="commute-map-heading">
          <div className="container mx-auto px-4">
            <h2 id="commute-map-heading" className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Explore commute times
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Commute explorer powered by Google Maps Platform. Tap <strong>Load commute map</strong> when you are ready—the
              embed loads on demand so directions and listing sections above stay responsive.
            </p>
            <DeferredIframeEmbed
              src={COMMUTES_MAP_EMBED_URL}
              title="Commute times map — Northwest Las Vegas and Homestead West area"
              description="The commute map uses Google Maps (third-party). Load it when you want to explore routes and travel times—this avoids heavy scripts until you need them."
              buttonLabel="Load commute map"
            />
          </div>
        </section>

        {/* Preset origins */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Directions From Common Starting Points</h2>
            <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
              One click opens Google Maps with directions and estimated drive time. You can switch to transit or walking in Maps.
            </p>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {PRESET_ORIGINS.map((origin) => (
                <article
                  key={origin.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="p-5 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">{origin.label}</h3>
                    {origin.approxDriveTime && (
                      <p className="text-sm text-gray-600 mt-1">Approx. drive time: {origin.approxDriveTime}</p>
                    )}
                    {origin.description && (
                      <p className="text-sm text-gray-500 mt-0.5">{origin.description}</p>
                    )}
                  </div>
                  <div className="p-5 flex flex-wrap gap-3">
                    <a
                      href={presetDirectionsUrl(origin, 'driving')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2d4a7c] transition-colors text-sm"
                    >
                      🚗 Drive
                    </a>
                    <a
                      href={presetDirectionsUrl(origin, 'transit')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-[#1a365d] hover:text-[#1a365d] transition-colors text-sm"
                    >
                      🚌 Transit
                    </a>
                    <a
                      href={presetDirectionsUrl(origin, 'walking')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-[#1a365d] hover:text-[#1a365d] transition-colors text-sm"
                    >
                      🚶 Walk
                    </a>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-video max-h-[220px]">
                      <iframe
                        src={directionsEmbedUrl(origin.originQuery)}
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Directions from ${origin.label} to Homestead West office`}
                        className="w-full h-full min-h-[200px] block border-0"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Find Our Office
              </Link>
              <Link
                href="/amenities"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Nearby Amenities
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
