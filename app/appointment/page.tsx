import { Metadata } from 'next';
import Script from 'next/script';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import LeadForm from '@/components/LeadForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';
import { canonicalMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Schedule Appointment | Dr. Jan Duffy Real Estate | Las Vegas',
  description: 'Schedule a consultation with Dr. Jan Duffy (License S.0197614.LLC) for expert real estate services in Las Vegas. Book your appointment online today.',
  ...canonicalMetadata('/appointment'),
  keywords: 'schedule appointment, Dr. Jan Duffy, real estate consultation, Las Vegas real estate, book meeting',
  openGraph: {
    title: 'Schedule Appointment | Dr. Jan Duffy Real Estate',
    description: 'Schedule a consultation with Dr. Jan Duffy for expert real estate services in Las Vegas.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/appointment',
    images: ogImages('appointment-consultation'),
  },
};

export default function AppointmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScheduleAction',
    name: 'Real Estate Consultation Appointment',
    description: 'Schedule a consultation with Dr. Jan Duffy for real estate services',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614.LLC'
    },
    object: {
      '@type': 'Event',
      name: 'Real Estate Consultation',
      description: 'One-on-one consultation for real estate services'
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Appointment', url: 'https://www.homesteadwestlasvegas.com/appointment' }
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
          imageId="appointment-consultation"
          title="Schedule Your Homestead West Appointment"
          subtitle="Book a consultation with Dr. Jan Duffy for Homestead West"
        />

        {/* Appointment Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Book Your Homestead West Consultation</h2>
                <SectionImage
                  imageId="appointment-consultation"
                  heading="Book Your Homestead West Consultation"
                  caption="Floor plans and keys ready for a Homestead West appointment in Las Vegas 89149"
                />
                <p className="text-lg mb-8">
                  Schedule a personalized Homestead West consultation with Dr. Jan Duffy to discuss your Homestead West real estate needs. 
                  We offer flexible scheduling to accommodate your busy lifestyle for Homestead West buyers.
                </p>
                <LeadForm source="appointment-page" heading="Or send a quick inquiry" submitLabel="Request a callback" />
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Initial Homestead West Consultation</h3>
                      <p>No obligation, expert advice on your Homestead West real estate goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Homestead West Scheduling</h3>
                      <p>Available evenings and weekends by appointment for Homestead West</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Multiple Homestead West Options</h3>
                      <p>In-person, phone, or video consultations available for Homestead West</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                {/* Calendly inline widget begin */}
                <div className="calendly-inline-widget" data-url="https://calendly.com/drjanduffy" style={{minWidth:'320px',height:'700px'}}></div>
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                {/* Calendly inline widget end */}
              </div>
            </div>
          </div>
        </section>

        {/* MLS listings — after booking (secondary engagement) */}
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

        {/* Related Pages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/vip-buyer-program" className="bg-white p-6 rounded-lg hover:bg-yellow-50 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Learn about exclusive access to new construction homes</p>
                </a>
                <a href="/services" className="bg-white p-6 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Buying, selling, investment, and property management</p>
                </a>
                <a href="/homebuying-process" className="bg-white p-6 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/about" className="bg-white p-6 rounded-lg hover:bg-purple-50 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise</p>
                </a>
                <a href="/testimonials" className="bg-white p-6 rounded-lg hover:bg-indigo-50 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Testimonials</h3>
                  <p className="text-gray-700">Read what clients say about working with Dr. Jan</p>
                </a>
                <a href="/contact" className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Schedule with Dr. Jan */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Why Schedule Your Homestead West Consultation with Dr. Jan Duffy?</h2>
              <SectionImage
                imageId="appointment-consultation"
                heading="Why Schedule Your Homestead West Consultation with Dr. Jan Duffy?"
                caption="Appointment desk with Homestead West ranch floor plans at 5592 Dapple Gray Rd, Las Vegas 89149"
              />
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West VIP Access</h3>
                  <p className="text-gray-700 mb-4">
                    Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, provides exclusive access to Homestead West new construction homes, 
                    priority lot selection, and insider information about upcoming phases. When you schedule a consultation 
                    with Dr. Jan, you're not just getting a real estate agent—you're gaining access to a network of builder 
                    relationships that can give you the edge in securing your dream Homestead West home.
                  </p>
                  <p className="text-gray-700">
                    Homestead West buyers working with Dr. Jan Duffy benefit from early notification of new releases, 
                    preferred pricing opportunities, and streamlined processes that save time and money. The Homestead West 
                    VIP program ensures that your consultation includes detailed information about available lots, floor plans, 
                    and customization options that may not be publicly available.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Market Expertise</h3>
                  <p className="text-gray-700 mb-4">
                    With years of experience in the Las Vegas real estate market, Dr. Jan Duffy brings unparalleled knowledge 
                    of Homestead West and surrounding Northwest Las Vegas communities. Your Homestead West consultation will 
                    include comprehensive market analysis, pricing insights, and neighborhood information that helps you make 
                    informed decisions about your Homestead West investment.
                  </p>
                  <p className="text-gray-700">
                    Understanding the Homestead West market dynamics, appreciation potential, and community development plans 
                    is crucial for making the right real estate decision. Dr. Jan Duffy's Homestead West consultations provide 
                    detailed information about property values, comparable sales, and future growth projections that help you 
                    understand the long-term value of your Homestead West home purchase.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Personalized Service</h3>
                <p className="text-gray-700 mb-4">
                  Every Homestead West buyer has unique needs, preferences, and goals. Dr. Jan Duffy's consultation process 
                  is designed to understand your specific situation and provide tailored guidance for your Homestead West home 
                  search. Whether you're a first-time buyer, upgrading to a larger Homestead West home, or investing in Las Vegas 
                  real estate, your consultation will address your individual circumstances.
                </p>
                <p className="text-gray-700">
                  The Homestead West consultation includes a thorough discussion of your budget, timeline, must-have features, 
                  and lifestyle preferences. This personalized approach ensures that every Homestead West recommendation aligns 
                  with your goals, whether you're looking for a single-story ranch home, a property with a casita, or a 
                  multi-generational layout at Homestead West. Dr. Jan Duffy takes the time to understand what makes Homestead 
                  West the right choice for your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">What to Expect During Your Homestead West Consultation</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Initial Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    Your Homestead West consultation begins with a comprehensive assessment of your real estate needs, financial 
                    situation, and timeline. Dr. Jan Duffy will discuss your Homestead West goals, preferred locations within 
                    the community, and any specific requirements you have for your new Homestead West home. This initial assessment 
                    helps create a customized Homestead West search strategy that maximizes your chances of finding the perfect property.
                  </p>
                  <p className="text-gray-700">
                    During the Homestead West assessment, you'll learn about available floor plans, lot sizes, and community 
                    amenities that match your lifestyle. Dr. Jan Duffy will explain the Homestead West new construction process, 
                    from lot selection to closing, ensuring you understand every step of your Homestead West homebuying journey. 
                    This foundation sets the stage for a successful Homestead West purchase experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Property Search Strategy</h3>
                  <p className="text-gray-700 mb-4">
                    Based on your Homestead West consultation, Dr. Jan Duffy will develop a targeted search strategy that 
                    focuses on properties matching your criteria. This Homestead West strategy includes setting up automated 
                    alerts for new listings, scheduling property viewings, and coordinating with builders to access pre-market 
                    Homestead West opportunities that aren't yet available to the general public.
                  </p>
                  <p className="text-gray-700">
                    Your Homestead West search strategy will be continuously refined as you view properties and provide feedback. 
                    Dr. Jan Duffy's VIP access means you'll be among the first to know about new Homestead West releases, price 
                    reductions, and special incentives. This proactive approach to your Homestead West search ensures you don't 
                    miss opportunities and can make timely decisions when the right Homestead West property becomes available.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Negotiation and Closing Support</h3>
                  <p className="text-gray-700 mb-4">
                    Once you've identified your ideal Homestead West property, Dr. Jan Duffy's expertise in negotiation and 
                    transaction management becomes invaluable. Your Homestead West consultation includes guidance on making 
                    competitive offers, understanding builder contracts, and navigating the closing process. Dr. Jan Duffy's 
                    builder relationships often result in better terms and smoother transactions for Homestead West buyers.
                  </p>
                  <p className="text-gray-700">
                    Throughout your Homestead West purchase, Dr. Jan Duffy provides ongoing support, answering questions, 
                    coordinating inspections, and ensuring all deadlines are met. The Homestead West consultation is just the 
                    beginning of a comprehensive service that extends through closing and beyond. Many Homestead West clients 
                    continue to work with Dr. Jan Duffy for future real estate needs, benefiting from her ongoing market 
                    knowledge and Homestead West expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prefer to Call for Homestead West?</h2>
            <p className="text-lg mb-8">You can also reach us directly for immediate Homestead West assistance</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+17022996607"
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">📞</span>
                (702) 299-6607
              </a>
              <a
                href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span className="mr-2">✉️</span>
                DrJanSells@HomesteadWestLasVegas.com
              </a>
            </div>
            <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
              For Homestead West inquiries, VIP program information, or to schedule an immediate Homestead West consultation, 
              don't hesitate to call or email. Dr. Jan Duffy is available to discuss your Homestead West real estate needs 
              and answer any questions about the Homestead West community, available properties, or the VIP buyer program.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
