'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from '@/components/ui/Dropdown';
import { MobileMenu } from '@/components/MobileMenu';
import CalendlyLink from '@/components/CalendlyLink';
import { cn } from '@/lib/utils';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site-contact';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const communityItems = [
    { href: '/community', label: 'Community Guide' },
    { href: '/northwest-las-vegas-new-construction', label: 'NW Las Vegas & 89149' },
    { href: '/la-madre-foothills', label: 'La Madre Foothills' },
    { href: '/community-map', label: 'Community Map' },
    { href: '/amenities', label: 'Nearby Amenities' },
    { href: '/directions', label: 'Directions' },
    { href: '/virtual-tour', label: 'Virtual Tour' },
    { href: '/location', label: 'Find Our Office' },
    { href: '/location/las-vegas-office', label: 'Las Vegas Office' },
  ];

  const servicesItems = [
    { href: '/services', label: 'All Services' },
    { href: '/services/buying', label: 'Home Buying' },
    { href: '/services/selling', label: 'Home Selling' },
    { href: '/services/investment', label: 'Investment Consulting' },
    { href: '/services/property-management', label: 'Property Management' },
  ];

  const resourcesItems = [
    { href: '/#search-homes', label: 'Search Listings' },
    { href: '/buyers-guide', label: "Buyer's Guide" },
    { href: '/homebuying-process', label: 'Homebuying Process' },
    { href: '/vip-buyer-program', label: 'VIP Partnership' },
    { href: '/blog', label: 'Blog & News' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/reviews', label: 'Leave a Review' },
    { href: '/faq', label: 'FAQ' },
    { href: '/homestead-west-vs-skye-canyon', label: 'vs Skye Canyon' },
    { href: '/homestead-west-vs-cadence', label: 'vs Cadence' },
    { href: '/properties', label: 'Property Search' },
  ];

  const mobileMenuSections = [
    { label: 'Community', items: communityItems },
    { label: 'Services', items: servicesItems },
    { label: 'Resources', items: resourcesItems },
  ];

  const mobileStandaloneLinks = [
    { href: '/#available-homes', label: 'Find a Home' },
    { href: '/about', label: 'About Dr. Jan' },
    { href: '/contact', label: 'Contact' },
    { href: '/vip-buyer-program', label: 'VIP Program' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Phone Number - Primary CTA (Logo removed for maximum conversion focus) */}
            <a
              href={PHONE_TEL_HREF}
              className={cn(
                'flex items-center space-x-3',
                'hover:opacity-80 transition-opacity duration-75 will-change-opacity',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                'min-h-[44px]'
              )}
            >
              <div className="w-12 h-12 bg-[#1a365d] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">📞</span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {PHONE_DISPLAY}
              </div>
            </a>

            {/* Desktop Navigation - Simplified for conversions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Available Homes - Primary action */}
              <Link
                href="/#available-homes"
                className={cn(
                  'text-[#1a365d] hover:text-[#d4af37] font-semibold',
                  'transition-colors duration-75 will-change-[color]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-3'
                )}
              >
                Find a Home
              </Link>

              {/* About - Build trust */}
              <Link
                href="/about"
                className={cn(
                  'text-gray-700 hover:text-[#1a365d] font-medium',
                  'transition-colors duration-75 will-change-[color]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] flex items-center px-3'
                )}
              >
                About
              </Link>

              {/* Resources Dropdown - Consolidated info */}
              <Dropdown label="Info" items={resourcesItems} id="resources" />

              {/* VIP ACCESS - Prominent CTA */}
              <Link
                href="/vip-buyer-program"
                className={cn(
                  'bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a365d]',
                  'px-5 py-2.5 rounded-full font-bold text-sm',
                  'hover:from-[#f4d03f] hover:to-[#d4af37]',
                  'transition-[background] duration-75 will-change-[background] shadow-lg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2',
                  'min-h-[44px] flex items-center whitespace-nowrap'
                )}
              >
                ⭐ VIP ACCESS
              </Link>

              {/* Calendly link widget - Primary CTA */}
              <CalendlyLink />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => {
                  // Use requestAnimationFrame to avoid blocking UI
                  requestAnimationFrame(() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                  });
                }}
                className={cn(
                  'text-gray-700 hover:text-[#1a365d]',
                  'transition-colors duration-75 will-change-[color]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 rounded',
                  'min-h-[44px] min-w-[44px] flex items-center justify-center',
                  mobileMenuOpen && 'text-[#1a365d]'
                )}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sections={mobileMenuSections}
        standaloneLinks={mobileStandaloneLinks}
      />
    </>
  );
}
