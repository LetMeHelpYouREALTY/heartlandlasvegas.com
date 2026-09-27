import { Metadata } from 'next';
import { ASSET_HEADSHOT_PATH } from '@/lib/site-assets';
import Image from 'next/image';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import LeadForm from '@/components/LeadForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL, BROKERAGE_NAME, ADDRESS } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Agent | Homestead West',
  description: 'Contact Dr. Jan Duffy (License S.0197614.LLC) for expert real estate services in Las Vegas. Call (702) 299-6607 or visit our office at 5592 Dapple Gray Rd.',
  keywords: 'contact Dr. Jan Duffy, Las Vegas real estate agent, Homestead West contact, real estate consultation Las Vegas',
  ...canonicalMetadata('/contact'),
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Agent',
    description: 'Contact Dr. Jan Duffy for expert real estate services in Las Vegas. Professional consultation available.',
    type: 'website',
    url: absoluteUrl('/contact'),
    images: ogImages('buyer-consultation'),
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dr. Jan Duffy - Las Vegas Real Estate Agent',
    description: 'Contact information for Dr. Jan Duffy, licensed real estate agent in Las Vegas',
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5592 Dapple Gray Rd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US'
      },
      licenseNumber: 'S.0197614.LLC',
      openingHours: [
        'Mo-Su 08:00-20:00'
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Contact', url: absoluteUrl('/contact') },
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
          imageId="buyer-consultation"
          title="Contact Dr. Jan Duffy for Homestead West"
          subtitle={
            <>
              Las Vegas Real Estate Expert | License S.0197614.LLC
              <br />
              {BROKERAGE_NAME}
              <br />
              {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
            </>
          }
          badge="Call · Directions · Google Reviews"
        />

        {/* Current Listings Preview */}
        <section id="homes-preview" className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Current Homestead West Listings</h2>
                <SectionImage
                  imageId="listings-search-desk"
                  heading="Current Homestead West Listings"
                  caption="Review Homestead West inventory before you call Dr. Jan for a private tour"
                  className="max-w-3xl mx-auto"
                />
                <p className="text-gray-700 text-sm">Review available homes, then contact Dr. Jan for a private tour</p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Homestead West Available Homes"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  loading="lazy"
                  className="w-full border-0 block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl ring-2 ring-blue-600/20" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src={ASSET_HEADSHOT_PATH}
                      alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center top' }}
                      sizes="192px"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch About Homestead West</h2>
                <div className="mb-6">
                  <a
                    href="https://share.google/nB0T4SaU9gr8wLSdB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
                  >
                    📱 View Contact Card on Google
                  </a>
                </div>
                <p className="text-lg mb-8">
                  Ready to buy, sell, or invest in Homestead West Las Vegas real estate? Contact Dr. Jan Duffy for 
                  expert Homestead West guidance and personalized service. We're here to help you achieve your 
                  Homestead West real estate goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Phone</h3>
                      <p className="text-lg text-gray-900">
                        <a href="tel:7022996607" className="text-blue-600 hover:text-blue-800 font-semibold">
                          (702) 299-6607
                        </a>
                      </p>
                      <p className="text-gray-700">Available daily 8AM-8PM for Homestead West</p>
                      <a
                        href="https://share.google/nB0T4SaU9gr8wLSdB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                      >
                        View Contact Card →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Email</h3>
                      <p className="text-lg text-gray-900">
                        <a href="mailto:DrJanSells@HomesteadWestLasVegas.com" className="text-blue-600 hover:text-blue-800 font-semibold break-all">
                          DrJanSells@HomesteadWestLasVegas.com
                        </a>
                      </p>
                      <p className="text-gray-700">We respond within 24 hours about Homestead West</p>
                      <a
                        href="https://share.google/nB0T4SaU9gr8wLSdB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                      >
                        View Contact Card →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Homestead West Office Address</h3>
                      <p className="text-lg mb-1 text-gray-900">5592 Dapple Gray Rd</p>
                      <p className="text-lg mb-2 text-gray-900">Las Vegas, NV 89149</p>
                      <p className="text-gray-700">By appointment only for Homestead West</p>
                      <a
                        href="https://share.google/nB0T4SaU9gr8wLSdB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                      >
                        View Contact Card →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <LeadForm source="contact-page" />
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Homestead West Office Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Monday - Sunday</span>
                    <span className="text-gray-700">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-800">
                  <strong>Note:</strong> Appointments are available outside regular hours by special arrangement. 
                  Emergency real estate matters are handled on a case-by-case basis.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Find Our Office</h2>
                <SectionImage
                  imageId="sales-office"
                  heading="Find Our Office"
                  caption="Homestead West office at 5592 Dapple Gray Rd, Las Vegas NV 89149"
                />
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                  <iframe
                    src="https://www.google.com/maps?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149&output=embed"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Las Vegas Office Location"
                  ></iframe>
                </div>
                <p className="text-gray-600 mb-3">
                  <a href="/location" className="text-blue-600 hover:underline font-medium">View map and all office locations →</a>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Get Directions
                  </a>
                  <a
                    href="https://share.google/nB0T4SaU9gr8wLSdB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    📱 View Contact Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/about" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise as a VIP New Construction Homes Specialist</p>
                </a>
                <a href="/services" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Buying, selling, investment, and property management</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/homebuying-process" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/testimonials" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Testimonials</h3>
                  <p className="text-gray-700">What clients say about working with Dr. Jan</p>
                </a>
                <a href="/reviews" className="bg-white p-6 rounded-lg hover:bg-amber-50 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Leave a Review</h3>
                  <p className="text-gray-700">Review us on Google — link and QR code</p>
                </a>
                <a href="/location" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Find Our Office</h3>
                  <p className="text-gray-700">Map, directions, hours & contact for all locations</p>
                </a>
                <a href="/directions" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Directions</h3>
                  <p className="text-gray-700">Get directions & estimated travel time (drive, transit, walk)</p>
                </a>
                <a href="/amenities" className="bg-white p-6 rounded-lg hover:bg-amber-50 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Nearby Amenities</h3>
                  <p className="text-gray-700">Restaurants, parks, parking, shopping & more on Google Maps</p>
                </a>
                <a href="/faq" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">FAQ</h3>
                  <p className="text-gray-700">Common questions about new construction</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* License Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Licensed Real Estate Professional</h2>
            <div className="bg-blue-50 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg mb-4 text-gray-900">
                <strong>Dr. Jan Duffy</strong> is a licensed real estate agent in Nevada
              </p>
              <p className="text-xl font-semibold text-blue-600 mb-4">
                License Number: S.0197614.LLC
              </p>
              <p className="text-gray-700">
                Licensed by the Nevada Real Estate Division • Member of the National Association of Realtors
              </p>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-white">
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
      </div>
    </>
  );
}
