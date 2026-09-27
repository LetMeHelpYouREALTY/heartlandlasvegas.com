import {
  ADDRESS,
  ADDRESS_LINE,
  BUSINESS_NAME,
  EMAIL,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_REVIEW_URL,
  OPENING_HOURS_TEXT,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '@/lib/site-contact'

/**
 * Visible NAP on every page — matches GBP name, address, phone, and hours.
 */
export default function GbpNapBar() {
  return (
    <div className="bg-[#0f2439] text-white text-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
        <p className="font-medium leading-snug">
          <span className="text-[#d4af37]">{BUSINESS_NAME}</span>
          {' · '}
          <a
            href={GOOGLE_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] underline-offset-2 hover:underline"
          >
            {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
          </a>
          {' · '}
          <a href={PHONE_TEL_HREF} className="font-semibold hover:text-[#d4af37]">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-gray-300 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{OPENING_HOURS_TEXT}</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-[#d4af37] break-all">
            {EMAIL}
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] font-semibold hover:text-[#f4d03f]"
          >
            Google Reviews
          </a>
        </p>
      </div>
      <span className="sr-only">{ADDRESS_LINE}</span>
    </div>
  )
}
