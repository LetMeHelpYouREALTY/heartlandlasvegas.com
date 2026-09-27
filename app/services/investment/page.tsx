import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Investment Consulting | Dr. Jan Duffy | Las Vegas Real Estate Investment Expert',
  description: 'Expert real estate investment consulting in Las Vegas with Dr. Jan Duffy. VIP New Construction Homes Specialist, market analysis, and investment strategy guidance.',
  ...canonicalMetadata('/services/investment'),
  keywords: [
    'real estate investment Las Vegas',
    'Dr. Jan Duffy investment consulting',
    'Las Vegas investment properties',
    'real estate investment strategy',
    'new construction investment',
    'Las Vegas rental properties'
  ],
  openGraph: {
    title: 'Investment Consulting | Dr. Jan Duffy',
    description: 'Expert real estate investment consulting in Las Vegas with VIP New Construction Homes Specialist.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/services/investment',
    images: ogImages('investment-roi'),
  },
};

export default function InvestmentConsultingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real Estate Investment Consulting',
    description: 'Expert real estate investment consulting including market analysis, ROI evaluation, and investment strategy',
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
    serviceType: ['Real Estate Investment Consulting', 'Market Analysis', 'Investment Strategy'],
    offers: {
      '@type': 'Offer',
      description: 'Professional real estate investment consulting services',
      priceCurrency: 'USD'
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Services', url: 'https://www.homesteadwestlasvegas.com/services' },
    { name: 'Investment', url: 'https://www.homesteadwestlasvegas.com/services/investment' }
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
        imageId="investment-roi"
        title="Homestead West Investment Consulting"
        subtitle={
          <>
            Strategic Homestead West Real Estate Investment Guidance
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Homestead West Investment Access</h2>
            <SectionImage
              imageId="investment-roi"
              heading="Elite Homestead West Investment Access"
              caption="Investment analysis for Homestead West ranch homes in Northwest Las Vegas 89149"
            />
            <p className="text-xl text-gray-700 mb-8">
              Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers exclusive investment opportunities, 
              early access to new developments, and expert market analysis for maximum returns.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Homestead West Investment Consulting Services</h2>
            <SectionImage
              imageId="managed-rental-ranch"
              heading="Homestead West Investment Consulting Services"
              caption="Ranch inventory used for Homestead West investment and rental analysis in Las Vegas 89149"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Market Analysis</h3>
                <p className="text-gray-700">
                  Comprehensive Homestead West market analysis and investment opportunity identification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West New Construction</h3>
                <p className="text-gray-700">
                  Early access to Homestead West new construction investment opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West ROI Analysis</h3>
                <p className="text-gray-700">
                  Detailed Homestead West ROI analysis and investment strategy development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Rental Properties</h3>
                <p className="text-gray-700">
                  Homestead West investment property selection and rental market analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Portfolio Management</h3>
                <p className="text-gray-700">
                  Strategic Homestead West portfolio management and diversification guidance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Exit Strategies</h3>
                <p className="text-gray-700">
                  Homestead West investment exit strategies and timing optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Prime Investment Areas Including Homestead West</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West</h3>
                <p className="text-gray-700 mb-4">Luxury ranch homes on pool-sized lots</p>
                <p className="text-sm text-gray-500">Starting at $910,990</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cadence Henderson</h3>
                <p className="text-gray-700 mb-4">Master-planned community with resort amenities</p>
                <p className="text-sm text-gray-500">Premium location</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">North Las Vegas</h3>
                <p className="text-gray-700 mb-4">Growing communities with new construction</p>
                <p className="text-sm text-gray-500">Emerging markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Invest in Homestead West Las Vegas?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact Dr. Jan Duffy, a VIP New Construction Homes Specialist, for expert investment consulting
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
