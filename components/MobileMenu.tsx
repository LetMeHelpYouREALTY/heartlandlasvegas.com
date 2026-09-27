'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CalendlyLink from '@/components/CalendlyLink';
import { cn } from '@/lib/utils';

interface MenuItem {
  href: string;
  label: string;
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections?: MenuSection[];
  standaloneLinks?: MenuItem[];
}

export function MobileMenu({ isOpen, onClose, sections, standaloneLinks }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50',
          'transform transition-transform duration-300 ease-out',
          'overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className={cn(
              'p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
              'min-w-[44px] min-h-[44px] flex items-center justify-center'
            )}
            aria-label="Close menu"
          >
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
          </button>
        </div>

        {/* Menu Content */}
        <nav className="p-4 space-y-1">
          {/* Standalone Links */}
          {standaloneLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'block px-4 py-3 text-gray-700 rounded-lg',
                'hover:bg-blue-50 hover:text-blue-600',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
                'min-h-[44px] flex items-center'
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* VIP Button */}
          <Link
            href="/vip-buyer-program"
            onClick={onClose}
            className={cn(
              'block mx-4 mt-4 mb-4',
              'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
              'px-4 py-3 rounded-full font-bold text-sm text-center',
              'hover:from-yellow-500 hover:to-yellow-600',
              'hover:scale-[1.02] active:scale-[0.98]',
              'transition-all duration-150 shadow-lg',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2',
              'min-h-[44px] flex items-center justify-center'
            )}
          >
            ⭐ VIP ACCESS
          </Link>

          {/* Calendly link widget */}
          <div className="mx-4 mb-4">
            <CalendlyLink />
          </div>

          {/* Accordion Sections */}
          {sections?.map((section) => {
            const isExpanded = expandedSections.has(section.label);

            return (
              <div key={section.label} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggleSection(section.label)}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-3 text-gray-900 font-medium',
                    'hover:bg-gray-50 transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg',
                    'min-h-[44px]'
                  )}
                  aria-expanded={isExpanded}
                  aria-controls={`mobile-menu-section-${section.label}`}
                >
                  <span>{section.label}</span>
                  <svg
                    className={cn(
                      'w-5 h-5 text-gray-500 transition-transform duration-200',
                      isExpanded && 'rotate-180'
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id={`mobile-menu-section-${section.label}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-out',
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pl-4 pb-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-2 text-gray-600 rounded-lg',
                          'hover:bg-blue-50 hover:text-blue-600',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
                          'min-h-[44px] flex items-center'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}
