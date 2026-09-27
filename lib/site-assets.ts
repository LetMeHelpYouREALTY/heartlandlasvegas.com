/**
 * Canonical static asset paths (public/). Use these instead of duplicating path strings.
 * Headshot and brokerage logo URLs must stay aligned with JSON-LD and Open Graph.
 */
import { SITE_URL } from '@/lib/site-contact';

export const ASSET_HEADSHOT_PATH = '/photos/team/dr-jan-duffy-headshot.jpg' as const;
export const ASSET_BHHS_LOGO_PATH = '/brand/bhhs-logo.svg' as const;

export const headshotAbsoluteUrl = `${SITE_URL}${ASSET_HEADSHOT_PATH}` as const;
export const bhhsLogoAbsoluteUrl = `${SITE_URL}${ASSET_BHHS_LOGO_PATH}` as const;
