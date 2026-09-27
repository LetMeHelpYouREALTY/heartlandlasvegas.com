import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: "Buyer's Guide | New Construction Process | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description: "Complete buyer's guide to new construction homes in Las Vegas and Northwest Las Vegas. Step-by-step process with VIP New Construction Homes Specialist Dr. Jan Duffy. Expert guidance for first-time buyers and luxury home buyers.",
  ...canonicalMetadata('/buyers-guide'),
  keywords: [
    'new construction buyer guide',
    'Las Vegas new home process',
    'new construction buyer guide',
    'first time home buyer Las Vegas',
    'new construction process',
    'Dr. Jan Duffy buyer guide',
    'Homestead West buyer guide',
    'Northwest Las Vegas new construction',
    'luxury home buyer guide',
    'new construction homes Las Vegas',
    'single story homes buyer guide',
    'ranch homes Las Vegas guide'
  ],
  openGraph: {
    title: "Buyer's Guide | New Construction Process | Dr. Jan Duffy",
    description: "Complete buyer's guide to new construction homes in Las Vegas with VIP New Construction Homes Specialist.",
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/buyers-guide',
    images: ogImages('buyer-consultation'),
  },
};

export default function BuyersGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: "Buyer's Guide", url: 'https://www.homesteadwestlasvegas.com/buyers-guide' }
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'New Construction Home Buyer Guide',
    description: 'Complete step-by-step guide to buying new construction homes in Las Vegas',
    totalTime: 'P90D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '910990'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Pre-approval Letter'
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
        name: 'Get Pre-approved',
        text: 'Obtain mortgage pre-approval to understand your budget and strengthen your offer.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#preapproval'
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Your Community',
        text: 'Select the perfect new construction development for your lifestyle and needs.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#community'
      },
      {
        '@type': 'HowToStep',
        name: 'Select Floor Plan',
        text: 'Choose from available floor plans and customize with structural and design options.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#floorplan'
      },
      {
        '@type': 'HowToStep',
        name: 'Pick Your Lot',
        text: 'Select your homesite and any lot premiums or upgrades.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#lot'
      },
      {
        '@type': 'HowToStep',
        name: 'Sign Purchase Agreement',
        text: 'Execute the purchase agreement and provide earnest money deposit.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#contract'
      },
      {
        '@type': 'HowToStep',
        name: 'Design Center Selection',
        text: 'Choose finishes, colors, and upgrades at the builder Design Center.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#design'
      },
      {
        '@type': 'HowToStep',
        name: 'Construction Monitoring',
        text: 'Monitor construction progress with regular updates and walk-throughs.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#construction'
      },
      {
        '@type': 'HowToStep',
        name: 'Final Walkthrough',
        text: 'Complete final walkthrough and address any punch list items.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#walkthrough'
      },
      {
        '@type': 'HowToStep',
        name: 'Closing',
        text: 'Sign final documents and receive keys to your new construction home.',
        url: 'https://www.homesteadwestlasvegas.com/buyers-guide#closing'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <PageHero
          imageId="buyer-consultation"
          title="Complete Homestead West Buyer's Guide"
          subtitle={
            <>
              New Construction Process
              <br />
              Expert Guidance with VIP New Construction Homes Specialist
            </>
          }
          badge="Buyer Guide"
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
        <section className="py-16 bg-gradient-to-r from-[#f7fafc] to-[#e2e8f0] border-2 border-[#d4af37]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Homestead West VIP Buyer Advantages</h2>
                <SectionImage
                  imageId="vip-model-home"
                  heading="Homestead West VIP Buyer Advantages"
                  caption="VIP model home access at Homestead West in Northwest Las Vegas 89149"
                />
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers exclusive Homestead West advantages 
                  throughout your entire Homestead West new construction home buying journey.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Early Access to Homestead West</h3>
                  <p className="text-gray-700">First access to new Homestead West phases and premium lots</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Better Homestead West Pricing</h3>
                  <p className="text-gray-700">Homestead West VIP incentives and negotiation advantages</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Priority Service</h3>
                  <p className="text-gray-700">Faster Homestead West responses and priority treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">9-Step Homestead West New Construction Process</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div id="preapproval" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">1</div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Pre-approved</h3>
                  </div>
                  <SectionImage
                    imageId="preapproval-desk"
                    heading="Get Pre-approved"
                    caption="Mortgage pre-approval documents for Homestead West new construction in Las Vegas"
                  />
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Before you start shopping, get pre-approved for a mortgage. This shows the builder 
                      you're a serious buyer and helps you understand your budget. Dr. Jan Duffy can connect you 
                      with trusted lenders who understand new construction financing.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Access to builder preferred lenders with special rates and programs.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div id="community" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">2</div>
                    <h3 className="text-2xl font-bold text-gray-900">Choose Your Community</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Select from premier new construction developments. Dr. Jan Duffy's VIP access includes 
                      Homestead West (luxury ranch homes), Cadence Henderson (master-planned community), 
                      and North Las Vegas developments.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Insider knowledge of upcoming phases and community amenities before public release.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div id="floorplan" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">3</div>
                    <h3 className="text-2xl font-bold text-gray-900">Select Floor Plan</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Choose from the builder's floor plans. At Homestead West, select between 
                      Plan 3336 (3,336 sq ft) or Plan 3704 (3,704 sq ft). Match square footage, bedroom count, and outdoor living space to your must-haves.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Access to floor plan modifications and custom options not available to general public.</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div id="lot" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">4</div>
                    <h3 className="text-2xl font-bold text-gray-900">Pick Your Lot</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Select your homesite from available lots. Consider lot size, orientation, views, 
                      and proximity to amenities. The builder offers pool-sized lots perfect for 
                      outdoor living and detached casitas.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority lot selection and holds before public release, plus insider pricing information.</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div id="contract" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">5</div>
                    <h3 className="text-2xl font-bold text-gray-900">Sign Purchase Agreement</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Execute the purchase agreement and provide earnest money deposit (typically 5-10% of home price). 
                      Dr. Jan Duffy will review all terms and negotiate on your behalf to ensure your interests are protected.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Expert contract review and negotiation backed by premier builder relationships.</p>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div id="design" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">6</div>
                    <h3 className="text-2xl font-bold text-gray-900">Design Center Selection</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Visit the builder Design Center to select finishes, colors, and upgrades. 
                      Choose flooring, countertops, cabinets, lighting, and other design elements to personalize your home.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority Design Center appointments and access to exclusive upgrade packages.</p>
                    </div>
                  </div>
                </div>

                {/* Step 7 */}
                <div id="construction" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">7</div>
                    <h3 className="text-2xl font-bold text-gray-900">Construction Monitoring</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Monitor construction progress with regular updates from the builder. 
                      Dr. Jan Duffy will coordinate walk-throughs at key construction milestones 
                      to ensure everything meets your expectations.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Direct communication with construction managers and priority scheduling for walk-throughs.</p>
                    </div>
                  </div>
                </div>

                {/* Step 8 */}
                <div id="walkthrough" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">8</div>
                    <h3 className="text-2xl font-bold text-gray-900">Final Walkthrough</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Complete final walkthrough to inspect your new home and create a punch list of any items 
                      that need attention. The builder will address these items before closing.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority scheduling for final walkthrough and expedited punch list completion.</p>
                    </div>
                  </div>
                </div>

                {/* Step 9 */}
                <div id="closing" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">9</div>
                    <h3 className="text-2xl font-bold text-gray-900">Closing</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Sign final documents and receive keys to your new construction home! 
                      Dr. Jan Duffy will be there to ensure a smooth closing process and celebrate 
                      your new home purchase.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority closing scheduling and VIP treatment throughout the final process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Typical Timeline</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📅</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Pre-Construction</h3>
                  <p className="text-gray-700 mb-2">Steps 1-6</p>
                  <p className="text-sm text-gray-700">2-4 weeks</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Construction</h3>
                  <p className="text-gray-700 mb-2">Steps 7-8</p>
                  <p className="text-sm text-gray-700">4-6 months</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Closing</h3>
                  <p className="text-gray-700 mb-2">Step 9</p>
                  <p className="text-sm text-gray-700">1-2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/homebuying-process" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction home buying</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/floor-plans" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/faq" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">FAQ</h3>
                  <p className="text-gray-700">Common questions about new construction</p>
                </a>
                <a href="/properties" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Properties</h3>
                  <p className="text-gray-700">Browse available Homestead West homes</p>
                </a>
                <a href="/contact" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Ready to start your Homestead West new-construction journey?"
          body="Dr. Jan Duffy represents you—not the builder—from pre-approval through closing."
          source="buyers-guide"
        />
      </div>
    </>
  );
}
