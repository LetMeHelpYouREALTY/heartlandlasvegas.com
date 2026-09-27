import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = request.headers.get('host') || '';

  const isLocal =
    hostname.startsWith('localhost') ||
    hostname.startsWith('127.0.0.1') ||
    hostname.startsWith('[::1]');

  // Legacy headshot URL with spaces (some crawlers / bookmarks) → canonical asset path
  if (pathname === '/images/Dr. Duffy Blue_Headshot.jpg') {
    url.pathname = '/photos/team/dr-jan-duffy-headshot.jpg';
    url.search = '';
    return NextResponse.redirect(url, 308);
  }

  // GSC: junk URLs like /$ or /%24 (bot typo / encoding) → canonical homepage
  if (pathname === '/$' || pathname === '/%24') {
    url.pathname = '/';
    url.search = '';
    url.hostname = 'www.homesteadwestlasvegas.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  const needsRedirect =
    !isLocal &&
    (hostname === 'homesteadwestlasvegas.com' || // non-www
      url.protocol === 'http:'); // HTTP

  // If redirect needed, combine both redirects into one
  if (needsRedirect) {
    // Always redirect to canonical: https://www.homesteadwestlasvegas.com
    url.hostname = 'www.homesteadwestlasvegas.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


