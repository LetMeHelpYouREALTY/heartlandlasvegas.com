import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SearchWidgetScript from '@/components/SearchWidgetScript';
import SectionImage from '@/components/SectionImage';
import LeadForm from '@/components/LeadForm';
import GbpActions from '@/components/GbpActions';
import NearbyAmenitiesSection from '@/components/NearbyAmenitiesSection';
import { LICENSE_ID, ADDRESS_LINE, PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site-contact';
import { ASSET_BHHS_LOGO_PATH, ASSET_HEADSHOT_PATH } from '@/lib/site-assets';
import { canonicalMetadata, absoluteUrl } from '@/lib/metadata';
import { ogImages } from '@/lib/og';
import { mediaAlt, mediaSrc } from '@/lib/media';

// Lazy load RealScoutListings to reduce initial bundle size
// Note: ssr: false removed for Server Component compatibility
const RealScoutListings = dynamic(() => import('@/components/RealScoutListings'), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="text-gray-600">Loading property listings...</div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K | New Construction Northwest Las Vegas',
  description: 'New construction luxury single-story ranch homes in Northwest Las Vegas from $910K. Pool-sized lots, optional casitas, VIP buyer representation. Dr. Jan Duffy represents YOU—not the builder. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada at 5592 Dapple Gray Rd, Las Vegas NV 89149. Call (702) 299-6607.',
  keywords: 'Homestead West Las Vegas, luxury ranch homes, single-story homes, Northwest Las Vegas, new construction, pool-sized lots, $910K homes, Las Vegas real estate, Berkshire Hathaway HomeServices, independent buyer agent, new construction homes Las Vegas, single story homes Las Vegas, luxury homes Northwest Las Vegas, new construction community Las Vegas, ranch homes Las Vegas, pool sized lots Las Vegas',
  ...canonicalMetadata('/'),
  openGraph: {
    title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K',
    description: 'Get VIP access to Northwest Las Vegas\'s newest luxury community. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada.',
    type: 'website',
    url: absoluteUrl('/'),
    siteName: 'Homestead West Las Vegas',
    images: ogImages('ranch-exterior-dusk'),
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K',
    description: 'Get VIP access to Northwest Las Vegas\'s newest luxury community. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada.',
    images: ogImages('ranch-exterior-dusk').map((img) => img.url),
  },
};

// ISR: Revalidate every hour for fresh content while maintaining performance
// RealScout listings load client-side, so this doesn't affect dynamic data
export const revalidate = 3600; // 1 hour

/** Homepage FAQ subset — visible copy + FAQPage JSON-LD must match. More answers on /faq. */
const homePageFaqs = [
  {
    question: 'Do I have to pay Dr. Jan to represent me?',
    answer:
      "No. The builder pays the buyer's agent commission. My services cost you nothing.",
  },
  {
    question: "Can't I just go directly to the builder's sales office?",
    answer:
      "You'll be working with someone whose job is to protect the builder's interests, not yours. Dr. Jan levels the playing field as your buyer's agent.",
  },
  {
    question: "I'm relocating from out of state. Can you help remotely?",
    answer:
      'Absolutely. Most clients start with a video call. Dr. Jan can send virtual tours, market reports, and handle everything until you are ready to visit in person.',
  },
] as const;

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homePageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // AEO: Speakable schema for voice assistants
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer-summary', '.key-facts', 'h2', 'h3']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Above the Fold */}
        <section className="relative min-h-[520px] bg-[#0f2439] text-white overflow-hidden">
          <Image
            src={mediaSrc('ranch-exterior-dusk')}
            alt={mediaAlt('ranch-exterior-dusk')}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2439]/80 via-[#1a365d]/70 to-[#0f2439]/55" />
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* VIP Badge */}
              <div className="mb-8">
                <div className="inline-block bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold text-lg mb-6 shadow-lg">
                  VIP Berkshire Hathaway HomeServices Buyer Program
                </div>
              </div>
              {/* LCP Element - Optimized for fast rendering (no blocking styles) */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-gray-200">
                Get VIP access to Northwest Las Vegas's newest luxury community. Dr. Jan Duffy represents YOU—not the builder.
              </p>
              {/* AEO: Clear answer pattern for "What is Homestead West?" */}
              <div className="text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
                <p className="mb-4">
                  <strong>What is Homestead West Las Vegas?</strong> Homestead West is a luxury single-story ranch home community in Northwest Las Vegas (89149) with homes ranging from 3,336 to 3,704 square feet, priced from $910,000. Located at W. Ann Road and N. Fort Apache Road, the community features pool-sized lots, optional detached casitas, and multi-generational floor plans. It's approximately 9 miles from Red Rock Canyon and serves the Centennial Hills area.
                </p>
                <p className="mb-4">
                  Tired of showing up to find the corner lot already sold? What if you could see new phases before anyone else? Work with an independent agent who has VIP access to new phases 48 hours before public release. Get the best lots, negotiate upgrades, and secure your dream home.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  <span className="text-2xl">🏢</span>
                  <span className="text-white">Berkshire Hathaway HomeServices Nevada</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  <span className="text-2xl">🏆</span>
                  <span className="text-white">Expert Buyer Representation & Negotiation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  <span className="text-2xl">📜</span>
                  <span className="text-white">Nevada License S.0197614.LLC</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <a 
                  href="/appointment"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Schedule Your Private Tour
                </a>
                <a 
                  href="#available-homes"
                  className="bg-[#d4af37] text-[#1a365d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c9a227] transition-all shadow-lg"
                >
                  View Available Homes
                </a>
                <a 
                  href={PHONE_TEL_HREF}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <GbpActions className="mt-6 justify-center" compact />
              <p className="mt-4 text-sm text-blue-100">{ADDRESS_LINE}</p>
            </div>
          </div>
        </section>

        {/* Available homes + MLS search — fold 2 (merged single discovery zone) */}
        <section id="available-homes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">How Much Do Homes Cost in Homestead West?</h2>
                <SectionImage
                  imageId="price-comparison-ranch"
                  heading="How Much Do Homes Cost in Homestead West?"
                  caption="Luxury ranch homes in Homestead West start at $910,000 in Northwest Las Vegas 89149"
                />
                <p className="text-xl text-gray-700 mb-4">
                  Homes in Homestead West start at $910,000 for single-story ranch designs ranging from 3,336 to 3,704 square feet. Prices vary based on lot premiums, floor plan selection, and design center upgrades.
                </p>
                <p className="text-lg text-gray-600 mb-8">Live MLS listings updated daily — Northwest Las Vegas, NV 89149</p>
              </div>

              <aside className="bg-white p-6 rounded-lg shadow-sm mb-8 max-w-4xl mx-auto key-facts" itemScope itemType="https://schema.org/ItemList">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Quick Facts</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li><strong>Location:</strong> Northwest Las Vegas, NV 89149 (W. Ann Road and N. Fort Apache Road)</li>
                  <li><strong>Price Range:</strong> Starting at $910,000</li>
                  <li><strong>Home Sizes:</strong> 3,336 - 3,704 square feet</li>
                  <li><strong>Configuration:</strong> 4 bedrooms, 4+ bathrooms</li>
                  <li><strong>Style:</strong> Single-story ranch homes</li>
                  <li><strong>Features:</strong> Pool-sized lots, optional detached casitas</li>
                  <li><strong>Nearby:</strong> Red Rock Canyon (9 miles), Mount Charleston (23 miles)</li>
                  <li><strong>Schools:</strong> Centennial Hills area schools</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <time dateTime="2026-01-19">Last verified: January 19, 2026</time>. Prices and availability subject to change. Contact Dr. Jan for current information.
                </p>
              </aside>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">$910K+</span>
                  <span className="text-sm">Starting Price</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">3,336–3,704</span>
                  <span className="text-sm">Sq Ft</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">4 Bed / 4+ Bath</span>
                  <span className="text-sm">Bed & Bath</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">89149</span>
                  <span className="text-sm">Zip Code</span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Browse MLS &amp; VIP inventory</h3>
                <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">Curated Homestead West listings — updated as inventory changes.</p>
                <RealScoutListings />
              </div>

              <div className="max-w-7xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Community map &amp; builder inventory (ShowingNew)</h3>
                <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">Explore the official community page for plans, availability, and community details.</p>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                    title="Homestead West — Live MLS and community listings"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    loading="lazy"
                    className="w-full border-0 block"
                  />
                </div>
              </div>

              <div id="search-homes" className="max-w-4xl mx-auto text-center pt-12 mt-8 border-t border-gray-200">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  Filter new construction across Northwest Las Vegas
                </h2>
                <SectionImage
                  imageId="listings-search-desk"
                  heading="Filter new construction across Northwest Las Vegas"
                  caption="Search Homestead West and Northwest Las Vegas new construction from a ranch kitchen"
                />
                <p className="text-gray-700 mb-8 text-lg">
                  Narrow by price, beds, baths, and square footage — opens results in a new tab.
                </p>

                <div className="flex justify-center">
                  <div id="widget-box" className="w-full max-w-2xl">
                    <form
                      action="https://www.showingnew.com/skyecanyon/home/redirecttoresultspage"
                      className="pro-search-box"
                      encType="multipart/form-data"
                      id="pro-search-box-widget"
                      method="post"
                      name="pro-search-box"
                      target="_blank"
                    >
                      <div id="home-search-form" className="clearfix home-search-form">
                        <p className="text-lg font-semibold text-gray-900 mb-2" id="titleText">Search New Construction Home Listings</p>
                        <fieldset id="widget-home-search-location" style={{ border: 0, padding: 0 }}>
                          <p id="HomesTypeField" className="flex m-0 homes-type-field">
                            <input
                              className="homes-type-field--input"
                              id="AllNew"
                              name="QuickMoveIn"
                              type="radio"
                              value="0"
                              defaultChecked
                            />
                            <label className="homes-type-field--label" htmlFor="AllNew">All New Homes</label>
                            <input
                              className="homes-type-field--input"
                              id="QMIOnly"
                              name="QuickMoveIn"
                              type="radio"
                              value="1"
                            />
                            <label className="homes-type-field--label" htmlFor="QMIOnly">Inventory Homes</label>
                            <a
                              className="homes-type-field--link"
                              href="https://www.showingnew.com/skyecanyon/new-homes-today"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <b>See What&apos;s New Today</b>
                              <svg
                                className="homes-type-field--link--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 492.004 492.004"
                                fill="#c9a227"
                              >
                                <path d="M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04s2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836a26.74 26.74 0 0 0 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"></path>
                              </svg>
                            </a>
                          </p>
                          <p className="flex ac search-field" style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor="SearchTextWidget"></label>
                            <input
                              autoComplete="off"
                              id="SearchTextWidget"
                              aria-label="SearchTextWidget"
                              maxLength={100}
                              name="SearchText"
                              placeholder="Enter City, Zip Code, School District or Community Name"
                              type="text"
                              defaultValue="Homestead West, Las Vegas, NV"
                              style={{ fontSize: '16px', flex: 1, padding: '14px 16px', borderRadius: '4px 0 0 4px', border: '1px solid #ccdbe4' }}
                            />
                            <input
                              type="submit"
                              className="btn HomeSearchBtn"
                              id="HomeSearchBtnWidget"
                              value="Find Homes"
                              style={{ backgroundColor: '#142d47', color: 'white', border: 'none', padding: '14px 20px', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontWeight: 600 }}
                            />
                          </p>
                        </fieldset>
                        <p
                          id="WidgetSearchValidationError"
                          className="field-validation-error SearchValidationError text-red-600 font-semibold mt-2"
                          style={{ display: 'none' }}
                        >
                          <strong>Oops!</strong> Please enter a valid location.
                        </p>
                        <div id="home-search-options" className="flex flex-wrap gap-2 mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
                          <select
                            aria-label="PriceLow"
                            id="PriceLow"
                            name="PriceLow"
                            style={{ flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333' }}
                          >
                            <option value="">Min Price</option>
                            <option value="500000">$500,000</option>
                            <option value="600000">$600,000</option>
                            <option value="700000">$700,000</option>
                            <option value="800000">$800,000</option>
                            <option value="850000">$850,000</option>
                            <option value="900000">$900,000</option>
                            <option value="950000">$950,000</option>
                            <option value="999000">$999,000</option>
                            <option value="1000000">$1,000,000</option>
                            <option value="1200000">$1,200,000</option>
                          </select>
                          <select
                            aria-label="PriceHigh"
                            id="PriceHigh"
                            name="PriceHigh"
                            style={{ flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333' }}
                          >
                            <option value="">Max Price</option>
                            <option value="850000">$850,000</option>
                            <option value="900000">$900,000</option>
                            <option value="950000">$950,000</option>
                            <option value="999000">$999,000</option>
                            <option value="1000000">$1,000,000</option>
                            <option value="1200000">$1,200,000</option>
                            <option value="1500000">$1,500,000</option>
                            <option value="2000000">$2,000,000</option>
                          </select>
                          <select
                            aria-label="BedRooms"
                            id="BedRooms"
                            name="BedRooms"
                            style={{ flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333' }}
                          >
                            <option value="-1">Beds</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                          </select>
                          <select
                            aria-label="Bathrooms"
                            id="Bathrooms"
                            name="Bathrooms"
                            style={{ flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333' }}
                          >
                            <option value="-1">Baths</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                          </select>
                          <select
                            aria-label="SqFtLow"
                            id="SqFtLow"
                            name="SqFtLow"
                            style={{ flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333' }}
                          >
                            <option value="0">Square Feet</option>
                            <option value="3000">3000+</option>
                            <option value="3500">3500+</option>
                            <option value="4000">4000+</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section - AEO: Question-based header */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Do You Need a Buyer's Agent for New Construction?
              </h2>
              <SectionImage
                imageId="buyer-consultation"
                heading="Do You Need a Buyer's Agent for New Construction?"
              />
              <p className="text-xl text-center mb-8 text-gray-700 font-semibold">
                While not required, a buyer's agent provides independent representation, negotiation leverage, and early access to lot releases. The builder typically pays the buyer's agent commission, so representation costs the buyer nothing additional.
              </p>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                The Builder's Sales Team Works for the Builder. Who's Working for You?
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  When you walk into a new construction sales office, the on-site agent has one job: sell you a home at the highest price with the fewest concessions. They're not going to:
                </p>
                <ul className="text-lg leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Tell you which lots have drainage issues</li>
                  <li>Show you comparable sales in competing communities</li>
                  <li>Negotiate upgrades or closing cost credits</li>
                  <li>Alert you when a better lot is about to release</li>
                </ul>
                <p className="text-lg leading-relaxed mb-6">
                  You show up on opening day. The corner lots are gone. The premium floor plans are sold out. You're left choosing from what's left.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You pay asking price. No negotiation. No leverage. The builder holds all the cards.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  That's where Dr. Jan comes in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution — teaser + deep links (full bio on /about) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl ring-2 ring-blue-600/20" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={ASSET_HEADSHOT_PATH}
                    alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 128px, 160px"
                    loading="lazy"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                Who is Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-center mb-6 text-gray-700 max-w-2xl mx-auto">
                VIP New Construction Homes Specialist with Berkshire Hathaway HomeServices Nevada (License {LICENSE_ID}). She represents home buyers—not the builder—in Homestead West and Northwest Las Vegas, with VIP access, negotiation support, and local market context.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-8 text-gray-700 text-sm max-w-2xl mx-auto">
                <li className="flex gap-2"><span className="text-[#1a365d] font-bold shrink-0">✓</span> Early phase &amp; lot release alerts</li>
                <li className="flex gap-2"><span className="text-[#1a365d] font-bold shrink-0">✓</span> Upgrades, closing costs &amp; lot premiums</li>
                <li className="flex gap-2"><span className="text-[#1a365d] font-bold shrink-0">✓</span> Compare vs. Skye Canyon, Summerlin &amp; more</li>
                <li className="flex gap-2"><span className="text-[#1a365d] font-bold shrink-0">✓</span> Builder-paid buyer agent commission</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/about"
                  className="inline-block border-2 border-[#1a365d] text-[#1a365d] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#1a365d] hover:text-white transition-colors"
                >
                  About Dr. Jan — full bio
                </Link>
                <a
                  href="/vip-buyer-program"
                  className="inline-block bg-[#1a365d] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                >
                  Join the VIP Buyer Program
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Berkshire Hathaway HomeServices Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Backed by a Name You Can Trust
              </h2>
              <SectionImage
                imageId="bhhs-office-interior"
                heading="Backed by a Name You Can Trust"
                caption="Buyer representation office overlooking ranch homes near 5592 Dapple Gray Rd, Las Vegas NV 89149"
              />
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy is proud to represent buyers through Berkshire Hathaway HomeServices Nevada—one of the most respected names in real estate.
              </p>
              
              {/* BHHS Logo */}
              <div className="flex justify-center mb-8">
                <Image 
                  src={ASSET_BHHS_LOGO_PATH} 
                  alt="Berkshire Hathaway HomeServices Nevada Properties" 
                  width={250}
                  height={80}
                  className="h-16 md:h-20 w-auto"
                  priority
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Global Network</h3>
                  <p className="text-gray-700 text-sm">
                    Part of the Berkshire Hathaway family of companies
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Local Expertise</h3>
                  <p className="text-gray-700 text-sm">
                    Deep knowledge of Northwest Las Vegas neighborhoods and new construction
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Buyer-First Philosophy</h3>
                  <p className="text-gray-700 text-sm">
                    Committed to integrity, trust, and exceptional service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof — teaser; full stories on /testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                What Buyers Say
              </h2>
              <SectionImage
                imageId="private-tour"
                heading="What Buyers Say"
                caption="Private tour of a Homestead West home in Northwest Las Vegas 89149"
              />

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
                <p className="text-lg text-gray-700 mb-4 italic">
                  &quot;A couple in the area wanted a corner lot in Homestead West. They called the VIP Berkshire Hathaway HomeServices Buyer Program two weeks before the public release. We registered them in the VIP program. They secured a corner position with mountain views—before anyone else saw it.&quot;
                </p>
                <p className="text-gray-900 font-semibold">— Homestead West Buyers</p>
                <p className="text-gray-700 text-sm">Final savings: $15,000 in negotiated upgrades including quartz countertops and covered patio extension</p>
              </div>

              <p className="text-center mb-8">
                <Link href="/testimonials" className="text-[#1a365d] font-semibold underline hover:text-[#d4af37]">
                  Read more client stories →
                </Link>
              </p>

              <div className="bg-[#1a365d] text-white p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Homestead West facts you can verify</h3>
                <p className="text-center text-blue-100 mb-6 text-sm">Single-story ranch inventory at 5592 Dapple Gray Rd, Las Vegas NV 89149</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">$910,990</p>
                    <p className="text-xs md:text-sm">Starting price for listed ranch plans</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">3,336–3,704</p>
                    <p className="text-xs md:text-sm">Square feet on Plans 3336 and 3704</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">89149</p>
                    <p className="text-xs md:text-sm">Northwest Las Vegas at Ann &amp; Fort Apache</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">(702) 299-6607</p>
                    <p className="text-xs md:text-sm">Call for a private tour — Sun 10–3, Mon–Fri 10–6, Sat 10–4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community — teaser (details on /community; quick facts above) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                The Community at a Glance
              </h2>
              <SectionImage
                imageId="sunset-mountain-views"
                heading="The Community at a Glance"
                caption="Covered patio and mountain views from Homestead West ranch homes in Las Vegas 89149"
              />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Single-story ranch homes from $910K+ on pool-sized lots in 89149—optional casitas, multi-generational plans, and quick access to Red Rock Canyon and Centennial Hills. Schools, amenities, and lifestyle are covered in the full guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/community"
                  className="inline-block bg-[#1a365d] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                >
                  Community guide — schools &amp; amenities
                </Link>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNTk3Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[#1a365d] text-[#1a365d] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                >
                  View available homes (MLS)
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Researching the wider{' '}
                <Link href="/la-madre-foothills" className="text-[#1a365d] font-semibold underline">
                  La Madre Foothills
                </Link>{' '}
                area or other Northwest Las Vegas zip codes? See our{' '}
                <Link href="/northwest-las-vegas-new-construction" className="text-[#1a365d] font-semibold underline">
                  Northwest Las Vegas new construction guide
                </Link>
                .
              </p>
              <a
                href="https://maps.app.goo.gl/rMPkPwK5Mz7Z2T5J7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1a365d] font-semibold text-sm underline hover:text-[#d4af37]"
              >
                <span aria-hidden>🗺️</span>
                Explore more things to do nearby
              </a>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection variant="compact" id="whats-nearby" />

        {/* Process — summary; full timeline on /homebuying-process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
                How It Works
              </h2>
              <SectionImage
                imageId="how-it-works"
                heading="How It Works"
                caption="Floor-plan review for Homestead West new construction in Northwest Las Vegas 89149"
              />
              <ol className="list-decimal pl-5 space-y-3 text-gray-700 mb-6">
                <li>Schedule a 15-minute call—goals, budget, and must-haves.</li>
                <li>Get VIP access to new phases, pricing, and inventory alerts.</li>
                <li>Tour with your advocate—not the builder&apos;s sales rep.</li>
                <li>Negotiate and close with Dr. Jan on your side through inspections and paperwork.</li>
              </ol>
              <p className="text-center mb-8">
                <Link href="/homebuying-process" className="text-[#1a365d] font-semibold underline hover:text-[#d4af37]">
                  Full homebuying timeline &amp; milestones →
                </Link>
              </p>
              <div className="text-center">
                <a
                  href="/appointment"
                  className="inline-block bg-[#1a365d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                >
                  Book Your 15-Minute Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — subset; complete list on /faq */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Frequently Asked Questions About Buying in Homestead West Las Vegas
              </h2>
              <SectionImage
                imageId="faq-buyer-desk"
                heading="Frequently Asked Questions About Buying in Homestead West Las Vegas"
                caption="Buyer questions and ranch floor plans for Homestead West Las Vegas"
              />

              <div className="space-y-6">
                {homePageFaqs.map((faq) => (
                  <div key={faq.question} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <p className="text-center mt-10">
                <Link href="/faq" className="text-[#1a365d] font-semibold underline hover:text-[#d4af37] text-lg">
                  More questions — pricing, negotiations &amp; communities →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#0f2439] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to See Homestead West Las Vegas?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto text-gray-200">
              Schedule a private tour with Dr. Jan Duffy—your independent advocate in the new construction process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Your Tour
              </a>
            </div>
            <div className="max-w-xl mx-auto text-left mb-10">
              <LeadForm source="homepage" heading="Tell Dr. Jan what you are looking for" />
            </div>
            <div className="space-y-2 text-gray-200">
              <p>Or call directly: <a href="tel:7022996607" className="text-yellow-400 hover:text-yellow-300 font-semibold">(702) 299-6607</a></p>
              <p>Email: <a href="mailto:DrJanSells@HomesteadWestLasVegas.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">DrJanSells@HomesteadWestLasVegas.com</a></p>
              <p>Homestead West Location: 5592 Dapple Gray Rd, Las Vegas, NV 89149</p>
            </div>
          </div>
        </section>

    </div>
    <SearchWidgetScript />
    </>
  );
}
