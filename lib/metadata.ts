import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-contact'

/** Matches `metadataBase` in root layout — production origin for canonical and OG URLs. */
export const metadataBaseUrl = new URL(SITE_URL)

/** Absolute URL for a path (leading slash required). */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

/** Page-level `alternates.canonical` helper. */
export function canonicalMetadata(path: string): Pick<Metadata, 'alternates'> {
  return {
    alternates: {
      canonical: absoluteUrl(path),
    },
  }
}
