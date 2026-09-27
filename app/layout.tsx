import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GbpNapBar from "../components/GbpNapBar";
import RealScoutScript from "../components/RealScoutScript";
import { SITE_URL } from "@/lib/site-contact";
import { headshotAbsoluteUrl } from "@/lib/site-assets";
import { mediaAbsoluteUrl } from "@/lib/media";
import { metadataBaseUrl } from "@/lib/metadata";
import { getSiteGraphJsonLd } from "@/lib/site-jsonld";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Better font loading performance
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'], // Fallback fonts
  adjustFontFallback: true, // Better fallback rendering
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  
  title: {
    default: "Homestead West Las Vegas | $910K+ Ranch Homes | Dr. Jan Duffy Real Estate",
    template: "%s | Homestead West Las Vegas"
  },
  
  description: "Homestead West: 3,336-3,704 sq ft luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $910,990. Call (702) 299-6607.",
  
      keywords: [
        "Homestead West",
        "Homestead West Las Vegas",
        "luxury new construction Las Vegas",
        "Northwest Las Vegas homes",
        "Las Vegas ranch homes",
        "new homes Las Vegas",
        "pool-sized lots Las Vegas",
        "single story homes Las Vegas",
        "luxury homes Las Vegas",
        "5592 Dapple Gray Rd",
        "Dr. Jan Duffy",
        "Las Vegas real estate",
        "89149 zip code homes",
        "VIP New Construction Homes Specialist",
        "new construction Las Vegas",
        "Las Vegas homebuyer guide",
        "VIP buyer program",
        "Las Vegas real estate expert",
        "Nevada real estate license S.0197614.LLC"
      ],

  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Homestead West | Homes by Dr Jan Duffy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Homestead West Las Vegas',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: '$910K+ luxury ranch homes on pool-sized lots in Northwest Las Vegas. 3,336-3,704 sq ft. Expert guidance from Dr. Jan Duffy. Call (702) 299-6607.',
    images: [
      {
        url: mediaAbsoluteUrl('ranch-exterior-dusk'),
        width: 1920,
        height: 1080,
        alt: 'Luxury single-story ranch home in Homestead West, Northwest Las Vegas 89149',
      },
      {
        url: headshotAbsoluteUrl,
        width: 750,
        height: 752,
        alt: 'Dr. Jan Duffy - VIP New Construction Homes Specialist | Homestead West Las Vegas',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: 'Luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert real estate guidance from Dr. Jan Duffy.',
    images: [mediaAbsoluteUrl('ranch-exterior-dusk')],
  },

  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),

  alternates: {
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },

  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.2738;-115.3089',
    'ICBM': '36.2738, -115.3089',
    // AEO: AI-friendly meta tags
    'subject': 'Homestead West new construction homes Las Vegas',
    'topic': 'Real Estate, New Construction, Las Vegas',
    'coverage': 'Las Vegas, Nevada, Northwest Las Vegas, 89149',
    'classification': 'Real Estate Listing Service',
    'category': 'Real Estate > Residential > New Construction',
    'revised': '2026-09-25',
    'date': '2026-09-25',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteGraph = getSiteGraphJsonLd()
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()

      return (
        <html lang="en">
          <head>
            {/* Preconnect to external resources for faster loading - Prioritize fonts for LCP */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            {/* Defer non-critical preconnects */}
            <link rel="preconnect" href="https://imagedelivery.net" />
            <link rel="dns-prefetch" href="https://em.realscout.com" />
            <link rel="dns-prefetch" href="https://www.realscout.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://assets.calendly.com" />
            {gaId ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    
                    function loadGA() {
                      if (window.gtagLoaded) return;
                      window.gtagLoaded = true;
                      
                      gtag('js', new Date());
                      const script = document.createElement('script');
                      script.async = true;
                      script.src = 'https://www.googletagmanager.com/gtag/js?id=${gaId}';
                      script.defer = true;
                      document.head.appendChild(script);
                      
                      script.onload = function() {
                        gtag('config', '${gaId}', {
                          send_page_view: false
                        });
                      };
                    }
                    
                    var interactionCount = 0;
                    var interactionHandler = function(event) {
                      interactionCount++;
                      if (!window.gtagLoaded && (interactionCount >= 3 || (event === 'scroll' && (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) > 0.5))) {
                        requestAnimationFrame(function() {
                          loadGA();
                        });
                        ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(function(evt) {
                          window.removeEventListener(evt, interactionHandler, { passive: true });
                        });
                      }
                    };
                    ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(function(event) {
                      window.addEventListener(event, interactionHandler, { once: false, passive: true });
                    });
                    
                    if ('requestIdleCallback' in window) {
                      requestIdleCallback(function() {
                        setTimeout(function() {
                          if (!window.gtagLoaded && document.readyState === 'complete') {
                            loadGA();
                          }
                        }, 5000);
                      }, { timeout: 6000 });
                    } else {
                      setTimeout(function() {
                        if (document.readyState === 'complete' && !window.gtagLoaded) {
                          loadGA();
                        }
                      }, 5000);
                    }
                  })();
                `,
              }}
            />
            ) : null}

            {/* Structured Data - LocalBusiness / agent graph for GBP + Maps */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(siteGraph),
              }}
            />

            {/* RealScout Widget Script - Loaded asynchronously to prevent render blocking */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  realscout-advanced-search {
                    --rs-as-button-text-color: #ffffff;
                    --rs-as-background-color: #ffffff;
                    --rs-as-button-color: #1a365d;
                    --rs-as-button-hover-color: #0f2439;
                    --rs-as-border-color: #e2e8f0;
                    --rs-as-text-color: #1a365d;
                    --rs-as-widget-width: 100% !important;
                    max-width: 100% !important;
                    width: 100% !important;
                  }
                  @media (min-width: 768px) {
                    realscout-advanced-search {
                      --rs-as-widget-width: 800px !important;
                      max-width: 800px !important;
                    }
                  }
                  realscout-office-listings {
                    --rs-listing-divider-color: #0e64c8;
                    width: 100%;
                  }
                `
              }}
            />

            {/* Calendly: loaded on-demand by CalendlyLink / appointment page to avoid LCP and long main-thread tasks */}
          </head>
          <body className={inter.className}>
            <GbpNapBar />
            <Navigation />
            {children}
            <Footer />
            <RealScoutScript />
          </body>
        </html>
      );
}