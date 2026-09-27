import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Use project root for file tracing (silences multiple lockfile warning)
  outputFileTracingRoot: path.join(__dirname),
  // Image optimization for better Core Web Vitals
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'images.homesteadwestlasvegas.com',
      },
      {
        protocol: 'https',
        hostname: '*.simplifyingthemarket.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.keepingcurrentmatters.com',
      },
      {
        protocol: 'https',
        hostname: '*.kcm.com',
      },
      {
        protocol: 'https',
        hostname: 'files.keepingcurrentmatters.com',
      },
      {
        protocol: 'https',
        hostname: 'www.simplifyingthemarket.com',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i2.wp.com',
      },
    ],
  },
  
  // Compression for better performance
  compress: true,
  
  // Enable static optimization
  output: 'standalone',
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com https://www.google.com https://maps.googleapis.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://drjanduffy.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://maps.googleapis.com https://assets.calendly.com https://calendly.com https://www.simplifyingthemarket.com",
              "img-src 'self' data: blob: https:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://em.realscout.com https://assets.calendly.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "frame-src https://www.google.com https://maps.google.com https://www.google.com/maps https://calendly.com https://www.showingnew.com https://em.realscout.com https://www.realscout.com https://my.matterport.com",
              "worker-src 'self' blob:",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://www.showingnew.com https://calendly.com",
            ].join('; '),
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/brand/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/photos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/media/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/media/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Legacy slug (GSC "crawled not indexed" / 404) → current VIP program
      {
        source: '/century-communities-vip',
        destination: '/vip-buyer-program',
        permanent: true,
      },
      // GSC reported 404 for /$ (typo/bot URL) — redirect to homepage
      { source: '/%24', destination: '/', permanent: true },
      { source: '/\\$', destination: '/', permanent: true },
      // Legacy flat /public/images paths → organized brand + photos
      {
        source: '/images/bhhs-logo.svg',
        destination: '/brand/bhhs-logo.svg',
        permanent: true,
      },
      {
        source: '/images/Dr.%20Duffy%20Blue_Headshot.jpg',
        destination: '/photos/team/dr-jan-duffy-headshot.jpg',
        permanent: true,
      },
    ];
  },
  
  // Rewrites to handle font file paths (fix 404 errors)
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: '/_next/static/media/:path*',
      },
    ];
  },
};

export default nextConfig;
