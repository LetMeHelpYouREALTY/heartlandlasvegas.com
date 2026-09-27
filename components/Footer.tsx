import CalendlyLink from '@/components/CalendlyLink';
import { ASSET_BHHS_LOGO_PATH } from '@/lib/site-assets';
import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  EMAIL,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_REVIEW_URL,
  LICENSE_ID,
  OPENING_HOURS_TEXT,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '@/lib/site-contact';

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{BUSINESS_NAME}</h3>
            <p className="mb-2">Berkshire Hathaway HomeServices Nevada</p>
            <p className="mb-2">Nevada License: {LICENSE_ID}</p>
            <p className="mb-2">
              <a href={PHONE_TEL_HREF} className="hover:text-yellow-400">{PHONE_DISPLAY}</a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="hover:text-yellow-400 break-all">{EMAIL}</a>
            </p>
            <p className="mt-3 text-sm text-gray-300">{OPENING_HOURS_TEXT}</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Map Location</h3>
            <p className="mb-2">{ADDRESS_LINE}</p>
            <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Homestead West Location - ${ADDRESS_LINE}`}
                className="w-full"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a href={PHONE_TEL_HREF} className="text-yellow-400 hover:text-yellow-300">Call</a>
              <a href={GOOGLE_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Directions</a>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">View Google Reviews</a>
              <a href="/location" className="text-yellow-400 hover:text-yellow-300">Find Our Office →</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="/#available-homes" className="hover:text-yellow-400 transition-colors">Browse Listings (Homestead West)</a></li>
              <li><a href="/#search-homes" className="hover:text-yellow-400 transition-colors">Search New Construction</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Dr. Jan</a></li>
              <li><a href="/services" className="hover:text-yellow-400 transition-colors">Real Estate Services</a></li>
              <li><a href="/floor-plans" className="hover:text-yellow-400 transition-colors">Available Homes</a></li>
              <li><a href="/community" className="hover:text-yellow-400 transition-colors">Community</a></li>
              <li><a href="/northwest-las-vegas-new-construction" className="hover:text-yellow-400 transition-colors">NW Las Vegas &amp; 89149</a></li>
              <li><a href="/la-madre-foothills" className="hover:text-yellow-400 transition-colors">La Madre Foothills area guide</a></li>
              <li><a href="/homestead-west-vs-skye-canyon" className="hover:text-yellow-400 transition-colors">Homestead West vs Skye Canyon</a></li>
              <li><a href="/homestead-west-vs-cadence" className="hover:text-yellow-400 transition-colors">Homestead West vs Cadence</a></li>
              <li><a href="/location" className="hover:text-yellow-400 transition-colors">Find Our Office</a></li>
              <li><a href="/directions" className="hover:text-yellow-400 transition-colors">Directions</a></li>
              <li><a href="/amenities" className="hover:text-yellow-400 transition-colors">Nearby Amenities</a></li>
              <li><a href="/vip-buyer-program" className="hover:text-yellow-400 transition-colors">VIP Buyer Program</a></li>
              <li><a href="/testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="/reviews" className="hover:text-yellow-400 transition-colors">Leave a Review</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
            {/* Calendly link widget */}
            <div className="mt-4">
              <CalendlyLink />
            </div>
          </div>
        </div>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <img 
            src={ASSET_BHHS_LOGO_PATH} 
            alt="Berkshire Hathaway HomeServices Nevada" 
            width={200}
            height={48}
            className="h-12 w-auto"
            loading="lazy"
          />
          <a
            href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors text-sm font-semibold px-4 py-2 border border-white rounded"
            aria-label="Equal Housing Opportunity"
          >
            Equal Housing Opportunity
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="mb-2">
            Homestead West | Homes by Dr Jan Duffy | Berkshire Hathaway HomeServices | License: {LICENSE_ID}
          </p>
          <p className="text-gray-400">
            © 2026 Homestead West | Homes by Dr Jan Duffy All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

