import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL, ADDRESS, BROKERAGE_NAME, PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Office | Homestead West | Dr. Jan Duffy',
  description: 'Visit our Las Vegas real estate office at 5592 Dapple Gray Rd. Dr. Jan Duffy (License S.0197614.LLC) provides expert real estate services in Northwest Las Vegas.',
  keywords: 'Las Vegas real estate office, Dr. Jan Duffy office, Northwest Las Vegas real estate, real estate agent Las Vegas, Homestead West office',
  ...canonicalMetadata('/location/las-vegas-office'),
  openGraph: {
    title: 'Las Vegas Real Estate Office | Homestead West',
    description: 'Visit our Las Vegas real estate office at 5592 Dapple Gray Rd. Dr. Jan Duffy provides expert real estate services.',
    type: 'website',
    url: absoluteUrl('/location/las-vegas-office'),
    images: ogImages('sales-office'),
  },
};

export default function LasVegasOfficePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'Expert Las Vegas real estate agent specializing in Northwest Las Vegas properties',
    url: absoluteUrl('/location/las-vegas-office'),
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2738,
      longitude: -115.3089,
    },
    openingHours: [
      'Mo-Su 08:00-20:00'
    ],
    licenseNumber: 'S.0197614.LLC',
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting'],
    hasMap: 'https://maps.google.com/?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149'
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Las Vegas Office', url: absoluteUrl('/location/las-vegas-office') },
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
          imageId="office-exterior-89149"
          title="Homestead West Las Vegas Real Estate Office"
          subtitle={
            <>
              Homestead West | Homes by Dr Jan Duffy
              <br />
              {BROKERAGE_NAME}
            </>
          }
        />

        {/* Office Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Homestead West Office</h2>
                <SectionImage
                  imageId="sales-office"
                  heading="Visit Our Homestead West Office"
                  caption="Homestead West office at 5592 Dapple Gray Rd, Las Vegas NV 89149"
                />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Address</h3>
                      <p>
                        {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Phone</h3>
                      <p>
                        <a href={PHONE_TEL_HREF} className="text-blue-600 font-semibold underline">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Email</h3>
                      <p>DrJanSells@HomesteadWestLasVegas.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Homestead West Office Hours</h3>
                      <p>Sunday-Saturday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Get Directions to Homestead West</h2>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                  <iframe
                    src="https://www.google.com/maps?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149&output=embed"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Las Vegas Office - 5592 Dapple Gray Rd, Las Vegas, NV 89149"
                  ></iframe>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href="/directions"
                    className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Get directions (airport, downtown, transit)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MLS listings — after NAP / office details */}
        <section className="py-16 bg-white" id="available-homes">
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

        {/* Services Offered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Homestead West Services at This Location</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West Real Estate Sales</h3>
                <p>Buying and selling residential and commercial Homestead West properties in Northwest Las Vegas</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West Property Management</h3>
                <p>Professional Homestead West property management services for Las Vegas area properties</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Homestead West Investment Consulting</h3>
                <p>Homestead West real estate investment advice and consultation services</p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Homestead West Office Location */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Why Our Homestead West Office Location Matters</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  Our Homestead West office is strategically located in the heart of Northwest Las Vegas, 
                  providing convenient access to the Homestead West community and surrounding areas. This Homestead West office 
                  location allows Dr. Jan Duffy to maintain close relationships with Homestead West builders, stay current on 
                  Homestead West market conditions, and provide responsive service to Homestead West clients throughout the 
                  homebuying process.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The Homestead West office location offers easy access from major highways including US 95 and CC 215, making it 
                  convenient for Homestead West clients to visit for consultations, document signings, and meetings. Whether you're 
                  coming from downtown Las Vegas, Summerlin, or other areas of the valley, the Homestead West office is easily 
                  accessible and provides a professional environment for discussing your Homestead West real estate needs.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Local Market Knowledge</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Being located in Northwest Las Vegas gives Dr. Jan Duffy firsthand knowledge of the Homestead West community, 
                  local market trends, and neighborhood developments. This Homestead West office location enables regular visits 
                  to Homestead West properties, builder meetings, and community events that keep Dr. Jan Duffy informed about the 
                  latest Homestead West opportunities and market conditions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The Homestead West office serves as a hub for real estate activity in Northwest Las Vegas, allowing Dr. Jan Duffy 
                  to maintain relationships with Homestead West builders, other real estate professionals, and service providers who 
                  support the Homestead West homebuying process. This Homestead West network benefits clients through access to 
                  exclusive information, preferred pricing, and streamlined transactions.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Community Access</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The proximity of our Homestead West office to the actual Homestead West community means Dr. Jan Duffy can quickly 
                  respond to new listings, schedule property viewings, and attend Homestead West community events. This Homestead 
                  West accessibility ensures that Homestead West clients receive timely information and can act quickly when 
                  Homestead West opportunities arise.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Homestead West buyers benefit from having a real estate professional who is deeply familiar with the community, 
                  its amenities, and its development plans. The Homestead West office location facilitates this local expertise, 
                  enabling Dr. Jan Duffy to provide detailed information about Homestead West schools, shopping, dining, and 
                  recreational opportunities that enhance the Homestead West living experience.
                </p>
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
                <a href="/community" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Guide</h3>
                  <p className="text-gray-700">Learn about Homestead West community and amenities</p>
                </a>
                <a href="/community-map" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Map</h3>
                  <p className="text-gray-700">Interactive map showing Homestead West location</p>
                </a>
                <a href="/appointment" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Schedule Appointment</h3>
                  <p className="text-gray-700">Book a consultation with Dr. Jan Duffy</p>
                </a>
                <a href="/services" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Buying, selling, investment, and property management</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us for Homestead West?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy for expert Homestead West real estate services in Las Vegas. Visit our Homestead West office 
              for in-person consultations, or schedule a phone or video meeting to discuss your Homestead West real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Schedule Appointment
              </a>
              <a
                href="tel:7022996607"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📞 Call (702) 299-6607
              </a>
            </div>
            <p className="text-blue-200 mt-6 max-w-2xl mx-auto">
              Our Homestead West office is open daily 8:00 AM–8:00 PM. For Homestead West inquiries or to schedule a consultation, please call, email, or visit our office.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
