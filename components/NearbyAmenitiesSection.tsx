'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { COMMUNITY_NAME } from '@/lib/nearby-amenities-content';
import { MAP_BASE_DISPLAY } from '@/lib/amenities';
import type { AmenityCategoryId } from '@/lib/amenities';

const AmenityMap = dynamic(() => import('@/components/AmenityMap'), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-[320px] md:min-h-[380px] w-full rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-600 text-sm"
      aria-hidden
    >
      Loading amenity map…
    </div>
  ),
});

export type NearbyAmenitiesSectionProps = {
  /** Homepage vs interior pages */
  variant?: 'default' | 'compact';
  heading?: string;
  subheading?: string;
  initialCategory?: AmenityCategoryId;
  showViewAllLink?: boolean;
  className?: string;
  id?: string;
};

export default function NearbyAmenitiesSection({
  variant = 'default',
  heading = `Life Near ${COMMUNITY_NAME}`,
  subheading = `Restaurants, parks, grocery, healthcare, and schools within a short drive of ${MAP_BASE_DISPLAY}.`,
  initialCategory,
  showViewAllLink = true,
  className = '',
  id = 'whats-nearby',
}: NearbyAmenitiesSectionProps) {
  return (
    <section id={id} className={`py-16 bg-gray-50 ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {heading}
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">{subheading}</p>
          {showViewAllLink && (
            <p className="mt-4">
              <Link
                href="/amenities"
                className="text-[#1a365d] font-semibold underline hover:text-[#d4af37]"
              >
                Open full Nearby Amenities guide →
              </Link>
            </p>
          )}
        </div>
        <div className="max-w-5xl mx-auto">
          <AmenityMap variant={variant} initialCategory={initialCategory} />
        </div>
      </div>
    </section>
  );
}
