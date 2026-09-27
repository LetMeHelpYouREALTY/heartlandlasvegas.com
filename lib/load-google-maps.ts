'use client';

const SCRIPT_ID = 'google-maps-js';

let loadPromise: Promise<typeof google> | null = null;

/**
 * Load Maps JavaScript API + Places library once per page session.
 */
export function loadGoogleMapsScript(apiKey: string): Promise<typeof google> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser'));
  }

  if (window.google?.maps) {
    return Promise.resolve(window.google);
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener('load', () => {
        if (window.google?.maps) resolve(window.google);
        else reject(new Error('Google Maps failed to initialize'));
      });
      existing.addEventListener('error', () => reject(new Error('Google Maps script error')));
      return;
    }

    window.__amenityMapsInit = () => {
      if (window.google?.maps) {
        resolve(window.google);
      } else {
        reject(new Error('Google Maps callback without maps namespace'));
      }
    };

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async&callback=__amenityMapsInit`;
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });

  return loadPromise;
}
