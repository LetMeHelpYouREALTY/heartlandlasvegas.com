import { Metadata } from 'next';
import { ASSET_HEADSHOT_PATH } from '@/lib/site-assets';
import Image from 'next/image';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | VIP New Construction Specialist | Las Vegas Real Estate Expert',
  description: 'Meet Dr. Jan Duffy, VIP New Construction Homes Specialist with Berkshire Hathaway HomeServices Nevada. Nevada License S.0197614.LLC. Buyer representation for Homestead West at 5592 Dapple Gray Rd, Las Vegas NV 89149. Call (702) 299-6607.',
  ...canonicalMetadata('/about'),
  keywords: [
    'Dr. Jan Duffy Las Vegas',
    'Las Vegas real estate agent',
    'new construction specialist',
    'VIP New Construction Homes Specialist',
    'Nevada real estate license',
    'Las Vegas new construction expert',
    'Homestead West realtor'
  ],
  openGraph: {
    title: 'About Dr. Jan Duffy | VIP New Construction Specialist',
    description: 'Meet Dr. Jan Duffy, VIP New Construction Homes Specialist. Buyer representation for Homestead West at 5592 Dapple Gray Rd, Las Vegas NV 89149.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/about',
    images: ogImages('bhhs-office-interior'),
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    jobTitle: 'VIP New Construction Specialist',
    description: 'Las Vegas real estate expert and VIP New Construction Homes Specialist who represents home buyers',
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
    worksFor: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Nevada Real Estate License',
      credentialCategory: 'license',
      credentialId: 'S.0197614.LLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division'
      }
    },
    knowsAbout: [
      'New Construction Homes',
      'VIP New Construction Homes Specialist',
      'Las Vegas Real Estate',
      'Homestead West',
      'Cadence Henderson'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas'
      },
      {
        '@type': 'City',
        name: 'Henderson'
      },
      {
        '@type': 'City',
        name: 'North Las Vegas'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article itemScope itemType="https://schema.org/Article" className="min-h-screen bg-white">
        <PageHero
          imageId="bhhs-office-interior"
          title="Who is Dr. Jan Duffy?"
          subtitle={
            <>
              <span itemProp="description">
                Dr. Jan Duffy is a VIP New Construction Homes Specialist with Berkshire Hathaway HomeServices Nevada (License S.0197614.LLC) who represents home buyers exclusively in Northwest Las Vegas, including Homestead West at 5592 Dapple Gray Rd.
              </span>
              <br />
              Las Vegas Real Estate Expert | Nevada License S.0197614.LLC
            </>
          }
          badge="New Construction Specialist"
          showActions={true}
        >
          <div className="mb-6 flex justify-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/20" style={{ aspectRatio: '1/1' }}>
              <Image
                src={ASSET_HEADSHOT_PATH}
                alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center top' }}
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
          <address rel="author" className="text-blue-50 text-lg mb-2 not-italic">
            By <a href="/about" className="text-yellow-400 hover:text-yellow-300">Dr. Jan Duffy</a>, Licensed Nevada Real Estate Agent (S.0197614.LLC)
          </address>
          <time dateTime="2026-01-19" className="text-blue-100 text-sm">Last updated: January 19, 2026</time>
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

        {/* VIP New Construction Homes Specialist Highlight */}
        <section className="py-16 bg-slate-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">VIP New Construction Homes Specialist</h2>
                <SectionImage
                  imageId="buyer-consultation"
                  heading="VIP New Construction Homes Specialist"
                  caption="Buyer consultation for Homestead West new construction at 5592 Dapple Gray Rd, Las Vegas NV 89149"
                />
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy is a VIP New Construction Homes Specialist who represents home buyers exclusively. 
                  She works for YOU, not the builder, delivering unparalleled Homestead West access and 
                  negotiation power for her clients while maintaining complete buyer advocacy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West VIP Status</h3>
                  <p className="text-gray-700">VIP New Construction Homes Specialist with exclusive access—representing home buyers exclusively</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Direct Homestead West Access</h3>
                  <p className="text-gray-700">Direct communication with Homestead West builder management</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Negotiation Power</h3>
                  <p className="text-gray-700">Premier Homestead West relationship-backed negotiation advantages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="mb-6 lg:hidden">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl ring-2 ring-blue-600/20" style={{ aspectRatio: '1/1' }}>
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
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Dr. Jan Duffy's Professional Background</h2>
                  <div className="space-y-6 text-lg text-gray-700">
                    <p>
                      Dr. Jan Duffy is a distinguished real estate professional specializing in 
                      new construction homes and developments throughout 
                      the Las Vegas Valley. As a VIP New Construction Homes Specialist who represents home buyers exclusively,
                      she delivers exclusive access and expert guidance to homebuyers—all while working for YOU, not the builder.
                    </p>
                    <p>
                      Her expertise spans multiple premier communities including Homestead West 
                      in Northwest Las Vegas, Cadence in Henderson, and various North Las Vegas 
                      developments. Dr. Jan's deep understanding of the builder's 
                      processes, floor plans, and pricing gives her clients a significant advantage.
                    </p>
                    <p>
                      As an independent real estate agent and VIP New Construction Homes Specialist, Dr. Jan Duffy represents her clients' 
                      interests exclusively, not the builder's. This independence, combined with 
                      her deep new construction expertise, creates the perfect balance of insider knowledge 
                      and complete client advocacy—all while working exclusively for home buyers.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="hidden lg:block mb-6">
                    <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden border-4 border-blue-600 shadow-xl ring-2 ring-blue-600/20">
                      <Image
                        src={ASSET_HEADSHOT_PATH}
                        alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                        fill
                        className="object-cover object-center"
                        style={{ objectPosition: 'center top' }}
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Dr. Jan Duffy's Credentials & Achievements</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Nevada Real Estate License</p>
                          <p className="text-gray-700">License #S.0197614.LLC</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">VIP New Construction Homes Specialist</p>
                          <p className="text-gray-700">Represents home buyers exclusively</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Complete Buyer Representation</p>
                          <p className="text-gray-700">Expert negotiation, contract review, and advocacy throughout the entire process</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Office at Builder</p>
                          <p className="text-gray-700">Professional on-site presence</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-gray-900">Las Vegas Market Expert</p>
                          <p className="text-gray-700">Deep local market knowledge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proven Track Record with Homestead West</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">You</div>
                  <p className="text-gray-700 font-semibold">Buyer representation, not builder sales</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">$910K+</div>
                  <p className="text-gray-700 font-semibold">Homestead West ranch homes from $910,990</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">89149</div>
                  <p className="text-gray-700 font-semibold">Office at 5592 Dapple Gray Rd</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">S.0197614.LLC</div>
                  <p className="text-gray-700 font-semibold">Nevada real estate license</p>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose Dr. Jan Duffy for Homestead West?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>VIP New Construction Homes Specialist—represents home buyers exclusively</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Independent agent representing YOUR interests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Office at builder sales office</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Expert negotiation backed by premier relationships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Direct access to builder information and resources</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">⭐</span>
                        <span>Las Vegas real estate market specialist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Client Testimonials</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, made all the difference. 
                    We got early access to the best lots and saved thousands through her expert negotiation—all while having an advocate who worked for us, not the builder."
                  </p>
                  <p className="font-semibold text-gray-900">- Homestead West buyers</p>
                  <p className="text-sm text-gray-700">Northwest Las Vegas 89149</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Dr. Jan's knowledge of the builder's process and her direct builder contacts 
                    saved us months of delays. Her VIP status gave us priority treatment throughout."
                  </p>
                  <p className="font-semibold text-gray-900">- Henderson new-construction buyers</p>
                  <p className="text-sm text-gray-700">Cadence area</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span className="text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist, was like having an insider at the builder. 
                    Her expertise meant we got upgrades and incentives others couldn't access—all while having an advocate who worked for us, not the builder."
                  </p>
                  <p className="font-semibold text-gray-900">- North Las Vegas buyers</p>
                  <p className="text-sm text-gray-700">New construction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ShowingNew community embed */}
        <section id="homestead-showingnew-embed" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">View Available Homes</h2>
                <p className="text-lg text-gray-700 mb-4">Explore live MLS listings at Homestead West</p>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNTk3Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
                >
                  Search Available Homes on RealScout
                </a>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Homestead West Listings"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  loading="lazy"
                  className="w-full border-0 block"
                />
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Tour Homestead West with Dr. Jan Duffy"
          body="Call (702) 299-6607 before you register at the builder sales office. Office: 5592 Dapple Gray Rd, Las Vegas NV 89149."
          source="about"
        />

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/services" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Services</h3>
                  <p className="text-gray-700">Buying, selling, and investment consulting</p>
                </a>
                <a href="/contact" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/testimonials" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Testimonials</h3>
                  <p className="text-gray-700">What clients say about working with Dr. Jan</p>
                </a>
                <a href="/floor-plans" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Available Homestead West home designs</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* AEO: Content freshness indicator */}
        <aside className="bg-gray-50 py-8 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-600 text-center">
              <time dateTime="2026-01-19">Last verified: January 19, 2026</time>. Information subject to change. Contact Dr. Jan Duffy for current details.
            </p>
          </div>
        </aside>
      </article>
    </>
  );
}