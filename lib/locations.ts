/**
 * Store/office locations for Homestead West Las Vegas.
 * Single source of truth for NAP, hours, and map embeds.
 * Add more locations here to show multiple pins on the Find Our Office map.
 */

export type StoreLocation = {
  id: string;
  name: string;
  slug: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  /** One-line address for map queries (e.g. "5592 Dapple Gray Rd, Las Vegas, NV 89149") */
  mapQuery: string;
  phone: string;
  email: string;
  /** Schema.org openingHours format, e.g. "Mo-Fr 09:00-18:00" */
  openingHours: string[];
  /** Optional: latitude/longitude for precise pin (fallback: map uses mapQuery) */
  geo?: { latitude: number; longitude: number };
  /** Short description for list view */
  description?: string;
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'las-vegas-office',
    name: 'Homestead West Las Vegas Office',
    slug: 'las-vegas-office',
    address: {
      street: '5592 Dapple Gray Rd',
      locality: 'Las Vegas',
      region: 'NV',
      postalCode: '89149',
      country: 'US',
    },
    mapQuery: '5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149',
    phone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    openingHours: ['Mo-Su 08:00-20:00'],
    geo: { latitude: 36.2738, longitude: -115.3089 },
    description: 'Real estate sales, property management, and investment consulting in Northwest Las Vegas.',
  },
];

/** Full address line for display (e.g. "5592 Dapple Gray Rd, Las Vegas, NV 89149") */
export function formatAddress(loc: StoreLocation): string {
  const { street, locality, region, postalCode } = loc.address;
  return `${street}, ${locality}, ${region} ${postalCode}`;
}

/** E.164 to display (e.g. "+17022996607" → "(702) 299-6607") */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

/** Google Maps embed URL showing all store locations (multiple q params joined by |). */
export function allLocationsMapEmbedUrl(): string {
  const queries = STORE_LOCATIONS.map((loc) => loc.mapQuery).join('|');
  return `https://www.google.com/maps?q=${queries}&output=embed`;
}

/** Simpler single-address embed; use when only one location (avoids encoding quirks). */
export function singleLocationEmbedUrl(mapQuery: string): string {
  return `https://www.google.com/maps?q=${mapQuery}&output=embed`;
}

/** Google Maps directions URL for a location */
export function directionsUrl(loc: StoreLocation): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.mapQuery.replace(/\+/g, ' '))}`;
}

/** Google Maps place URL (open in Maps) */
export function viewOnMapsUrl(loc: StoreLocation): string {
  return `https://maps.google.com/?q=${loc.mapQuery}`;
}
