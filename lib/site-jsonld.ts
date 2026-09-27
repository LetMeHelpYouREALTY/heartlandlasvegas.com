import {
  ADDRESS,
  AGENT_JSONLD_DESCRIPTION,
  AGENT_NAME,
  BROKERAGE_NAME,
  BUSINESS_NAME,
  BUSINESS_SCHEMA_ID,
  EMAIL,
  GEO,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_GBP_URL,
  GOOGLE_MAPS_PLACE_URL,
  GOOGLE_REVIEW_URL,
  LICENSE_ID,
  PHONE_E164,
  SITE_URL,
} from '@/lib/site-contact'
import { bhhsLogoAbsoluteUrl, headshotAbsoluteUrl } from '@/lib/site-assets'
import { mediaAbsoluteUrl } from '@/lib/media'

const postalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.addressLocality,
  addressRegion: ADDRESS.addressRegion,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.addressCountry,
}

const geo = {
  '@type': 'GeoCoordinates' as const,
  latitude: GEO.latitude,
  longitude: GEO.longitude,
}

const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '20:00',
  },
]

/**
 * Site-wide JSON-LD for GBP / Maps. LocalBusiness on every page — not RealEstateListing.
 * No aggregateRating or invented review counts.
 */
export function getSiteGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${SITE_URL}/#agent`,
        name: AGENT_NAME,
        description: AGENT_JSONLD_DESCRIPTION,
        telephone: PHONE_E164,
        email: EMAIL,
        url: SITE_URL,
        image: [headshotAbsoluteUrl, mediaAbsoluteUrl('ranch-exterior-dusk')],
        priceRange: '$910,990-$940,990',
        address: postalAddress,
        areaServed: [
          {
            '@type': 'Place',
            name: 'Homestead West',
            geo,
            address: postalAddress,
          },
          {
            '@type': 'Place',
            name: 'Centennial Hills',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
          },
          { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        ],
        knowsAbout: [
          'New Construction Homes',
          'Northwest Las Vegas',
          'Homestead West',
          'Luxury Ranch Homes',
          '89149',
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'Ph.D. in Market Research & Consumer Behavior',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'license',
            name: `Nevada Real Estate License ${LICENSE_ID}`,
          },
        ],
        memberOf: {
          '@type': 'Organization',
          name: BROKERAGE_NAME,
        },
        worksFor: { '@id': BUSINESS_SCHEMA_ID },
      },
      {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_SCHEMA_ID,
        name: BUSINESS_NAME,
        alternateName: ['Homestead West Las Vegas', 'Dr. Jan Duffy Homestead West'],
        description:
          'Buying a new home in Homestead West Las Vegas? Work with a licensed agent who represents you, not the builder. Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada specializes in this single-story ranch community at Ann Road and Fort Apache, 89149. Services include early lot access, upgrade negotiations, and buyer representation through closing.',
        telephone: PHONE_E164,
        email: EMAIL,
        url: SITE_URL,
        image: [
          mediaAbsoluteUrl('office-exterior-89149'),
          mediaAbsoluteUrl('ranch-exterior-dusk'),
          mediaAbsoluteUrl('sales-office'),
          mediaAbsoluteUrl('community-streetscape'),
          headshotAbsoluteUrl,
        ],
        logo: bhhsLogoAbsoluteUrl,
        priceRange: '$910,990-$940,990',
        address: postalAddress,
        geo,
        hasMap: GOOGLE_MAPS_PLACE_URL,
        sameAs: [GOOGLE_GBP_URL, GOOGLE_REVIEW_URL, GOOGLE_MAPS_PLACE_URL, GOOGLE_DIRECTIONS_URL],
        areaServed: [
          {
            '@type': 'Place',
            name: 'Centennial Hills',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
          },
          { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        ],
        openingHoursSpecification,
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Has wheelchair accessible parking lot', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Has wheelchair accessible entrance', value: true },
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: `Nevada Real Estate License ${LICENSE_ID}`,
        },
        employee: { '@id': `${SITE_URL}/#agent` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS_NAME,
        url: SITE_URL,
        logo: bhhsLogoAbsoluteUrl,
        image: [headshotAbsoluteUrl, mediaAbsoluteUrl('ranch-exterior-dusk')],
        address: postalAddress,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E164,
          contactType: 'Customer Service',
          areaServed: ['US'],
          availableLanguage: ['English'],
        },
        sameAs: [GOOGLE_GBP_URL, GOOGLE_REVIEW_URL, GOOGLE_MAPS_PLACE_URL],
        memberOf: {
          '@type': 'Organization',
          name: BROKERAGE_NAME,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Homestead West Las Vegas',
        description: 'New construction luxury ranch homes in Northwest Las Vegas 89149 with buyer representation from Dr. Jan Duffy.',
        publisher: { '@id': BUSINESS_SCHEMA_ID },
        inLanguage: 'en-US',
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${SITE_URL}/#navigation`,
        name: 'Main Navigation',
        url: SITE_URL,
        hasPart: [
          { '@type': 'SiteNavigationElement', name: 'Home', url: SITE_URL },
          { '@type': 'SiteNavigationElement', name: 'Homestead West homes for sale', url: `${SITE_URL}/properties` },
          { '@type': 'SiteNavigationElement', name: 'Ranch floor plans 3336 and 3704', url: `${SITE_URL}/floor-plans` },
          { '@type': 'SiteNavigationElement', name: 'Homestead West community in 89149', url: `${SITE_URL}/community` },
          { '@type': 'SiteNavigationElement', name: 'Find our office at 5592 Dapple Gray Rd', url: `${SITE_URL}/location` },
          { '@type': 'SiteNavigationElement', name: 'VIP buyer program', url: `${SITE_URL}/vip-buyer-program` },
          { '@type': 'SiteNavigationElement', name: 'Google reviews', url: `${SITE_URL}/reviews` },
          { '@type': 'SiteNavigationElement', name: 'Contact Dr. Jan Duffy', url: `${SITE_URL}/contact` },
        ],
      },
    ],
  }
}

