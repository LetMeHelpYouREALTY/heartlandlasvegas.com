/**
 * Server-rendered copy, FAQs, and verified places for the Nearby Amenities experience.
 * Coordinates: lib/site-contact.ts GEO (5592 Dapple Gray Rd sales office / Homestead West map pin).
 */

import { ADDRESS, AGENT_SCHEMA_ID, GEO, SITE_URL } from '@/lib/site-contact';

export const COMMUNITY_NAME = 'Homestead West' as const;
export const COMMUNITY_CITY = 'Las Vegas' as const;
export const COMMUNITY_REGION = 'NV' as const;

export const MAP_CENTER = {
  lat: GEO.latitude,
  lng: GEO.longitude,
} as const;

export type VerifiedNearbyPlace = {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  schemaType:
    | 'Place'
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Supermarket'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'School'
    | 'SportsActivityLocation';
  categoryId: string;
  note?: string;
};

/** Places named elsewhere on this site with street addresses — used for fallback list + ItemList JSON-LD. */
export const VERIFIED_NEARBY_PLACES: VerifiedNearbyPlace[] = [
  {
    name: 'Homestead West (Century Communities sales area)',
    streetAddress: ADDRESS.streetAddress,
    addressLocality: ADDRESS.addressLocality,
    addressRegion: ADDRESS.addressRegion,
    postalCode: ADDRESS.postalCode,
    schemaType: 'Place',
    categoryId: 'community',
    note: 'New construction luxury ranch homes at W. Ann Rd & N. Fort Apache Rd.',
  },
  {
    name: 'Centennial Hills Hospital',
    streetAddress: '6900 N Durango Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Hospital',
    categoryId: 'healthcare',
  },
  {
    name: 'Northwest Medical Center',
    streetAddress: '8402 W Centennial Pkwy',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Hospital',
    categoryId: 'healthcare',
    note: 'Urgent care and primary care in the Centennial Hills corridor.',
  },
  {
    name: 'Dean LaMar Allen Elementary School',
    streetAddress: '8680 W Hammer Ln',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'School',
    categoryId: 'schools',
    note: 'Confirm current CCSD zoning for your lot before you buy.',
  },
  {
    name: 'Floyd Lamb Park at Tule Springs',
    streetAddress: '9200 Tule Springs Rd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89134',
    schemaType: 'Park',
    categoryId: 'parks',
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    streetAddress: '10091 Scenic Dr',
    addressLocality: 'Blue Diamond',
    addressRegion: 'NV',
    postalCode: '89005',
    schemaType: 'Park',
    categoryId: 'parks',
    note: 'Visitor center; the site markets Homestead West as about 9 miles from Red Rock Canyon.',
  },
];

export const AMENITIES_FAQS = [
  {
    question: 'What grocery stores are near Homestead West?',
    answer:
      'Centennial Hills and Northwest Las Vegas corridors include major grocers such as Target, Walmart Supercenter, Albertsons, and Trader Joe\'s within a few miles of the 89149 map pin at 5592 Dapple Gray Rd—drive times vary by route and time of day.',
  },
  {
    question: 'How far is Homestead West from the Las Vegas Strip?',
    answer:
      'From the Homestead West / Centennial Hills area, the Strip is typically an approximate 25–35 minute drive depending on traffic and your starting cross-street; use Google Maps for a live estimate from your address.',
  },
  {
    question: 'Are there hospitals near Homestead West?',
    answer:
      'Yes. Centennial Hills Hospital at 6900 N Durango Dr and Northwest Medical Center at 8402 W Centennial Pkwy serve the Northwest Las Vegas area near Homestead West.',
  },
  {
    question: 'What schools serve Homestead West in 89149?',
    answer:
      'Homestead West buyers often research Dean LaMar Allen Elementary, Justice Myron E. Leavitt Middle School, and Centennial High School; always confirm assigned schools for your specific address with Clark County School District before you write an offer.',
  },
  {
    question: 'How long is the drive from Homestead West to Harry Reid International Airport?',
    answer:
      'Airport drives from Northwest Las Vegas are commonly in the approximate 25–30 minute range in typical traffic; check Google Maps before you travel.',
  },
  {
    question: 'Is there golf near Homestead West?',
    answer:
      'Northwest Las Vegas and the Centennial Hills area include several public and resort golf options within a short drive; use the amenity map filters or Google Maps to compare courses near your lot.',
  },
  {
    question: 'Where can I see parks and trails near Homestead West?',
    answer:
      'Floyd Lamb Park at Tule Springs and Red Rock Canyon National Conservation Area are well-known outdoor destinations northwest of the Strip; Centennial Hills neighborhood parks are also within the local retail corridor.',
  },
  {
    question: 'Who represents buyers at Homestead West?',
    answer:
      'Dr. Jan Duffy (Nevada license S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties represents home buyers—not the builder—at Homestead West; call (702) 299-6607 for a buyer consultation.',
  },
] as const;

export type AmenityGuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const AMENITY_GUIDE_SECTIONS: AmenityGuideSection[] = [
  {
    id: 'dining',
    title: 'Dining near Homestead West',
    paragraphs: [
      'Northwest Las Vegas dining clusters along Centennial Parkway, Buffalo Drive, and the Deer Springs / Skye Canyon retail corridors. Local favorites mentioned on this site include Rachel\'s Kitchen, Egg Works, My Garage Restaurant, and Wahoo\'s Fish Taco—all a short drive from the 89149 sales office pin.',
      'Use the interactive map above to compare restaurants and cafes near your future lot; weekend traffic on Ann Road and US-95 can add a few minutes to dinner runs toward Summerlin or the Strip.',
    ],
  },
  {
    id: 'parks',
    title: 'Parks & outdoor recreation',
    paragraphs: [
      'Homestead West buyers often plan around Red Rock Canyon National Conservation Area (visitor center at 10091 Scenic Dr, Blue Diamond) for hiking and scenic drives, and Floyd Lamb Park at Tule Springs (9200 Tule Springs Rd) for picnics and open space closer to town.',
      'Neighborhood parks and trails throughout Centennial Hills complement pool-sized lots at Homestead West for everyday outdoor living.',
    ],
  },
  {
    id: 'golf',
    title: 'Golf',
    paragraphs: [
      'Northwest Las Vegas sits between mountain recreation and established golf corridors toward Summerlin and the west valley. Filter the map for golf courses to compare tee times and driving range options near your commute pattern.',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & pharmacies',
    paragraphs: [
      'Centennial Hills Hospital (6900 N Durango Dr) provides full-service emergency and inpatient care for the northwest valley. Northwest Medical Center on Centennial Parkway offers urgent care and primary care closer to daily errands.',
      'Retail pharmacies are available at nearby grocery anchors; confirm in-network providers with your insurance when you relocate.',
    ],
  },
  {
    id: 'shopping',
    title: 'Grocery & shopping',
    paragraphs: [
      'Everyday shopping for Homestead West runs through Centennial Hills retail: Target, Walmart Supercenter, Albertsons, and Trader Joe\'s are commonly within a few miles of the community. Deer Springs Town Center and Skye Canyon Marketplace add specialty retail as the northwest valley grows.',
    ],
  },
  {
    id: 'schools',
    title: 'Schools (verify zoning)',
    paragraphs: [
      'Clark County School District assigns schools by address. Dean LaMar Allen Elementary (8680 W Hammer Ln) is the named elementary campus on this site for the 89149 corridor; middle and high school assignments should be confirmed with CCSD before you select a lot.',
      'Magnet options such as Northwest Career & Technical Academy require a separate application through the district.',
    ],
  },
  {
    id: 'commute',
    title: 'Commute & regional access',
    paragraphs: [
      'Homestead West sits near W. Ann Road and N. Fort Apache Road with access to US-95 and CC-215—common routes for Strip, airport, and Summerlin commutes. Approximate drive times from this site\'s directions page: Summerlin 15–20 minutes, Red Rock Canyon 15–20 minutes, Harry Reid International Airport 25–30 minutes, Las Vegas Strip 25–35 minutes (traffic dependent).',
      'Downtown Summerlin and Downtown Las Vegas times vary by departure hour; map your typical work schedule before you choose a lot orientation.',
    ],
  },
];

export function amenitiesFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AMENITIES_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function verifiedPlacesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${COMMUNITY_NAME}`,
    numberOfItems: VERIFIED_NEARBY_PLACES.length,
    itemListElement: VERIFIED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
      },
    })),
  };
}

export function communityPlaceNode() {
  return {
    '@type': 'Place',
    name: COMMUNITY_NAME,
    description:
      'Luxury single-story ranch home community in Northwest Las Vegas at W. Ann Rd & N. Fort Apache Rd.',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MAP_CENTER.lat,
      longitude: MAP_CENTER.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: 'US',
    },
  };
}

export function communityPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    ...communityPlaceNode(),
  };
}

/** Extends the site-wide RealEstateAgent with Homestead West as areaServed (by reference). */
export function agentAreaServedFragment() {
  return {
    '@type': 'RealEstateAgent',
    '@id': AGENT_SCHEMA_ID,
    areaServed: {
      '@type': 'Place',
      name: COMMUNITY_NAME,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: MAP_CENTER.lat,
        longitude: MAP_CENTER.lng,
      },
      containedInPlace: {
        '@type': 'City',
        name: COMMUNITY_CITY,
        containedInPlace: { '@type': 'State', name: 'Nevada' },
      },
    },
    url: SITE_URL,
  };
}
