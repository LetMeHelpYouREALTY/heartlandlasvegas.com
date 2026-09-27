import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import NearbyAmenitiesSection from '@/components/NearbyAmenitiesSection';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Las Vegas Properties for Sale | Dr. Jan Duffy | Ranch Homes $910K+',
  description: 'Browse Las Vegas properties for sale with Dr. Jan Duffy (License S.0197614.LLC). Discover ranch-style homes on pool-sized lots in Northwest Las Vegas starting at $910K. View available Homestead West homes and new construction listings.',
  ...canonicalMetadata('/properties'),
  keywords: 'Las Vegas properties for sale, ranch homes Las Vegas, Northwest Las Vegas homes, $910K homes Las Vegas, Dr. Jan Duffy listings',
  openGraph: {
    title: 'Las Vegas Properties for Sale | Dr. Jan Duffy',
    description: 'Browse Las Vegas properties for sale with Dr. Jan Duffy. Ranch-style homes starting at $910K.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/properties',
    images: ogImages('for-sale-ranch'),
  },
};

export default function PropertiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Homestead West homes for sale',
    description: 'Browse Homestead West ranch plans and live MLS listings in Northwest Las Vegas 89149.',
    url: 'https://www.homesteadwestlasvegas.com/properties',
    about: {
      '@type': 'Place',
      name: 'Homestead West',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5592 Dapple Gray Rd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Homestead West ranch floor plans',
      numberOfItems: 2,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Plan 3336 — 3,336 sq ft ranch',
          url: 'https://www.homesteadwestlasvegas.com/floor-plans/3336',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Plan 3704 — 3,704 sq ft ranch with optional casita',
          url: 'https://www.homesteadwestlasvegas.com/floor-plans/3704',
        },
      ],
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Properties', url: 'https://www.homesteadwestlasvegas.com/properties' }
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
          imageId="for-sale-ranch"
          title="Homestead West Las Vegas Properties for Sale"
          subtitle="Ranch-style homes on pool-sized lots in Northwest Las Vegas"
        />

        {/* Property Search Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-center">Find Your Perfect Homestead West Home</h2>
              <SectionImage
                imageId="for-sale-ranch"
                heading="Find Your Perfect Homestead West Home"
                caption="Homestead West ranch homes for sale in Northwest Las Vegas 89149"
              />
              <div className="flex justify-center w-full">
                <div className="w-full max-w-4xl">
                  <RealScoutAdvancedSearch />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
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

        {/* Property Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Homestead West Properties?</h2>
            <SectionImage
              imageId="staged-living-room"
              heading="Why Choose Homestead West Properties?"
              caption="Staged living room in a Homestead West ranch home, Las Vegas 89149"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Homestead West Ranch-Style Design</h3>
                <p className="text-gray-700">
                  Single-story living with open floor plans perfect for modern families 
                  and easy maintenance at Homestead West.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏊</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Homestead West Pool-Sized Lots</h3>
                <p className="text-gray-700">
                  Generous Homestead West lot sizes perfect for pools, outdoor living, and future expansions 
                  in desirable Northwest Las Vegas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Homestead West Prime Location</h3>
                <p className="text-gray-700">
                  Homestead West is located in Northwest Las Vegas with access to shopping, dining, Red Rock Canyon, and named CCSD campuses in 89149.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Homestead West and Las Vegas Market Insights</h2>
            <SectionImage
              imageId="ann-fort-apache-89149"
              heading="Homestead West and Las Vegas Market Insights"
              caption="Ann Road and Fort Apache area of Northwest Las Vegas 89149 near Homestead West"
            />
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Homestead West listing facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Listed ranch starting price</span>
                    <span className="text-[#1a365d] font-semibold">$910,990</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Floor plans</span>
                    <span className="text-[#1a365d] font-semibold">3,336 and 3,704 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">ZIP / map pin</span>
                    <span className="text-[#1a365d] font-semibold">89149 · 5592 Dapple Gray Rd</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Live MLS inventory</span>
                    <span className="text-[#1a365d] font-semibold">See listings on this page</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Why Choose Homestead West in Northwest Las Vegas?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 mt-2"></span>
                    <span>Growing community with new amenities and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 mt-2"></span>
                    <span>Dean LaMar Allen Elementary, Justice Myron E. Leavitt Middle, and Centennial High are the named schools serving 89149—confirm current zoning with CCSD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 mt-2"></span>
                    <span>Easy access to Red Rock Canyon and outdoor recreation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 mt-2"></span>
                    <span>Strong appreciation potential and investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3 mt-2"></span>
                    <span>Lower density than central Las Vegas with more space</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          variant="compact"
          heading="What's Nearby Your Future Home"
          subheading="Explore dining, parks, schools, and healthcare near Homestead West while you shop MLS listings."
          id="properties-amenity-map"
        />

        {/* Related Pages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/community" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Guide</h3>
                  <p className="text-gray-700">Learn about Homestead West community and amenities</p>
                </a>
                <a href="/floor-plans" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/virtual-tour" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Tour</h3>
                  <p className="text-gray-700">Take a 3D virtual tour of Homestead West homes</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Get exclusive access to Homestead West homes</p>
                </a>
                <a href="/homebuying-process" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Schedule a consultation about Homestead West</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Interested in Homestead West properties?"
          body="Call for a private showing, then tell Dr. Jan which ranch plan you want to tour."
          source="properties-page"
        />
      </div>
    </>
  );
}
