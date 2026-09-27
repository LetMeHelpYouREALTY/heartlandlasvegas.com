/**
 * Directions to Homestead West office.
 * Uses Google Maps directions (no API key) — links open in Maps with estimated travel time by mode.
 */

import { STORE_LOCATIONS, type StoreLocation } from './locations';

const OFFICE = STORE_LOCATIONS[0];
const DESTINATION_QUERY = OFFICE.mapQuery; // for URLs
const DESTINATION_DISPLAY = `${OFFICE.address.street}, ${OFFICE.address.locality}, ${OFFICE.address.region} ${OFFICE.address.postalCode}`;

export type PresetOrigin = {
  id: string;
  label: string;
  /** Query for Google Maps (e.g. "Harry Reid International Airport" or "Las Vegas, NV") */
  originQuery: string;
  /** Approximate drive time for display (optional) */
  approxDriveTime?: string;
  /** Short description */
  description?: string;
};

export const PRESET_ORIGINS: PresetOrigin[] = [
  {
    id: 'airport',
    label: 'From Harry Reid International Airport',
    originQuery: 'Harry Reid International Airport, Las Vegas, NV',
    approxDriveTime: '~25–30 min',
    description: 'Las Vegas airport to our office',
  },
  {
    id: 'downtown',
    label: 'From Downtown Las Vegas',
    originQuery: 'Downtown Las Vegas, NV',
    approxDriveTime: '~25–35 min',
    description: 'Fremont Street area to Northwest Las Vegas',
  },
  {
    id: 'henderson',
    label: 'From Henderson',
    originQuery: 'Henderson, NV',
    approxDriveTime: '~35–45 min',
    description: 'Henderson to Homestead West office',
  },
  {
    id: 'summerlin',
    label: 'From Summerlin',
    originQuery: 'Summerlin, Las Vegas, NV',
    approxDriveTime: '~15–20 min',
    description: 'Summerlin to Centennial Hills area',
  },
  {
    id: 'strip',
    label: 'From the Las Vegas Strip',
    originQuery: 'Las Vegas Strip, NV',
    approxDriveTime: '~25–35 min',
    description: 'Strip hotels to our office',
  },
  {
    id: 'red-rock',
    label: 'From Red Rock Canyon',
    originQuery: 'Red Rock Canyon National Conservation Area, Nevada',
    approxDriveTime: '~15–20 min',
    description: 'Red Rock to Homestead West',
  },
];

/** Google Maps directions URL (opens in Maps — no API key). Supports travel mode. */
export function directionsUrl(options: {
  origin?: string;
  destination?: string;
  travelmode?: 'driving' | 'walking' | 'bicycling' | 'transit';
}): string {
  const params = new URLSearchParams();
  params.set('api', '1');
  params.set('destination', options.destination ?? DESTINATION_QUERY.replace(/\+/g, ' '));
  if (options.origin) params.set('origin', options.origin);
  if (options.travelmode) params.set('travelmode', options.travelmode);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/** URL for directions from a preset origin to the office */
export function presetDirectionsUrl(origin: PresetOrigin, travelmode?: 'driving' | 'walking' | 'bicycling' | 'transit'): string {
  return directionsUrl({
    origin: origin.originQuery,
    destination: DESTINATION_QUERY.replace(/\+/g, ' '),
    travelmode: travelmode ?? 'driving',
  });
}

/** "Enter your address" — destination only; user sets origin in Maps */
export function directionsFromYourLocationUrl(travelmode?: 'driving' | 'walking' | 'bicycling' | 'transit'): string {
  return directionsUrl({ travelmode: travelmode ?? 'driving' });
}

/** Embed URL for directions (classic saddr/daddr — may show route in some browsers) */
export function directionsEmbedUrl(originQuery: string): string {
  const saddr = encodeURIComponent(originQuery);
  const daddr = encodeURIComponent(DESTINATION_QUERY.replace(/\+/g, ' '));
  return `https://www.google.com/maps?f=d&saddr=${saddr}&daddr=${daddr}&output=embed`;
}

export { OFFICE, DESTINATION_QUERY, DESTINATION_DISPLAY };
