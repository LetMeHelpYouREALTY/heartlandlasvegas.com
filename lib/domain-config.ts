/**
 * heartlandlasvegas.com — single-host configuration.
 */

import { normalizeHostname } from "./contact";
import { heartlandSite } from "./heartland-site";

export interface DomainConfig {
  domain: string;
  neighborhood: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  keywords: string[];
  pageType: "community";
  realscoutAgentId: string;
  ctaBadge: string;
  ctaHeadline: string;
  ctaSubheadline: string;
}

export const DOMAIN_CONFIGS: Record<string, DomainConfig> = {
  "heartlandlasvegas.com": {
    domain: "heartlandlasvegas.com",
    neighborhood: "Heartland Cottages at Tule Springs",
    tagline: heartlandSite.title,
    description: heartlandSite.metaDescription,
    heroHeadline: heartlandSite.h1,
    heroSubheadline: heartlandSite.heroSubheadline,
    keywords: [...heartlandSite.keywords],
    pageType: "community",
    realscoutAgentId: heartlandSite.realscoutAgentId,
    ctaBadge: "D.R. Horton Cottages specialist",
    ctaHeadline: "Request a Heartland Cottages tour",
    ctaSubheadline:
      "Use the contact form or Calendly — no call queue on this site yet.",
  },
};

export const DEFAULT_CONFIG = DOMAIN_CONFIGS["heartlandlasvegas.com"];

export function isKnownHost(hostname: string): boolean {
  const clean = normalizeHostname(hostname);
  if (!clean || clean === "localhost" || clean.endsWith(".vercel.app")) {
    return true;
  }
  return clean === "heartlandlasvegas.com";
}

export function getDomainConfig(hostname: string): DomainConfig {
  const clean = normalizeHostname(hostname);
  if (
    clean === "heartlandlasvegas.com" ||
    !clean ||
    clean === "localhost" ||
    clean.endsWith(".vercel.app")
  ) {
    return DEFAULT_CONFIG;
  }
  return { ...DEFAULT_CONFIG, domain: clean };
}
