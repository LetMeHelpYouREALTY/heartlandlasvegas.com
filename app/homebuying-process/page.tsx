import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Homebuying Process | Homestead West Las Vegas | Expert Guidance by Dr. Jan Duffy',
  description: 'Complete guide to buying a new home at Homestead West Las Vegas. Expert guidance from Dr. Jan Duffy through prequalification, house hunting, contracting, and closing. Nevada License S.0197614.LLC.',
  ...canonicalMetadata('/homebuying-process'),
  keywords: [
    'homebuying process Las Vegas',
    'new home buying guide',
    'new construction homebuying',
    'Homestead West homebuying',
    'Dr. Jan Duffy homebuying guide',
    'Las Vegas new home process',
    'first time home buyer Las Vegas'
  ],
  openGraph: {
    title: 'Homebuying Process | Homestead West Las Vegas',
    description: 'Complete guide to buying a new home at Homestead West Las Vegas with expert guidance from Dr. Jan Duffy.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/homebuying-process',
    images: ogImages('how-it-works'),
  },
};

export default function HomebuyingProcessPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Homebuying Process at Homestead West Las Vegas',
    description: 'Complete guide to buying a new home at Homestead West with expert guidance from Dr. Jan Duffy',
    totalTime: 'P60D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '910990'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Prequalification'
      },
      {
        '@type': 'HowToSupply',
        name: 'Earnest Money Deposit'
      },
      {
        '@type': 'HowToSupply',
        name: 'Down Payment'
      }
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Real Estate Agent'
      },
      {
        '@type': 'HowToTool',
        name: 'Lender'
      },
      {
        '@type': 'HowToTool',
        name: 'Home Inspector'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Prequalify',
        text: 'Get a no-strings-attached financial assessment to understand your budget and loan options.',
        url: 'https://www.homesteadwestlasvegas.com/homebuying-process#prequalify'
      },
      {
        '@type': 'HowToStep',
        name: 'House Hunt',
        text: 'Search for your perfect home at Homestead West with expert guidance from Dr. Jan Duffy.',
        url: 'https://www.homesteadwestlasvegas.com/homebuying-process#house-hunt'
      },
      {
        '@type': 'HowToStep',
        name: 'Contract',
        text: 'Make a preliminary commitment to buy your chosen home and lot.',
        url: 'https://www.homesteadwestlasvegas.com/homebuying-process#contract'
      },
      {
        '@type': 'HowToStep',
        name: 'Close',
        text: 'Complete final paperwork and become a new homeowner at Homestead West.',
        url: 'https://www.homesteadwestlasvegas.com/homebuying-process#close'
      }
    ]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Homebuying Process', url: 'https://www.homesteadwestlasvegas.com/homebuying-process' }
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
          imageId="how-it-works"
          title="Homestead West Homebuying Process"
          subtitle={
            <>
              Expert Guidance Through Every Step
              <br />
              Homestead West Las Vegas | Dr. Jan Duffy
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

        {/* VIP New Construction Homes Specialist Introduction */}
        <section className="py-16 bg-slate-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                VIP Buyer Program
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Homestead West VIP Homebuying Journey</h2>
              <SectionImage
                imageId="how-it-works"
                heading="Homestead West VIP Homebuying Journey"
                caption="Floor-plan review for Homestead West new construction in Northwest Las Vegas 89149"
              />
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers exclusive Homestead West access, 
                priority Homestead West treatment, and expert Homestead West guidance throughout your entire homebuying process—all while working for YOU, not the builder.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">VIP New Construction Homes Specialist Advantages</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Early access to new phases</li>
                      <li>• Priority lot selection</li>
                      <li>• Direct builder contact</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Expert negotiation power</li>
                      <li>• VIP portal access</li>
                      <li>• Premier relationship backing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Prequalify */}
        <section id="prequalify" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                    <h2 className="text-3xl font-bold text-gray-900">Homestead West Prequalify</h2>
                  </div>
                  <SectionImage
                    imageId="preapproval-desk"
                    heading="Homestead West Prequalify"
                    caption="Prequalify paperwork for a Homestead West ranch purchase in Las Vegas 89149"
                  />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get a No-Strings-Attached Homestead West Financial Assessment</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    This no-commitment, knowledge-building exercise gives you insight into how much home you could probably afford, 
                    as well as which home loan type might be your best fit. All it requires is for a lender to take a snapshot 
                    of your finances and run a credit check.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Prequalification is a powerful tool that will let you know exactly what steps you'll need to take before 
                    you're ready to purchase a home—if you're not there already! It also establishes a relationship with a 
                    lender, which will come in handy later on when you need preapproval to purchase a particular home.
                  </p>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Common Homebuying Myths Debunked:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>You need a 20% down payment.</strong> Actually, most buyers don't. Some even qualify for zero-down loans.</li>
                      <li>• <strong>You have to pay for everything.</strong> Maybe not. Several home loan types allow you to use a financial gift from family or friends.</li>
                      <li>• <strong>You need perfect credit.</strong> There wouldn't be many homebuyers if this were the case. While exceptional credit is ideal, many buyers have no trouble qualifying with good credit.</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Dr. Jan Duffy Can Help You:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Connect with trusted lenders in Las Vegas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Understand your financing options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Navigate the prequalification process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Prepare for preapproval when ready</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="tel:7022996607"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      📞 Call Dr. Jan: (702) 299-6607
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: House Hunt */}
        <section id="house-hunt" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Your Homestead West Wish List:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏡</span>
                      <span>Plan 3336 (3,336 sq ft) or Plan 3704 (3,704 sq ft)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏊</span>
                      <span>Pool-sized lot for outdoor living</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏠</span>
                      <span>Optional detached casita or pool house</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🚗</span>
                      <span>3-5 car garage options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>Northwest Las Vegas location</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                    <h2 className="text-3xl font-bold text-gray-900">Homestead West House Hunt</h2>
                  </div>
                  <SectionImage
                    imageId="listings-search-desk"
                    heading="Homestead West House Hunt"
                    caption="Search Homestead West ranch listings on-site or online in Las Vegas 89149"
                  />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Search Homestead West On-Site or Online</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Once you've prequalified and know your price range, you're ready to go shopping. Depending on what's most 
                    convenient for you, you could browse online, tour communities in person, or a combination of both! This is 
                    the time to put together your wish list of everything you'd want in your dream home.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    At Homestead West, you'll find luxury ranch homes on pool-sized lots, with optional detached casitas and 
                    multi-generational layouts. Dr. Jan Duffy can help you explore both Plan 3336 and Plan 3704 to find 
                    the right fit for your must-haves.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="/properties"
                      className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Available Homes
                    </a>
                    <a
                      href="/virtual-tour"
                      className="bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Take Virtual Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Contract */}
        <section id="contract" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                    <h2 className="text-3xl font-bold text-gray-900">Homestead West Contract</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Make a Preliminary Commitment to Buy Homestead West</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    One of the great advantages of new home construction is that it's first-come, first-served. As long as 
                    you're a qualified buyer, the house is yours if you're the one who got there first. When you've found a 
                    home that checks the right boxes, you'll want to act fast to get it under contract—ensuring that no other 
                    buyer can swoop in and buy it out from under you.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Contracting Considerations:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Home loan preapproval</li>
                      <li>• Earnest money deposit</li>
                      <li>• Building timeline</li>
                      <li>• Avoiding major transactions before closing, like purchasing a car or large furniture</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Dr. Jan Duffy's Contract Expertise:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Review all contract terms and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Negotiate on your behalf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Ensure your interests are protected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Coordinate with the builder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Guide you through the entire process</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      📧 Email Dr. Jan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Close */}
        <section id="close" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Closing Considerations:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Down Payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Closing costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Homeowners insurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Moving arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Change of address</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">4</div>
                    <h2 className="text-3xl font-bold text-gray-900">Homestead West Close</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Put a Bow on It and Grab the Homestead West Keys</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    This is your big day to sign final paperwork and breathe a sigh of satisfaction, because you've officially 
                    bought a home. And whether it's your first house, or one of several, the feeling never gets old. You'll also 
                    love the peace of mind that comes with a new home warranty, providing coverage on major items and repairs.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    At Homestead West, you'll be closing on a luxury ranch home built by the builder. 
                    top 10 homebuilders. Dr. Jan Duffy will be there every step of the way to ensure a smooth closing process.
                  </p>
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
                <a href="/buyers-guide" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buyer's Guide</h3>
                  <p className="text-gray-700">Complete guide for new construction buyers</p>
                </a>
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/floor-plans" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/faq" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">FAQ</h3>
                  <p className="text-gray-700">Common questions about new construction</p>
                </a>
                <a href="/properties" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Properties</h3>
                  <p className="text-gray-700">Browse available Homestead West homes</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Ready to start your Homestead West homebuying journey?"
          body="Dr. Jan Duffy represents you—not the builder—through prequalification, lot selection, and closing."
          source="homebuying-process"
        />
      </div>
    </>
  );
}
