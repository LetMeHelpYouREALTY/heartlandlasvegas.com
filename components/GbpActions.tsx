import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_GBP_URL,
  GOOGLE_MAPS_PLACE_URL,
  GOOGLE_REVIEW_URL,
  OPENING_HOURS_TEXT,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '@/lib/site-contact'

type GbpActionsProps = {
  className?: string
  compact?: boolean
}

export default function GbpActions({ className = '', compact = false }: GbpActionsProps) {
  const btn = compact
    ? 'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold min-h-[44px] transition-colors'
    : 'inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold min-h-[44px] transition-colors shadow-sm'

  return (
    <nav
      aria-label="Google Business Profile actions"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      <a
        href={PHONE_TEL_HREF}
        className={`${btn} bg-green-600 text-white hover:bg-green-700`}
      >
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={GOOGLE_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} bg-blue-600 text-white hover:bg-blue-700`}
      >
        Directions
      </a>
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} bg-[#4285F4] text-white hover:bg-[#3367D6]`}
      >
        View Google Reviews
      </a>
      <a
        href={GOOGLE_MAPS_PLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} border border-white/70 bg-white/10 text-white hover:bg-white hover:text-[#1a365d]`}
      >
        Google Maps
      </a>
      <span className="sr-only">
        {BUSINESS_NAME}, {ADDRESS_LINE}. Hours: {OPENING_HOURS_TEXT}. Profile: {GOOGLE_GBP_URL}
      </span>
    </nav>
  )
}
