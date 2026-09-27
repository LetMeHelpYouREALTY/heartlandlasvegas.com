import { Metadata } from 'next';
import { ASSET_HEADSHOT_PATH } from '@/lib/site-assets';
import Image from 'next/image';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Real Estate Services | Dr. Jan Duffy | Las Vegas Real Estate Agent',
  description: 'Comprehensive real estate services by Dr. Jan Duffy (License S.0197614.LLC) in Las Vegas. Buying, selling, investment consulting, and property management.',
  keywords: 'real estate services Las Vegas, Dr. Jan Duffy services, buying homes Las Vegas, selling homes Las Vegas, real estate investment',
  ...canonicalMetadata('/services'),
  openGraph: {
    title: 'Real Estate Services | Dr. Jan Duffy',
    description: 'Comprehensive real estate services by Dr. Jan Duffy in Las Vegas.',
    type: 'website',
    url: absoluteUrl('/services'),
    images: ogImages('buyer-consultation'),
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real Estate Services',
    description: 'Comprehensive real estate services including buying, selling, investment consulting, and property management',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614.LLC'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting'],
    offers: {
      '@type': 'Offer',
      description: 'Professional real estate services',
      priceCurrency: 'USD'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Homestead West | Homes by Dr Jan Duffy',
    description: 'Las Vegas real estate services specializing in new construction homes with VIP New Construction Homes Specialist, and expert real estate guidance',
    url: 'https://www.homesteadwestlasvegas.com',
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
    founder: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'VIP New Construction Specialist',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    knowsAbout: ['New Construction Homes', 'Real Estate Sales', 'Property Management', 'Real Estate Investment', 'VIP New Construction Homes Specialist'],
    memberOf: {
      '@type': 'Organization',
      name: 'Las Vegas Association of Realtors'
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Services', url: 'https://www.homesteadwestlasvegas.com/services' }
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
          title="Real Estate Services"
          subtitle={
            <>
              Comprehensive Solutions by Dr. Jan Duffy
              <br />
              VIP New Construction Homes Specialist | Nevada License S.0197614.LLC
            </>
          }
          badge="New Construction Specialist"
          showActions={true}
        >
          <div className="flex justify-center md:justify-start mt-4">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/20" style={{ aspectRatio: '1/1' }}>
              <Image
                src={ASSET_HEADSHOT_PATH}
                alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center top' }}
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </PageHero>

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

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Homestead West Services</h2>
              <SectionImage
                imageId="buyer-consultation"
                heading="Our Homestead West Services"
                caption="Buyer consultation for Homestead West services in Las Vegas 89149"
              />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Dr. Jan Duffy provides comprehensive real estate services throughout Las Vegas, 
                helping clients achieve their property goals with expertise, integrity, and 
                personalized attention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Buying Homestead West Homes</h3>
                <p className="text-gray-700 mb-6">
                  Expert guidance through the Homestead West home buying process, from first-time buyers to luxury properties.
                </p>
                <a
                  href="/services/buying"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Selling Homestead West Homes</h3>
                <p className="text-gray-700 mb-6">
                  Maximize your Homestead West home's value with professional marketing and negotiation expertise.
                </p>
                <a
                  href="/services/selling"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Homestead West Investment Consulting</h3>
                <p className="text-gray-700 mb-6">
                  Strategic Homestead West real estate investment advice to build wealth through smart property decisions.
                </p>
                <a
                  href="/services/investment"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Homestead West Property Management</h3>
                <p className="text-gray-700 mb-6">
                  Professional property management services for rental properties and investment portfolios.
                </p>
                <a
                  href="/services/property-management"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Dr. Jan Duffy?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Market Expertise</h3>
                  <p className="text-gray-700">
                    Deep knowledge of the Las Vegas real estate market, including Northwest Las Vegas, 
                    Homestead West, and surrounding communities. 30+ years of experience.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Buyer-First Representation</h3>
                  <p className="text-gray-700">
                    As a VIP New Construction Homes Specialist, Dr. Jan represents home buyers exclusively. 
                    Every client receives individualized attention and customized strategies tailored to their goals.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-3xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Data-Driven Insights</h3>
                  <p className="text-gray-700">
                    Ph.D. in Market Research & Consumer Behavior brings data-driven insights to every transaction. 
                    Up-to-date market analysis and trends to help you make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Homestead West Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Consultation</h3>
                <p className="text-gray-700">
                  Initial meeting to understand your Homestead West goals and requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Strategy</h3>
                <p className="text-gray-700">
                  Develop a customized Homestead West plan based on your specific needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Execution</h3>
                <p className="text-gray-700">
                  Implement the Homestead West plan with professional guidance and support
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Homestead West Follow-up</h3>
                <p className="text-gray-700">
                  Ongoing Homestead West support and relationship building for future needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a365d] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Contact Dr. Jan Duffy, a VIP New Construction Homes Specialist
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Expert real estate services with buyer-first representation
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="tel:7022996607"
                  className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  📞 Call (702) 299-6607
                </a>
                <a
                  href="/appointment"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📅 Schedule Consultation
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 text-white">
                <p className="text-lg font-semibold mb-2 text-white">Dr. Jan Duffy - VIP New Construction Homes Specialist</p>
                <p className="text-blue-200">Las Vegas Real Estate Expert | Nevada License S.0197614.LLC</p>
                <p className="text-blue-200 mt-1">DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Services & Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/services/buying" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Home Buying Services</h3>
                  <p className="text-gray-700">Expert guidance for first-time and experienced buyers</p>
                </a>
                <a href="/services/selling" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Home Selling Services</h3>
                  <p className="text-gray-700">Maximize your home's value with professional marketing</p>
                </a>
                <a href="/services/investment" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Investment Consulting</h3>
                  <p className="text-gray-700">Strategic real estate investment guidance</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/about" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors border-2 border-indigo-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise</p>
                </a>
                <a href="/contact" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Us</h3>
                  <p className="text-gray-700">Get in touch for a consultation</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
