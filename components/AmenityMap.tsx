'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_EMBED_FALLBACK,
  COMMUNITY_NAME,
  DEFAULT_AMENITY_CATEGORY,
  MAP_CENTER,
  amenityMapEmbedUrl,
  directionsToPlaceUrl,
  getCategoryById,
  type AmenityCategoryId,
} from '@/lib/amenities';
import { VERIFIED_NEARBY_PLACES } from '@/lib/nearby-amenities-content';
import { loadGoogleMapsScript } from '@/lib/load-google-maps';

type MapPlace = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
  mapsUrl?: string;
};

export type AmenityMapProps = {
  /** compact = shorter map on interior pages */
  variant?: 'default' | 'compact';
  /** Initial filter chip */
  initialCategory?: AmenityCategoryId;
  className?: string;
};

const SEARCH_RADIUS_METERS = 8000;
const MAP_HEIGHT_DEFAULT = 'min-h-[420px] md:min-h-[480px]';
const MAP_HEIGHT_COMPACT = 'min-h-[320px] md:min-h-[380px]';

function latLngToNumbers(location: google.maps.LatLng | google.maps.LatLngLiteral): {
  lat: number;
  lng: number;
} {
  if (typeof (location as google.maps.LatLng).lat === 'function') {
    const ll = location as google.maps.LatLng;
    return { lat: ll.lat(), lng: ll.lng() };
  }
  const literal = location as google.maps.LatLngLiteral;
  return { lat: literal.lat, lng: literal.lng };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function infoWindowHtml(place: MapPlace): string {
  const rating =
    place.rating != null ? `<p style="margin:4px 0 0;font-size:13px;">Rating: ${place.rating.toFixed(1)}</p>` : '';
  const directions = directionsToPlaceUrl(place.lat, place.lng);
  return `<div style="max-width:240px;padding:4px 0;">
    <strong>${escapeHtml(place.name)}</strong>
    <p style="margin:4px 0 0;font-size:13px;color:#444;">${escapeHtml(place.address)}</p>
    ${rating}
    <p style="margin:8px 0 0;"><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a></p>
  </div>`;
}

export default function AmenityMap({
  variant = 'default',
  initialCategory = DEFAULT_AMENITY_CATEGORY,
  className = '',
}: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const mapRegionId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const observerStarted = useRef(false);

  const [category, setCategory] = useState<AmenityCategoryId>(initialCategory);
  const [inView, setInView] = useState(false);
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [places, setPlaces] = useState<MapPlace[]>([]);

  const heightClass = variant === 'compact' ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_DEFAULT;
  const activeCategory = getCategoryById(category);

  useEffect(() => {
    if (!containerRef.current || observerStarted.current) return;
    observerStarted.current = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((m) => m.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const renderMarkers = useCallback(
    (map: google.maps.Map, results: MapPlace[]) => {
      clearPlaceMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(MAP_CENTER);

      results.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          infoWindowRef.current?.setContent(infoWindowHtml(place));
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        placeMarkersRef.current.push(marker);
        bounds.extend({ lat: place.lat, lng: place.lng });
      });

      if (results.length > 0) {
        map.fitBounds(bounds, 48);
      } else {
        map.setCenter(MAP_CENTER);
      }
    },
    [clearPlaceMarkers],
  );

  const fetchPlaces = useCallback(
    async (map: google.maps.Map, catId: AmenityCategoryId) => {
      const cat = getCategoryById(catId);
      setLoading(true);
      const g = window.google;
      if (!g?.maps) {
        setLoading(false);
        return;
      }

      try {
        await g.maps.importLibrary('places');
        const PlaceCtor = g.maps.places.Place;
        if (PlaceCtor?.searchNearby) {
          const primaryType = cat.includedPrimaryTypes[0];
          const { places: nearby } = await PlaceCtor.searchNearby({
            fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
            locationRestriction: {
              center: MAP_CENTER,
              radius: SEARCH_RADIUS_METERS,
            },
            includedPrimaryTypes: [primaryType],
            maxResultCount: 12,
          });

          const mapped: MapPlace[] = (nearby ?? [])
            .filter((p) => p.location)
            .map((p, i) => {
              const { lat, lng } = latLngToNumbers(p.location!);
              return {
                id: `new-${catId}-${i}`,
                name: p.displayName ?? 'Place',
                address: p.formattedAddress ?? '',
                lat,
                lng,
                rating: p.rating ?? undefined,
                mapsUrl: p.googleMapsURI ?? undefined,
              };
            });

          setPlaces(mapped);
          renderMarkers(map, mapped);
          setLoading(false);
          return;
        }
      } catch {
        // Fall through to legacy nearbySearch
      }

      const service = new g.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: MAP_CENTER,
          radius: SEARCH_RADIUS_METERS,
          type: cat.legacyType,
        },
        (results, status) => {
          if (status !== g.maps.places.PlacesServiceStatus.OK || !results) {
            setPlaces([]);
            renderMarkers(map, []);
            setLoading(false);
            return;
          }
          const mapped: MapPlace[] = results
            .filter((r) => r.geometry?.location)
            .map((r, i) => ({
              id: r.place_id ?? `leg-${catId}-${i}`,
              name: r.name ?? 'Place',
              address: r.vicinity ?? r.formatted_address ?? '',
              lat: r.geometry!.location!.lat(),
              lng: r.geometry!.location!.lng(),
              rating: r.rating,
            }));
          setPlaces(mapped);
          renderMarkers(map, mapped);
          setLoading(false);
        },
      );
    },
    [renderMarkers],
  );

  const initMap = useCallback(async () => {
    if (!apiKey || !mapDivRef.current || mapRef.current) return;
    try {
      await loadGoogleMapsScript(apiKey);
      const map = new google.maps.Map(mapDivRef.current, {
        center: MAP_CENTER,
        zoom: 13,
        mapId: mapId || undefined,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });
      mapRef.current = map;

      communityMarkerRef.current = new google.maps.Marker({
        map,
        position: MAP_CENTER,
        title: COMMUNITY_NAME,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scaledSize: new google.maps.Size(42, 42),
        },
      });

      const communityInfo = new google.maps.InfoWindow({
        content: `<div style="padding:4px 0;"><strong>${escapeHtml(COMMUNITY_NAME)}</strong><p style="margin:4px 0 0;font-size:13px;">Homestead West — Northwest Las Vegas</p></div>`,
      });
      communityMarkerRef.current.addListener('click', () => {
        communityInfo.open({ map, anchor: communityMarkerRef.current! });
      });

      await fetchPlaces(map, category);
    } catch {
      setUseFallback(true);
      setLoadError(true);
    }
  }, [apiKey, mapId, category, fetchPlaces]);

  useEffect(() => {
    if (!inView || useFallback || mapRef.current) return;
    void initMap();
  }, [inView, useFallback, initMap]);

  useEffect(() => {
    if (!mapRef.current || useFallback) return;
    void fetchPlaces(mapRef.current, category);
  }, [category, fetchPlaces, useFallback]);

  const fallbackEmbed = amenityMapEmbedUrl(activeCategory.searchQuery);

  return (
    <div ref={containerRef} className={className}>
      <div
        role="tablist"
        aria-label="Amenity categories near Homestead West"
        className="mb-4 flex flex-wrap gap-2 justify-center"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === category;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${mapRegionId}-panel`}
              id={`${mapRegionId}-tab-${cat.id}`}
              onClick={() => setCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d] focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-[#1a365d] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <span aria-hidden className="mr-1">{cat.icon}</span>
              {cat.shortLabel}
            </button>
          );
        })}
      </div>

      <div
        id={`${mapRegionId}-panel`}
        role="tabpanel"
        aria-labelledby={`${mapRegionId}-tab-${category}`}
        className={`relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm ${heightClass}`}
      >
        {useFallback ? (
          <iframe
            title={`Map: ${activeCategory.label} near ${COMMUNITY_NAME}`}
            src={loadError ? COMMUNITY_MAP_EMBED_FALLBACK : fallbackEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <>
            <div ref={mapDivRef} className="absolute inset-0 h-full w-full" aria-label="Interactive Google Map of nearby amenities" />
            {!inView && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-sm text-gray-600">
                Map loads when you scroll here…
              </div>
            )}
            {loading && inView && (
              <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-white/90 px-3 py-1 text-xs text-gray-700 shadow">
                Loading places…
              </div>
            )}
          </>
        )}
      </div>

      {(useFallback || places.length === 0) && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Featured nearby places</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {VERIFIED_NEARBY_PLACES.map((place) => (
              <li key={place.name} className="rounded-lg border border-gray-200 bg-white p-4 text-sm">
                <p className="font-semibold text-gray-900">{place.name}</p>
                <p className="text-gray-600 mt-1">
                  {place.streetAddress}, {place.addressLocality}, {place.addressRegion} {place.postalCode}
                </p>
                {place.note && <p className="text-gray-500 mt-1">{place.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
