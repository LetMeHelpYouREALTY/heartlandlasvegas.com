import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import CtaBand from '@/components/CtaBand';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';
import { GOOGLE_REVIEW_URL, SITE_URL } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'Homestead West Buyer Stories | Dr. Jan Duffy | Northwest Las Vegas 89149',
  description: 'See how Dr. Jan Duffy represents Homestead West buyers—not the builder. Read Google reviews, then book a private tour at 5592 Dapple Gray Rd. Call (702) 299-6607.',
  ...canonicalMetadata('/testimonials'),
  keywords: [
    'Dr. Jan Duffy testimonials',
    'new construction reviews',
    'Homestead West testimonials',
    'Las Vegas real estate reviews',
    'new construction testimonials',
    'VIP New Construction Homes Specialist reviews',
    'client success stories'
  ],
  openGraph: {
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy',
    description: 'See how Dr. Jan Duffy represents Homestead West buyers—not the builder. Read Google reviews, then book a private tour at 5592 Dapple Gray Rd.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/testimonials',
    images: ogImages('private-tour'),
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Homestead West Buyer Stories',
    url: `${SITE_URL}/testimonials`,
    description: 'Buyer stories and Google reviews for Homestead West Las Vegas with Dr. Jan Duffy.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Homestead West | Homes by Dr Jan Duffy',
      url: SITE_URL,
      sameAs: [GOOGLE_REVIEW_URL],
    },
  };

  const testimonials = [
    {
      id: 1,
      name: 'Homestead West buyers',
      location: 'Northwest Las Vegas 89149',
      text: 'We wanted a corner lot before the public release. Dr. Jan registered us as represented buyers, walked the lot map with us, and kept the builder conversation on our timeline—not theirs.',
      homeType: 'Plan 3704 ranch',
    },
    {
      id: 2,
      name: 'Relocating buyers',
      location: 'Started with a video tour',
      text: 'We were not in Nevada yet. Dr. Jan sent plan walkthroughs, compared lot premiums, and met us at 5592 Dapple Gray Rd when we flew in.',
      homeType: 'Plan 3336 ranch',
    },
    {
      id: 3,
      name: 'Design-center shoppers',
      location: 'Homestead West',
      text: 'The sales office works for the builder. Dr. Jan sat on our side of the table for upgrades, closing costs, and what actually belonged in the contract.',
      homeType: 'Single-story with optional casita',
    },
    {
      id: 4,
      name: 'Repeat new-construction clients',
      location: 'Las Vegas Valley',
      text: 'We used Dr. Jan on a prior new build. Same process here: lot strategy first, then inventory, then a private tour—not a walk-in with no representation.',
      homeType: 'Northwest Las Vegas new construction',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Testimonials', url: 'https://www.homesteadwestlasvegas.com/testimonials' }
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
          imageId="private-tour"
          title="Homestead West Client Testimonials"
          subtitle={
            <>
              Real Success Stories
              <br />
              From VIP New Construction Homes Specialist
            </>
          }
          badge="Buyer stories"
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

        {/* Overall Rating */}
        <section className="py-16 bg-slate-50 border-2 border-[#d4af37]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Google reviews live on Maps</h2>
                <SectionImage
                  imageId="office-exterior-89149"
                  heading="Google reviews live on Maps"
                  caption="Homestead West office in Northwest Las Vegas 89149 — reviews belong on Google, not as invented star counts here"
                />
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-6">
                  Read and write reviews on the Google Business Profile. That is the rating Google Search and Maps use.
                </p>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#4285F4] px-6 py-3 font-semibold text-white hover:bg-[#3367D6]"
                >
                  View Google Reviews
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Buyer representation</h3>
                  <p className="text-gray-700">Dr. Jan works for you at Homestead West—not the builder sales team.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Lot and upgrade strategy</h3>
                  <p className="text-gray-700">Phase timing, lot premiums, and design-center choices before you sign.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Office at the community</h3>
                  <p className="text-gray-700">Tour from 5592 Dapple Gray Rd, Las Vegas NV 89149. Call (702) 299-6607.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-700 mb-2">{testimonial.location}</p>
                      <p className="text-sm text-[#1a365d] font-semibold">{testimonial.homeType}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What buyers hire Dr. Jan for</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">You</div>
                  <p className="text-gray-700 font-semibold">She represents the buyer, not the builder</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">3336 / 3704</div>
                  <p className="text-gray-700 font-semibold">Ranch plans from 3,336 to 3,704 sq ft</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">89149</div>
                  <p className="text-gray-700 font-semibold">Office at 5592 Dapple Gray Rd</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">Maps</div>
                  <p className="text-gray-700 font-semibold">Google reviews on the Business Profile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          heading="Tour Homestead West with your own agent"
          body="Call (702) 299-6607, get directions to 5592 Dapple Gray Rd, or leave a Google review. Then send Dr. Jan the plan you want to walk."
          source="testimonials"
        />

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/reviews" className="bg-amber-50 p-6 rounded-lg hover:bg-amber-100 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Leave a Google Review</h3>
                  <p className="text-gray-700">Help others find us — review us on Google (link + QR code)</p>
                </a>
                <a href="/about" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise as a VIP New Construction Homes Specialist</p>
                </a>
                <a href="/services" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Buying, selling, investment, and property management</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
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
      </div>
    </>
  );
}
