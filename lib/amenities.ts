/**
 * Nearby amenity categories for the interactive Amenity Map.
 * Center: Homestead West sales pin (5592 Dapple Gray Rd) — see lib/site-contact.ts GEO.
 */

import type { SiteImageId } from '@/lib/image-catalog';
import { GEO } from '@/lib/site-contact';
import { COMMUNITY_NAME, MAP_CENTER } from '@/lib/nearby-amenities-content';

const MAP_BASE = '5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149';
export const MAP_BASE_DISPLAY = '5592 Dapple Gray Rd, Las Vegas, NV 89149';

export { MAP_CENTER, COMMUNITY_NAME };

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  shortLabel: string;
  /** Query for keyless embed fallback */
  searchQuery: string;
  description: string;
  icon?: string;
  imageId: SiteImageId;
  /** Places API (New) primary types — first type used for nearby search */
  includedPrimaryTypes: string[];
  /** Legacy PlacesService `type` when New API unavailable */
  legacyType?: string;
};

/** Default chip order for family / new-construction ranch communities in Northwest Las Vegas. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    shortLabel: 'Restaurants',
    searchQuery: `restaurants+near+${MAP_BASE}`,
    description: 'Restaurants and casual dining near Homestead West and Centennial Hills.',
    icon: '🍽️',
    imageId: 'dining-patio-89149',
    includedPrimaryTypes: ['restaurant'],
    legacyType: 'restaurant',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    shortLabel: 'Cafes',
    searchQuery: `cafes+near+${MAP_BASE}`,
    description: 'Coffee shops and cafes along Centennial Hills retail corridors.',
    icon: '☕',
    imageId: 'dining-patio-89149',
    includedPrimaryTypes: ['cafe'],
    legacyType: 'cafe',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    shortLabel: 'Grocery',
    searchQuery: `grocery+stores+near+${MAP_BASE}`,
    description: 'Supermarkets and grocery stores serving the 89149 area.',
    icon: '🛒',
    imageId: 'grocery-center-89149',
    includedPrimaryTypes: ['grocery_store', 'supermarket'],
    legacyType: 'grocery_or_supermarket',
  },
  {
    id: 'parks',
    label: 'Parks',
    shortLabel: 'Parks',
    searchQuery: `parks+near+${MAP_BASE}`,
    description: 'Parks, trails, and open space near Northwest Las Vegas.',
    icon: '🌳',
    imageId: 'local-park-89149',
    includedPrimaryTypes: ['park'],
    legacyType: 'park',
  },
  {
    id: 'golf',
    label: 'Golf',
    shortLabel: 'Golf',
    searchQuery: `golf+courses+near+${MAP_BASE}`,
    description: 'Public and resort golf within driving distance of Homestead West.',
    icon: '⛳',
    imageId: 'local-park-89149',
    includedPrimaryTypes: ['golf_course'],
    legacyType: 'golf_course',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    shortLabel: 'Healthcare',
    searchQuery: `hospitals+near+${MAP_BASE}`,
    description: 'Hospitals, medical campuses, and clinics near Centennial Hills.',
    icon: '🏥',
    imageId: 'medical-campus',
    includedPrimaryTypes: ['hospital', 'doctor'],
    legacyType: 'hospital',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    shortLabel: 'Pharmacies',
    searchQuery: `pharmacies+near+${MAP_BASE}`,
    description: 'Pharmacies at grocery anchors and retail centers nearby.',
    icon: '💊',
    imageId: 'medical-campus',
    includedPrimaryTypes: ['pharmacy'],
    legacyType: 'pharmacy',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    shortLabel: 'Shopping',
    searchQuery: `shopping+centers+near+${MAP_BASE}`,
    description: 'Shopping centers and retail near Deer Springs and Centennial Hills.',
    icon: '🛍️',
    imageId: 'grocery-center-89149',
    includedPrimaryTypes: ['shopping_mall', 'department_store'],
    legacyType: 'shopping_mall',
  },
  {
    id: 'parking',
    label: 'Parking',
    shortLabel: 'Parking',
    searchQuery: `parking+near+${MAP_BASE}`,
    description: 'Parking lots near retail and the Homestead West sales corridor.',
    icon: '🅿️',
    imageId: 'parking-retail-89149',
    includedPrimaryTypes: ['parking'],
    legacyType: 'parking',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    shortLabel: 'Fitness',
    searchQuery: `gyms+near+${MAP_BASE}`,
    description: 'Gyms and fitness studios in Northwest Las Vegas.',
    icon: '🏋️',
    imageId: 'local-park-89149',
    includedPrimaryTypes: ['gym'],
    legacyType: 'gym',
  },
  {
    id: 'schools',
    label: 'Schools',
    shortLabel: 'Schools',
    searchQuery: `schools+near+${MAP_BASE}`,
    description: 'CCSD schools near Homestead West — confirm zoning for your address.',
    icon: '🏫',
    imageId: 'school-campus-89149',
    includedPrimaryTypes: ['school'],
    legacyType: 'school',
  },
];

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = 'restaurants';

export const COMMUNITY_MAP_EMBED_FALLBACK = `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=14&output=embed`;

/** Google Maps embed URL for a place-type search (no API key). */
export function amenityMapEmbedUrl(searchQuery: string): string {
  return `https://www.google.com/maps?q=${searchQuery}&output=embed`;
}

/** Google Maps search URL (opens in Maps). */
export function amenityMapsLink(searchQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery.replace(/\+/g, ' '))}`;
}

export function directionsToPlaceUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const cat = AMENITY_CATEGORIES.find((c) => c.id === id);
  if (!cat) {
    return AMENITY_CATEGORIES[0];
  }
  return cat;
}
