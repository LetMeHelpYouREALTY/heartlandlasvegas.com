import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import NearbyAmenitiesSection from '@/components/NearbyAmenitiesSection';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Community Map | Homestead West Las Vegas | Available Lots & Homesites | Northwest Las Vegas',
  description: 'Explore Homestead West community map with available lots and homesites in Northwest Las Vegas. Interactive map showing pool-sized lots, floor plan locations, community layout, and proximity to Red Rock Canyon, downtown Las Vegas, and Mount Charleston. New construction homes from $910K.',
  ...canonicalMetadata('/community-map'),
  keywords: [
    'Homestead West community map',
    'Las Vegas homesites map',
    'new construction lots Las Vegas',
    'Homestead West available lots',
    'Las Vegas new home lots',
    'pool-sized lots Las Vegas',
    'Northwest Las Vegas new construction',
    'luxury ranch homes Las Vegas',
    'single story homes Las Vegas',
    'new construction homes Northwest Las Vegas',
    'Las Vegas homesites for sale',
    'Homestead West lot map',
    'new construction community map Las Vegas'
  ],
  openGraph: {
    title: 'Community Map | Homestead West Las Vegas | Available Lots & Homesites',
    description: 'Explore Homestead West community map with available lots and homesites in Northwest Las Vegas. New construction homes from $910K.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/community-map',
    images: ogImages('aerial-northwest-lv'),
  },
};

export default function CommunityMapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Map',
    name: 'Homestead West Community Map',
    description: 'Interactive map showing available lots and homesites at Homestead West',
    url: 'https://www.homesteadwestlasvegas.com/community-map',
    provider: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
    about: {
      '@type': 'Place',
      name: 'Homestead West | Homes by Dr Jan Duffy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5592 Dapple Gray Rd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US'
      }
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Community', url: 'https://www.homesteadwestlasvegas.com/community' },
    { name: 'Community Map', url: 'https://www.homesteadwestlasvegas.com/community-map' }
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
          imageId="aerial-northwest-lv"
          title="Homestead West Community Map"
          subtitle="Explore Available Lots & Homesites"
        />

        {/* MLS listings — early for buyer engagement */}
        <section className="py-16 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homes in Las Vegas
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS — updated daily with the latest properties
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Homestead West Community Layout</h2>
                <SectionImage
                  imageId="aerial-northwest-lv"
                  heading="Homestead West Community Layout"
                  caption="Aerial view of Northwest Las Vegas near Homestead West at 5592 Dapple Gray Rd"
                />
                <p className="text-xl text-gray-700 mb-4">
                  Explore the interactive map to see available lots, floor plan locations, and community amenities in Northwest Las Vegas
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Located at 5592 Dapple Gray Rd in Las Vegas, NV 89149, Homestead West offers luxury single-story ranch homes on pool-sized lots. 
                  The community is strategically positioned with quick access to US 95 and CC 215, just 9 miles from Red Rock Canyon, 
                  18 miles from downtown Las Vegas, and 23 miles from Mount Charleston.
                </p>
              </div>

              {/* New Construction Interactive Map */}
              <div className="bg-gray-100 rounded-lg p-4 mb-8">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5!2d-115.2936!3d36.2839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c8b8b8b8b8b9%3A0x0!2zMzYsMTcsMTcuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Homestead West Community Map - 5592 Dapple Gray Rd, Las Vegas, NV 89149"
                    className="rounded-lg w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 text-center bg-white p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong className="text-gray-900">Homestead West Location:</strong><br />
                    <span className="text-lg">5592 Dapple Gray Rd, Las Vegas, NV 89149</span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://www.google.com/maps?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <span>📍</span> View on Google Maps
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      <span>🧭</span> Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Instructions */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Available Lots</h3>
                  <p className="text-gray-700">
                    Click on available Homestead West lots to see pricing, floor plan options, and lot specifications.
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Floor Plan Locations</h3>
                  <p className="text-gray-700">
                    See where Plan 3336 and Plan 3704 homes can be built throughout the Homestead West community.
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Community Layout</h3>
                  <p className="text-gray-700">
                    Understand the overall community design and proximity to amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          variant="compact"
          heading="Life Near Homestead West"
          subheading="See restaurants, grocery, parks, and healthcare around the 89149 sales office before you pick a lot."
          id="community-map-amenities"
        />

        {/* Location & Neighborhood Context */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Homestead West Location in Northwest Las Vegas</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Prime Northwest Las Vegas Location</h3>
                  <p className="text-gray-700 mb-4">
                    Homestead West is located in the desirable Northwest Las Vegas area, known for its newer communities, 
                    excellent schools, and proximity to outdoor recreation. The community offers easy access to major highways 
                    while maintaining a peaceful residential atmosphere.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span><strong>9 miles</strong> to Red Rock Canyon National Conservation Area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span><strong>18 miles</strong> to Downtown Las Vegas and the Strip</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span><strong>23 miles</strong> to Mount Charleston for skiing and hiking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span><strong>Quick access</strong> to US 95 and CC 215 freeways</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Nearby Northwest Las Vegas Amenities</h3>
                  <p className="text-gray-700 mb-4">
                    The Homestead West community is surrounded by excellent schools, shopping centers, healthcare facilities, 
                    and recreational opportunities that make Northwest Las Vegas a desirable place to live.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 font-bold">•</span>
                      <span>Top-rated schools including Dean LaMar Allen Elementary and Centennial High School</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 font-bold">•</span>
                      <span>Shopping at Centennial Hills and nearby retail centers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 font-bold">•</span>
                      <span>Healthcare facilities including hospitals and medical centers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 font-bold">•</span>
                      <span>Parks, trails, and outdoor recreation areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lot Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Homestead West Lot Features & Amenities</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Homestead West Lot Characteristics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Pool-sized lots for outdoor living</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Optional detached casita locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Multi-generational layout options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Extended patio options (12' or 14')</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Homestead West Community Amenities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>9 miles to Red Rock Canyon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>18 miles to Downtown Las Vegas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>23 miles to Mount Charleston</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>Quick access to US 95 & CC 215</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/community" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Guide</h3>
                  <p className="text-gray-700">Learn about Homestead West community and amenities</p>
                </a>
                <a href="/amenities" className="bg-amber-50 p-6 rounded-lg hover:bg-amber-100 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Nearby Amenities Map</h3>
                  <p className="text-gray-700">Restaurants, parks, parking, shopping, schools on Google Maps</p>
                </a>
                <a href="/virtual-tour" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Tour</h3>
                  <p className="text-gray-700">Take a 3D virtual tour of Homestead West homes</p>
                </a>
                <a href="/floor-plans" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/properties" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Properties</h3>
                  <p className="text-gray-700">Browse available Homestead West homes</p>
                </a>
                <a href="/vip-buyer-program" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Get exclusive access to Homestead West homes</p>
                </a>
                <a href="/contact" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Schedule a consultation about Homestead West</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy VIP New Construction Homes Specialist */}
        <section className="py-16 bg-slate-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                VIP Buyer Program
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">VIP Access to Perfect Homestead West Lot Selection</h2>
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers priority Homestead West lot access, 
                expert guidance, and exclusive Homestead West builder relationships
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Dr. Jan Duffy for Homestead West</h3>
                  <div className="space-y-3">
                    <p><span className="font-semibold">Phone:</span> (702) 299-6607</p>
                    <p><span className="font-semibold">Email:</span> DrJanSells@HomesteadWestLasVegas.com</p>
                    <p><span className="font-semibold">Office:</span> Builder Sales Office</p>
                    <p><span className="font-semibold">License:</span> Nevada S.0197614.LLC</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Why Work With Dr. Jan for Homestead West?</h3>
                  <ul className="space-y-2 text-gray-700 text-left">
                    <li>• Independent agent representing YOUR interests</li>
                    <li>• Office at builder sales office</li>
                    <li>• Direct access to lot availability and pricing</li>
                    <li>• Market expertise and negotiation power</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
