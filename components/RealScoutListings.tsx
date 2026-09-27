'use client';

import React, { useEffect, useRef, useState } from 'react';
import MlsDisclaimer from '@/components/MlsDisclaimer';

export default function RealScoutListings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    let attempts = 0;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const loadWidget = () => {
      if (cancelled || !containerRef.current) return;
      if (customElements.get('realscout-office-listings')) {
        containerRef.current.innerHTML = '';

        const element = document.createElement('realscout-office-listings');
        element.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
        element.setAttribute('sort-order', 'PRICE_HIGH');
        element.setAttribute('listing-status', 'For Sale');
        element.setAttribute('property-types', ',SFR');
        element.setAttribute('price-min', '850000');
        element.setAttribute('price-max', '990000');

        containerRef.current.appendChild(element);
        return;
      }
      attempts += 1;
      if (attempts < 50) {
        timer = setTimeout(loadWidget, 100);
      }
    };

    loadWidget();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-[400px]" ref={containerRef}>
        {!isVisible && (
          <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg">
            <p className="text-gray-500">Loading listings...</p>
          </div>
        )}
      </div>
      <MlsDisclaimer />
    </div>
  );
}
