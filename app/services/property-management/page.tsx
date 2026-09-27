import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Property Management Services | Dr. Jan Duffy | Las Vegas Real Estate',
  description: 'Professional property management services in Las Vegas with Dr. Jan Duffy. VIP New Construction Homes Specialist, rental management, and investment property services.',
  ...canonicalMetadata('/services/property-management'),
  keywords: [
    'property management Las Vegas',
    'Dr. Jan Duffy property management',
    'rental property management',
    'investment property management',
    'new construction management',
    'Las Vegas property management'
  ],
  openGraph: {
    title: 'Property Management Services | Dr. Jan Duffy',
    description: 'Professional property management services in Las Vegas with VIP New Construction Homes Specialist.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/services/property-management',
    images: ogImages('tenant-keys-ranch'),
  },
};

export default function PropertyManagementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Property Management Services',
    description: 'Professional property management services for rental and investment properties',
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
    serviceType: 'Property Management',
    offers: {
      '@type': 'Offer',
      description: 'Comprehensive property management services',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <PageHero
          imageId="tenant-keys-ranch"
          title="Homestead West Property Management Services"
          subtitle={
            <>
              Professional Homestead West Property Management Solutions
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Elite Homestead West Property Management</h2>
              <SectionImage
                imageId="tenant-keys-ranch"
                heading="Elite Homestead West Property Management"
                caption="Lockbox and keys at a managed Homestead West ranch in Las Vegas 89149"
              />
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers exclusive property management 
                services with premium tenant screening, maintenance coordination, and investment optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Homestead West Management Services</h2>
              <SectionImage
                imageId="managed-rental-ranch"
                heading="Comprehensive Homestead West Management Services"
                caption="Professionally managed ranch home in Homestead West, Las Vegas 89149"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Tenant Screening</h3>
                  <p className="text-gray-700">
                    Comprehensive background checks, credit verification, and rental history analysis for Homestead West.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Rent Collection</h3>
                  <p className="text-gray-700">
                    Automated Homestead West rent collection, late fee management, and financial reporting.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Maintenance</h3>
                  <p className="text-gray-700">
                    24/7 Homestead West maintenance coordination with trusted contractors and vendors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Financial Reporting</h3>
                  <p className="text-gray-700">
                    Detailed Homestead West monthly reports, expense tracking, and tax documentation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Lease Management</h3>
                  <p className="text-gray-700">
                    Homestead West lease preparation, renewal negotiations, and legal compliance.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Property Marketing</h3>
                  <p className="text-gray-700">
                    Professional Homestead West marketing, photography, and tenant acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Property Types We Manage Including Homestead West</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Single Family Homes</h3>
                  <p className="text-gray-700 mb-4">Complete management for Homestead West rental homes</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• Homestead West tenant screening & placement</li>
                    <li>• Homestead West rent collection & accounting</li>
                    <li>• Homestead West maintenance coordination</li>
                    <li>• Homestead West property inspections</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Investment Properties</h3>
                  <p className="text-gray-700 mb-4">Specialized Homestead West investment property management</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• Homestead West ROI optimization</li>
                    <li>• Homestead West market analysis</li>
                    <li>• Homestead West investment reporting</li>
                    <li>• Homestead West portfolio management</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West New Construction</h3>
                  <p className="text-gray-700 mb-4">VIP Homestead West new construction properties</p>
                  <ul className="text-sm text-gray-500 text-left">
                    <li>• Homestead West pre-construction management</li>
                    <li>• Homestead West builder coordination</li>
                    <li>• Homestead West warranty management</li>
                    <li>• Homestead West premium tenant placement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Homestead West Management Process</h2>
              <SectionImage
                imageId="tenant-keys-ranch"
                heading="Our Homestead West Management Process"
                caption="Tenant placement starts at the ranch door — Homestead West, Las Vegas 89149"
              />
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Homestead West Property Assessment</h3>
                  <p className="text-gray-700">
                    Comprehensive Homestead West property evaluation and market analysis
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Homestead West Tenant Placement</h3>
                  <p className="text-gray-700">
                    Professional Homestead West marketing and qualified tenant screening
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Homestead West Ongoing Management</h3>
                  <p className="text-gray-700">
                    Day-to-day Homestead West operations and tenant relationship management
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Homestead West Performance Optimization</h3>
                  <p className="text-gray-700">
                    Continuous Homestead West improvement and ROI maximization
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
              <h2 className="text-4xl font-bold mb-6">Ready for Professional Homestead West Property Management?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy, a VIP New Construction Homes Specialist, for expert property management services
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
