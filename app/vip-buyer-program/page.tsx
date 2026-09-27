import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'VIP Berkshire Hathaway HomeServices Buyer Program | Dr. Jan Duffy | Las Vegas New Construction Expert',
  description: 'Get VIP access to new construction homes in Las Vegas with Dr. Jan Duffy. Early phase access, priority lot selection, direct builder contact, and expert negotiation.',
  keywords: [
    'luxury new construction Las Vegas',
    'new construction Henderson',
    'Cadence homes realtor',
    'North Las Vegas new builds',
    'VIP New Construction Homes Specialist',
    'Dr. Jan Duffy new construction',
    'Las Vegas new construction expert',
    'VIP buyer program',
    'new construction buyer access'
  ],
  ...canonicalMetadata('/vip-buyer-program'),
  openGraph: {
    title: 'VIP Berkshire Hathaway HomeServices Buyer Program | Dr. Jan Duffy',
    description: 'Get VIP access to new construction homes in Las Vegas with Dr. Jan Duffy. Early phase access, priority lot selection, and expert negotiation.',
    type: 'website',
    url: absoluteUrl('/vip-buyer-program'),
    images: ogImages('vip-model-home'),
  },
};

const vipProgramFaqs = [
  {
    question: 'Do I need to register with the VIP program before visiting a builder model home?',
    answer:
      'You should connect with Dr. Jan Duffy before you register with the builder so your buyer representation is documented correctly. That protects your relationship as a represented buyer and keeps incentives and lot holds aligned with your contract.',
  },
  {
    question: 'How is VIP builder access different from walking into the sales office alone?',
    answer:
      'The sales team works for the builder. The VIP program is buyer-focused: early phase timing, lot strategy, and negotiation are handled with you as the client—not the builder.',
  },
  {
    question: 'Does the VIP program add extra fees to my new construction purchase?',
    answer:
      'Buyer representation is typically paid from the builder side as part of the transaction structure; Dr. Jan reviews how that applies to your specific community and contract during consultation.',
  },
] as const;

export default function VIPBuyerProgramPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
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
    ],
    knowsAbout: [
      'New Construction Homes',
      'VIP New Construction Homes Specialist',
      'Cadence Henderson',
      'Homestead West Las Vegas',
      'Luxury Ranch Homes',
      'Northwest Las Vegas Real Estate'
    ],
    jobTitle: 'VIP New Construction Specialist',
    sameAs: [
      'https://www.homesteadwestlasvegas.com',
      'https://www.homesteadwestlasvegas.com/about',
      'https://www.homesteadwestlasvegas.com/contact',
      'https://www.homesteadwestlasvegas.com/floor-plans'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Nevada Real Estate License',
      credentialCategory: 'license',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division'
      }
    }
  };

  // AEO: Service schema for VIP Buyer Program
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'New Construction Buyer Representation',
    name: 'VIP Berkshire Hathaway HomeServices Buyer Program',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    description:
      'VIP buyer representation program providing early lot access, builder coordination, and negotiation support for new construction home purchases in Las Vegas and Henderson.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'No cost to buyer - builder pays commission'
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'VIP Buyer Program', url: absoluteUrl('/vip-buyer-program') },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        <PageHero
          imageId="vip-model-home"
          title="VIP Berkshire Hathaway HomeServices Buyer Program for Homestead West"
          subtitle={
            <>
              Premier New Home Buyer Program for Homestead West Las Vegas
              <span className="block mt-4 text-lg md:text-xl font-normal">
                The VIP Berkshire Hathaway HomeServices New Home Buyer Program provides exclusive access to Homestead West Las Vegas new construction homes. As a VIP New Construction Homes Specialist, Dr. Jan Duffy represents YOU—the buyer—with insider access, priority lot selection, and expert negotiation. She works exclusively for home buyers, not the builder, giving YOU the ultimate advantage when purchasing your new Homestead West home.
              </span>
            </>
          }
          badge="VIP Buyer Program"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:7022996607"
              className="bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-all shadow-2xl hover:shadow-3xl text-center"
            >
              📞 Call Dr. Jan: (702) 299-6607
            </a>
            <a
              href="mailto:DrJanSells@HomesteadWestLasVegas.com"
              className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-blue-900 transition-all text-center"
            >
              📧 Get VIP Access
            </a>
          </div>
        </PageHero>

        {/* Available homes — early for buyer engagement */}
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

        {/* Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What Working with a VIP New Construction Homes Specialist Means</h2>
                <SectionImage
                  imageId="vip-model-home"
                  heading="What Working with a VIP New Construction Homes Specialist Means"
                  caption="VIP model home access at Homestead West in Northwest Las Vegas 89149"
                />
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Dr. Jan Duffy's elite builder relationships deliver exclusive advantages 
                  that regular agents simply cannot provide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Early Phase Access Through VIP Program</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The VIP Berkshire Hathaway HomeServices New Home Buyer Program provides first access to new Homestead West phases before public release. Secure the best Homestead West lots, prime locations, and preferred floor plans while others wait.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-green-500">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Inside Track on Homestead West Spec Homes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Direct access to quick move-in Homestead West homes and spec inventory. Get notified 
                    immediately when new Homestead West homes become available.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Direct Homestead West Builder Contact</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Faster answers, quicker problem-solving, and direct communication with 
                    Homestead West builder management and sales teams.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-yellow-500">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Stack Homestead West Buyer Incentives</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Expert knowledge of all available Homestead West incentives and how to combine them 
                    effectively for maximum savings on your new Homestead West home.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-red-500">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Negotiation Power</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The VIP Berkshire Hathaway HomeServices program delivers elite builder relationship-backed negotiation power for Homestead West. Get upgrades, concessions, and terms that others simply cannot achieve through the standard homebuying process.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Priority Lot Selection Benefits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The VIP Berkshire Hathaway HomeServices New Home Buyer Program ensures priority treatment throughout the entire Homestead West process—from lot selection to closing. Experience the difference of working with a premier program partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Proven Track Record with Homestead West</h2>
                <p className="text-xl text-gray-700">
                  Dr. Jan Duffy's new construction expertise spans multiple Las Vegas communities including Homestead West
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Active Communities Including Homestead West</h3>
                  <SectionImage
                    imageId="cadence-henderson"
                    heading="Active Communities Including Homestead West"
                    caption="New construction beyond Homestead West, including Henderson master-planned streets"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Homestead West Las Vegas</p>
                        <p className="text-gray-700">Luxury ranch homes on pool-sized lots</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Cadence Henderson</p>
                        <p className="text-gray-700">Master-planned community with resort amenities</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">North Las Vegas Developments</p>
                        <p className="text-gray-700">New construction opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">VIP Portal Access for Homestead West</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Real-Time Pricing Updates</p>
                        <p className="text-gray-700">Instant access to current pricing and incentives</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Priority Lot Holds</p>
                        <p className="text-gray-700">Secure your preferred lot before public release</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Exclusive Selections</p>
                        <p className="text-gray-700">First choice on premium lots and floor plans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-blue-900 text-white rounded-xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-8">VIP Buyer Services & Expertise</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-5xl font-bold text-[#d4af37] mb-2">$910K+</p>
                    <p className="text-xl">Listed ranch homes from $910,990</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#d4af37] mb-2">3,336–3,704</p>
                    <p className="text-xl">Square feet on the two ranch plans</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#d4af37] mb-2">(702) 299-6607</p>
                    <p className="text-xl">Call before you walk into the sales office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Construction Communities Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">New Construction Communities Las Vegas: Homestead West and More</h2>
                <p className="text-xl text-gray-700">
                  Dr. Jan Duffy's VIP access spans multiple premier communities across the Las Vegas Valley
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏡</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Homestead West</h3>
                    <p className="text-gray-700 mb-4">Northwest Las Vegas</p>
                    <p className="text-sm text-gray-500">Luxury ranch homes on pool-sized lots</p>
                    <p className="text-sm text-gray-500">Plan 3336 & 3704 available</p>
                  </div>

                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏖️</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Cadence</h3>
                    <p className="text-gray-700 mb-4">Henderson</p>
                    <p className="text-sm text-gray-500">Master-planned community</p>
                    <p className="text-sm text-gray-500">Resort-style amenities</p>
                  </div>

                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏗️</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">North Las Vegas</h3>
                    <p className="text-gray-700 mb-4">Multiple Developments</p>
                    <p className="text-sm text-gray-500">New construction opportunities</p>
                    <p className="text-sm text-gray-500">Growing communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AEO: VIP-specific Q&A (unique from /faq; visible copy for answer engines) */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Common questions about the VIP buyer program</h2>
            <div className="space-y-6">
              {vipProgramFaqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register Your Buyer Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Register as a New Home Buyer for New Homes - Dr. Jan Duffy Fast-Track Process</h2>
              <p className="text-xl text-gray-700 mb-12">
                As a VIP New Construction Homes Specialist, Dr. Jan Duffy's program includes a streamlined registration process 
                that gets you priority treatment from day one for new construction homes. She represents YOU, the buyer, throughout the entire process.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Initial Consultation for New Homes</h3>
                  <p className="text-gray-700 text-sm">Discuss needs, budget, and preferences for new construction homes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">VIP Registration for New Homes</h3>
                  <p className="text-gray-700 text-sm">Register with VIP Berkshire Hathaway HomeServices buyer program by Calling Dr. Jan Duffy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Priority Access to New Homes</h3>
                  <p className="text-gray-700 text-sm">Get early access to new construction phases and lots</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Expert Guidance for New Homes</h3>
                  <p className="text-gray-700 text-sm">Navigate the entire new construction process with VIP treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Register as a represented Homestead West buyer"
          body="Call (702) 299-6607 before you walk into the builder sales office. Dr. Jan represents you—not the builder."
          source="vip-buyer-program"
        />

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Learn More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/floor-plans" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">View available Homestead West home designs</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/about" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Meet your Las Vegas real estate expert</p>
                </a>
                <a href="/community" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community</h3>
                  <p className="text-gray-700">Explore Homestead West location and amenities</p>
                </a>
                <a href="/contact" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch to start your VIP registration</p>
                </a>
                <a href="/buyers-guide" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buyer's Guide</h3>
                  <p className="text-gray-700">Essential information for new home buyers</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
