import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Home Selling Services | Dr. Jan Duffy | Las Vegas Real Estate Expert',
  description: 'Expert home selling services in Las Vegas with Dr. Jan Duffy. VIP New Construction Homes Specialist, market expertise, and professional guidance for maximum home value.',
  ...canonicalMetadata('/services/selling'),
  keywords: [
    'home selling Las Vegas',
    'Dr. Jan Duffy selling services',
    'Las Vegas real estate agent',
    'sell home Las Vegas',
    'home valuation Las Vegas',
    'new construction selling'
  ],
  openGraph: {
    title: 'Home Selling Services | Dr. Jan Duffy',
    description: 'Expert home selling services in Las Vegas with VIP New Construction Homes Specialist.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/services/selling',
    images: ogImages('for-sale-ranch'),
  },
};

export default function HomeSellingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Selling Services',
    description: 'Expert home selling services including market analysis, pricing strategy, and professional marketing',
    provider: {
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
      licenseNumber: 'S.0197614.LLC'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: ['Home Selling', 'Property Marketing', 'Real Estate Sales'],
    offers: {
      '@type': 'Offer',
      description: 'Professional home selling services',
      priceCurrency: 'USD'
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Services', url: 'https://www.homesteadwestlasvegas.com/services' },
    { name: 'Selling', url: 'https://www.homesteadwestlasvegas.com/services/selling' }
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
        title="Homestead West Home Selling Services"
        subtitle={
          <>
            Expert Guidance for Maximum Homestead West Home Value
            <br />
            Dr. Jan Duffy | Nevada License S.0197614.LLC
          </>
        }
      />

      {/* MLS listings — early for buyer engagement */}
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

      {/* VIP New Construction Homes Specialist */}
      <section className="py-16 bg-slate-50 border-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              VIP Buyer Program
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Homestead West Selling Services</h2>
            <SectionImage
              imageId="for-sale-ranch"
              heading="Elite Homestead West Selling Services"
              caption="Ranch home for sale in Homestead West, Northwest Las Vegas 89149"
            />
            <p className="text-xl text-gray-700 mb-8">
              Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers exclusive market access, 
              premium buyer connections, and expert negotiation for maximum home value.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Homestead West Selling Services</h2>
            <SectionImage
              imageId="staged-living-room"
              heading="Comprehensive Homestead West Selling Services"
              caption="Staged living room ready to market in a Homestead West ranch home, Las Vegas 89149"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Market Analysis</h3>
                <p className="text-gray-700">
                  Comprehensive Homestead West market analysis and competitive pricing strategy for maximum home value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Professional Marketing</h3>
                <p className="text-gray-700">
                  Professional Homestead West photography, virtual tours, and comprehensive marketing strategy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Buyer Network</h3>
                <p className="text-gray-700">
                  Access to VIP Homestead West new construction buyer network and premium connections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Negotiation</h3>
                <p className="text-gray-700">
                  Expert Homestead West negotiation backed by premier builder relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Transaction Management</h3>
                <p className="text-gray-700">
                  Complete Homestead West transaction management from listing to closing with VIP treatment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Staging & Prep</h3>
                <p className="text-gray-700">
                  Professional Homestead West staging recommendations and home preparation guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Homestead West Home?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Dr. Jan Duffy, a VIP New Construction Homes Specialist, for expert selling services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:7022996607"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Call Dr. Jan: (702) 299-6607
              </a>
              <a
                href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
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
