import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Virtual Tour | Homestead West Las Vegas | 3D Property Walkthrough',
  description: 'Take a virtual 3D tour of Homestead West luxury ranch homes in Northwest Las Vegas. Experience the properties from anywhere with our interactive Matterport tour.',
  ...canonicalMetadata('/virtual-tour'),
  keywords: [
    'Homestead West virtual tour',
    'Las Vegas 3D home tour',
    'Matterport tour Las Vegas',
    'virtual property tour',
    'Homestead West walkthrough',
    '3D home viewing Las Vegas'
  ],
  openGraph: {
    title: 'Virtual Tour | Homestead West Las Vegas',
    description: 'Take a virtual 3D tour of Homestead West luxury ranch homes in Northwest Las Vegas.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/virtual-tour',
    images: ogImages('virtual-tour-tablet'),
  },
};

export default function VirtualTourPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VirtualLocation',
    name: 'Homestead West Virtual Tour',
    description: 'Interactive 3D virtual tour of Homestead West luxury ranch homes',
    url: 'https://www.homesteadwestlasvegas.com/virtual-tour',
    provider: {
      '@type': 'Organization',
      name: 'Matterport',
      url: 'https://matterport.com'
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
    { name: 'Virtual Tour', url: 'https://www.homesteadwestlasvegas.com/virtual-tour' }
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
          imageId="virtual-tour-tablet"
          title="Homestead West Virtual Tour"
          subtitle="Experience Homestead West in 3D"
        />

        {/* Virtual Tour Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Homestead West Interactive 3D Property Tour</h2>
                <SectionImage
                  imageId="virtual-tour-tablet"
                  heading="Homestead West Interactive 3D Property Tour"
                  caption="3D virtual tour of a Homestead West ranch home in Las Vegas 89149"
                />
                <p className="text-lg text-gray-700 mb-6">
                  Explore Homestead West luxury ranch homes from anywhere with our immersive virtual tour. 
                  Navigate through the Homestead West properties and experience the space as if you were there in person.
                </p>
              </div>

              {/* Matterport Embed */}
              <div className="bg-gray-100 rounded-lg p-4 mb-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://my.matterport.com/show/?m=UNZM3ziaPg1&mls=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Homestead West Virtual Tour"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Tour Instructions */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🖱️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Click to Navigate Homestead West</h3>
                  <p className="text-gray-700">
                    Click on the white dots to move through different rooms and areas of the Homestead West home.
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Friendly Homestead West Tour</h3>
                  <p className="text-gray-700">
                    Works perfectly on desktop, tablet, and mobile devices for viewing Homestead West anywhere.
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Homestead West Views</h3>
                  <p className="text-gray-700">
                    Zoom in to see details, measurements, and features throughout the Homestead West home.
                  </p>
                </div>
              </div>

              {/* Floor Plans Reference */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Available Homestead West Floor Plans</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">Plan 3336</h4>
                    <p className="text-blue-600 font-bold text-lg mb-2">From $910,990</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 3,336 square feet</li>
                      <li>• 4-5 bedrooms</li>
                      <li>• 4.5 bathrooms</li>
                      <li>• 3-5 car garage</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">Plan 3704</h4>
                    <p className="text-blue-600 font-bold text-lg mb-2">From $940,990</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 3,704 square feet</li>
                      <li>• 4 bedrooms</li>
                      <li>• 4.5 bathrooms</li>
                      <li>• 3-5 car garage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VIP New Construction Homes Specialist CTA */}
              <div className="text-center bg-[#1a365d] text-white py-12 rounded-lg">
                <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                  VIP Buyer Program
                </div>
                <h3 className="text-3xl font-bold mb-4">Ready to Experience Homestead West VIP Treatment?</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Schedule an in-person tour with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers 
                  for exclusive access and expert guidance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:7022996607"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    📞 Call (702) 299-6607
                  </a>
                  <a
                    href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    📧 Email Dr. Jan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MLS listings — after 3D tour */}
        <section className="py-16 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homestead West Homes and Las Vegas MLS Listings
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS — updated daily with the latest properties
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
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
                <a href="/community-map" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Map</h3>
                  <p className="text-gray-700">Interactive map showing Homestead West location</p>
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
      </div>
    </>
  );
}
