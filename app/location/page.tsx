import { Metadata } from 'next';
import Link from 'next/link';
import LocatorPlusEmbed from '@/components/LocatorPlusEmbed';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import NearbyAmenitiesSection from '@/components/NearbyAmenitiesSection';
import {
  STORE_LOCATIONS,
  formatAddress,
  formatPhoneDisplay,
  allLocationsMapEmbedUrl,
  directionsUrl,
  viewOnMapsUrl,
} from '@/lib/locations';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

/** Google Maps Platform — Locator Plus embed. */
const LOCATOR_PLUS_EMBED_URL =
  'https://storage.googleapis.com/maps-solutions-v9iuebxrqf/locator-plus/stmd/locator-plus.html' as const;

export const metadata: Metadata = {
  title: 'Find Our Office | Store Locations | Homestead West Las Vegas | Dr. Jan Duffy',
  description:
    'Find our Homestead West Las Vegas real estate office. Visit Dr. Jan Duffy at 5592 Dapple Gray Rd. Map, directions, hours, and contact for Northwest Las Vegas.',
  keywords:
    'Homestead West office location, Dr. Jan Duffy office, Las Vegas real estate office, find our store, Northwest Las Vegas',
  ...canonicalMetadata('/location'),
  openGraph: {
    title: 'Find Our Office | Homestead West Las Vegas',
    description: 'Map and directions to our Las Vegas real estate office. Visit Dr. Jan Duffy at Homestead West.',
    type: 'website',
    url: absoluteUrl('/location'),
    images: ogImages('sales-office'),
  },
};

export default function LocationIndexPage() {
  const baseUrl = 'https://www.homesteadwestlasvegas.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Homestead West Office Locations',
    description: 'Real estate office locations for Dr. Jan Duffy - Homestead West Las Vegas',
    numberOfItems: STORE_LOCATIONS.length,
    itemListElement: STORE_LOCATIONS.map((loc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: loc.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: loc.address.street,
          addressLocality: loc.address.locality,
          addressRegion: loc.address.region,
          postalCode: loc.address.postalCode,
          addressCountry: loc.address.country,
        },
        telephone: loc.phone,
        email: loc.email,
        openingHours: loc.openingHours,
        url: `${baseUrl}/location/${loc.slug}`,
        geo: loc.geo
          ? {
              '@type': 'GeoCoordinates',
              latitude: loc.geo.latitude,
              longitude: loc.geo.longitude,
            }
          : undefined,
        hasMap: viewOnMapsUrl(loc),
      },
    })),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Find Our Office', url: `${baseUrl}/location` },
  ]);

  const mapEmbedUrl = allLocationsMapEmbedUrl();

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
          imageId="office-exterior-89149"
          title="Find Our Office"
          subtitle="Visit our Homestead West Las Vegas real estate office. Map, directions, hours & contact."
        />

        {/* Map: all store locations */}
        <section className="py-10 bg-gray-50" aria-label="Map of office locations">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Office Locations Map</h2>
            <SectionImage
              imageId="office-exterior-89149"
              heading="Office Locations Map"
              caption="Homestead West office at 5592 Dapple Gray Rd, Las Vegas NV 89149"
            />
            <p className="text-gray-700 mb-6">
              Use the map below to see where we’re located. Click Call, Directions, or View on Google for each office.{' '}
              <a href="#available-homes" className="text-[#1a365d] font-semibold underline">
                Browse MLS listings
              </a>{' '}
              below when you are ready to shop before you visit.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Homestead West office locations - map"
                className="w-full block"
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-gray-100" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Browse listings while you plan your visit</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Live MLS inventory for Homestead West and Northwest Las Vegas — see what matches your timeline before you stop by the office.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50 border-t border-gray-100" aria-label="Interactive office locator map">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Interactive office locator</h2>
            <p className="text-gray-700 mb-6 max-w-2xl">
              Search and browse locations with Google Maps Platform Locator Plus. Tap <strong>Load interactive map</strong> when
              you are ready—the map loads on demand so the listings and office map above stay fast.
            </p>
            <LocatorPlusEmbed
              src={LOCATOR_PLUS_EMBED_URL}
              title="Homestead West — interactive office locator map"
            />
          </div>
        </section>

        {/* List of locations */}
        <section className="py-12 bg-white border-t border-gray-100" aria-label="Office locations list">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Choose Your Location</h2>
            <div className="grid gap-8 md:grid-cols-1 max-w-4xl">
              {STORE_LOCATIONS.map((loc) => (
                <article
                  key={loc.id}
                  className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    <Link href={`/location/${loc.slug}`} className="text-[#1a365d] hover:text-[#d4af37] hover:underline">
                      {loc.name}
                    </Link>
                  </h3>
                  {loc.description && (
                    <p className="text-gray-600 mb-4">{loc.description}</p>
                  )}
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="font-medium">{formatAddress(loc)}</p>
                    <p>
                      <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[#1a365d] hover:underline">
                        {formatPhoneDisplay(loc.phone)}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${loc.email}`} className="text-[#1a365d] hover:underline">
                        {loc.email}
                      </a>
                    </p>
                    <p>
                      Hours: Sun 10–3; Mon–Fri 10–6; Sat 10–4
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Call
                    </a>
                    <a
                      href={directionsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Directions
                    </a>
                    <a
                      href={viewOnMapsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-[#1a365d] hover:text-[#1a365d] transition-colors font-medium"
                    >
                      View on Google Maps
                    </a>
                    <Link
                      href={`/location/${loc.slug}`}
                      className="inline-flex items-center gap-2 text-[#1a365d] font-medium hover:underline"
                    >
                      Office details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          variant="compact"
          heading="What's Near Our Office"
          subheading="Plan your visit with an amenity map centered on 5592 Dapple Gray Rd."
          id="location-amenity-map"
        />

        {/* CTA */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 mb-4">
              <a href="/amenities" className="text-[#1a365d] font-medium hover:underline">Full Nearby Amenities guide with FAQ →</a>
            </p>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Visit or Schedule a Call?</h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Stop by our Homestead West office or book an appointment with Dr. Jan Duffy for a consultation.
            </p>
            <p className="text-gray-600 mb-4">
              <a href="/directions" className="text-[#1a365d] font-medium hover:underline">Get directions and estimated travel time (drive, transit, walk) →</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/appointment"
                className="bg-[#d4af37] text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-[#f4d03f] transition-colors"
              >
                Schedule Appointment
              </a>
              <a
                href="/contact"
                className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4a7c] transition-colors"
              >
                Contact Us
              </a>
              <a href="tel:7022996607" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Call (702) 299-6607
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
