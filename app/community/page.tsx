import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import NearbyAmenitiesSection from '@/components/NearbyAmenitiesSection';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Community & Neighborhood | Homestead West Las Vegas | Schools, Shopping, Healthcare | Northwest Las Vegas',
  description: 'Explore Homestead West Las Vegas community in Northwest Las Vegas with local schools, shopping, dining, healthcare facilities, and recreation. Luxury new construction neighborhood guide for zip code 89149.',
  ...canonicalMetadata('/community'),
  keywords: [
    'Homestead West community',
    'Northwest Las Vegas schools',
    'Las Vegas shopping centers',
    'Las Vegas healthcare facilities',
    'Las Vegas parks and recreation',
    '89149 zip code',
    'luxury new construction Las Vegas',
    'Northwest Las Vegas neighborhood',
    'new construction community Las Vegas',
    'Las Vegas new home community',
    'luxury homes Northwest Las Vegas',
    'single story homes Las Vegas',
    'ranch homes Las Vegas',
    'pool sized lots Las Vegas'
  ],
  openGraph: {
    title: 'Community & Neighborhood | Homestead West Las Vegas',
    description: 'Explore Homestead West Las Vegas community with local schools, shopping, dining, and recreation.',
    type: 'website',
    url: absoluteUrl('/community'),
    images: ogImages('community-streetscape'),
  },
};

export default function CommunityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Homestead West',
    description: 'Luxury single-story ranch home community in Northwest Las Vegas featuring homes from 3,336-3,704 sq ft priced from $910,000',
    alternateName: 'Northwest Las Vegas',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US',
      streetAddress: 'W. Ann Road and N. Fort Apache Road'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2825,
      longitude: -115.2950
    },
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      alternateName: 'Northwest Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    // AEO: Additional context for AI systems
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Price Range',
        value: 'Starting at $910,000'
      },
      {
        '@type': 'PropertyValue',
        name: 'Home Sizes',
        value: '3,336-3,704 square feet'
      },
      {
        '@type': 'PropertyValue',
        name: 'Home Style',
        value: 'Single-story ranch homes'
      },
      {
        '@type': 'PropertyValue',
        name: 'Lot Features',
        value: 'Pool-sized lots, optional detached casitas'
      }
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pool-sized lots',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Single-story ranch homes',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Optional detached casita',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'New construction homes',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Luxury homes',
        value: true
      }
    ],
    hasMap: 'https://www.homesteadwestlasvegas.com/community-map'
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Community', url: 'https://www.homesteadwestlasvegas.com/community' }
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
          imageId="sunset-mountain-views"
          title="Homestead West Community & Neighborhood"
          subtitle="Homestead West Las Vegas"
          badge="Northwest Las Vegas 89149"
        />

        {/* Available homes — early for buyer engagement */}
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Elite Homestead West Community Access</h2>
                <SectionImage
                  imageId="pool-sized-lot"
                  heading="Elite Homestead West Community Access"
                  caption="Pool-sized lots in Homestead West, Northwest Las Vegas 89149"
                />
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, provides insider knowledge 
                  of Homestead West community amenities, local services, and neighborhood advantages.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                  Exploring the wider Northwest Las Vegas foothills? Read our{' '}
                  <Link href="/la-madre-foothills" className="text-[#1a365d] font-semibold underline">
                    La Madre Foothills area guide
                  </Link>{' '}
                  for zip-level context, then compare back to Homestead West.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Community Features</h3>
                  <p className="text-gray-700">Homestead West pool-sized lots, ranch homes, optional casitas</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Prime Location</h3>
                  <p className="text-gray-700">Homestead West in Northwest Las Vegas with easy access to amenities</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West VIP Insights</h3>
                  <p className="text-gray-700">Insider knowledge of Homestead West local services and amenities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Schools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Local Schools</h2>
              <SectionImage
                imageId="school-campus-89149"
                heading="Homestead West Local Schools"
                caption="Zoned school campus in the Centennial Hills area near Homestead West, Las Vegas NV 89149"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎒</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Dean LaMar Allen Elementary</h3>
                      <p className="text-gray-700">Grades K-5</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Grades:</span> K-5</p>
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> about 1 mile</p>
                    <p className="text-gray-700 text-sm"><span className="font-semibold">Address:</span> 8680 W Hammer Ln, Las Vegas NV 89149</p>
                    <p className="text-gray-700 text-sm">Confirm current zoning with Clark County School District before you buy.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏫</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Justice Myron E. Leavitt Middle School</h3>
                      <p className="text-gray-700">Grades 6-8</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 1.5 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Enrollment:</span> ~1,400 students</p>
                    <p className="text-gray-700 text-sm"><span className="font-semibold">Location:</span> Centennial Hills</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Centennial High School</h3>
                      <p className="text-gray-700">Grades 9-12</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Grades:</span> 9-12</p>
                    <p className="text-gray-700"><span className="font-semibold">Programs:</span> Culinary Arts, Performing Arts, JROTC</p>
                    <p className="text-gray-700 text-sm">Confirm current zoning and program seats with CCSD.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Northwest Career & Technical Academy</h3>
                      <p className="text-gray-700">Magnet Option</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Type:</span> Magnet option (application required)</p>
                    <p className="text-gray-700 text-sm"><span className="font-semibold">Focus:</span> Career and technical programs, smaller class sizes</p>
                    <p className="text-gray-700 text-sm"><span className="font-semibold">Requirement:</span> Application required</p>
                    <p className="text-blue-700 text-sm font-semibold mt-2">Magnet School Option</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Zoned Schools for Homestead West</h3>
                <p className="text-gray-700 mb-2">
                  Homestead West (Ann Rd & Fort Apache area, 89149) is zoned for the Clark County School District. 
                  All three zoned schools are within 2 miles of the community, providing convenient access for families.
                </p>
                <p className="text-gray-700">
                  <strong>Note:</strong> Northwest Career & Technical Academy is a magnet option requiring application, 
                  and ranks among the top 12 high schools in Nevada. Families interested in this option should apply 
                  through the Clark County School District magnet program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shopping & Dining */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Shopping & Dining</h2>
              <SectionImage
                imageId="grocery-center-89149"
                heading="Homestead West Shopping & Dining"
                caption="Shopping centers in Northwest Las Vegas, a short drive from 5592 Dapple Gray Rd"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Shopping Centers</h3>
                  <SectionImage
                    imageId="grocery-center-89149"
                    heading="Homestead West Shopping Centers"
                    caption="Grocery and retail near Homestead West in zip code 89149"
                  />
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Target</p>
                        <p className="text-gray-700">1.8 miles • 24/7 SuperTarget</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Walmart Supercenter</p>
                        <p className="text-gray-700">2.3 miles • Full grocery & pharmacy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Trader Joe's</p>
                        <p className="text-gray-700">3.1 miles • Organic & specialty foods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🛒</span>
                      <div>
                        <p className="font-semibold text-gray-900">Albertsons</p>
                        <p className="text-gray-700">2.7 miles • Local grocery chain</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Restaurants</h3>
                  <SectionImage
                    imageId="dining-patio-89149"
                    heading="Homestead West Restaurants"
                    caption="Dining with mountain views near Homestead West and Centennial Hills"
                  />
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Rachel's Kitchen</p>
                        <p className="text-gray-700">1.9 miles • Healthy American cuisine</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Egg Works</p>
                        <p className="text-gray-700">2.1 miles • Breakfast & brunch</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">My Garage Restaurant</p>
                        <p className="text-gray-700">2.8 miles • Casual dining</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🍽️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Wahoo's Tacos</p>
                        <p className="text-gray-700">3.2 miles • Mexican & Baja-style</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Facilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Healthcare Facilities</h2>
              <SectionImage
                imageId="medical-campus"
                heading="Healthcare Facilities"
                caption="Medical campuses in Northwest Las Vegas near Homestead West"
              />
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Centennial Hills Hospital</h3>
                      <p className="text-gray-700">Full-service hospital</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 3.8 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Emergency, Surgery, Maternity</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 6900 N Durango Dr</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">👨‍⚕️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Northwest Medical Center Near Homestead West</h3>
                      <p className="text-gray-700">Urgent care & primary care</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 2.9 miles from Homestead West</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Urgent Care, Primary Care</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 8402 W Centennial Pkwy</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">CVS Pharmacy Near Homestead West</h3>
                      <p className="text-gray-700">Pharmacy & health services</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Distance:</span> 1.2 miles</p>
                    <p className="text-gray-700"><span className="font-semibold">Services:</span> Prescriptions, Vaccines</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> 7151 W Alexander Rd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recreation & Parks */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Recreation & Parks</h2>
              <SectionImage
                imageId="local-park-89149"
                heading="Homestead West Recreation & Parks"
                caption="Neighborhood park near Homestead West in Northwest Las Vegas 89149"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Local Parks</h3>
                  <SectionImage
                    imageId="local-park-89149"
                    heading="Homestead West Local Parks"
                    caption="Walking paths and ramadas near Homestead West, Las Vegas 89149"
                  />
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Lone Mountain Park</p>
                        <p className="text-gray-700">2.1 miles • Hiking trails & picnic areas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Gilcrease Orchard</p>
                        <p className="text-gray-700">3.4 miles • Farm & seasonal activities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">🌳</span>
                      <div>
                        <p className="font-semibold text-gray-900">Centennial Hills Park</p>
                        <p className="text-gray-700">4.2 miles • Sports fields & playgrounds</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Things to Do Near Homestead West</h3>
                  <SectionImage
                    imageId="red-rock-canyon"
                    heading="Things to Do Near Homestead West"
                    caption="Red Rock Canyon is about 9 miles from Homestead West at 5592 Dapple Gray Rd"
                  />
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">🏔️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Red Rock Canyon</p>
                        <p className="text-gray-700">9 miles • Hiking, climbing, scenic drives</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">🌆</span>
                      <div>
                        <p className="font-semibold text-gray-900">Downtown Las Vegas</p>
                        <p className="text-gray-700">18 miles • Entertainment & dining</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">⛰️</span>
                      <div>
                        <p className="font-semibold text-gray-900">Mount Charleston</p>
                        <p className="text-gray-700">23 miles • Skiing & alpine recreation</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <a
                      href="https://maps.app.goo.gl/rMPkPwK5Mz7Z2T5J7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <span>🗺️</span>
                      <span>Explore More Things to Do on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          variant="compact"
          heading="What's Nearby Homestead West"
          subheading="Filter restaurants, grocery, parks, healthcare, and schools from the Centennial Hills map pin."
          id="community-amenity-map"
        />

        {/* Related Pages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/community-map" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Map</h3>
                  <p className="text-gray-700">Interactive map showing Homestead West location and nearby amenities</p>
                </a>
                <a href="/amenities" className="bg-white p-6 rounded-lg hover:bg-amber-50 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Nearby Amenities Map</h3>
                  <p className="text-gray-700">Restaurants, parks, parking, shopping, schools & more on Google Maps</p>
                </a>
                <a href="/virtual-tour" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Tour</h3>
                  <p className="text-gray-700">Take a 3D virtual tour of Homestead West homes</p>
                </a>
                <a href="/floor-plans" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Get exclusive access to Homestead West homes</p>
                </a>
                <a href="/services" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Expert real estate services for Homestead West buyers</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Us</h3>
                  <p className="text-gray-700">Schedule a consultation about Homestead West</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Walk Homestead West in 89149"
          body="Single-story ranch homes on pool-sized lots at Ann Road and Fort Apache. Call (702) 299-6607 for a private tour."
          source="community"
        />
      </div>
    </>
  );
}
