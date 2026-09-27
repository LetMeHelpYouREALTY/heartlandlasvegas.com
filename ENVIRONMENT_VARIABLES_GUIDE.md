# Environment Variables Configuration Guide

## Required Environment Variables for Homestead West Las Vegas

### Google Analytics & SEO
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# From Google Search Console → Add property → HTML tag → copy the content value
GOOGLE_SITE_VERIFICATION=your-google-verification-code-here
```

### Contact Information (for dynamic content)
```bash
NEXT_PUBLIC_CONTACT_PHONE=7022221988
NEXT_PUBLIC_CONTACT_EMAIL=DrJanSells@HomesteadWestLasVegas.com
NEXT_PUBLIC_OFFICE_ADDRESS=5592 Dapple Gray Rd, Las Vegas, NV 89149
```

### Century Communities Integration (if available)
```bash
CENTURY_COMMUNITIES_API_KEY=your-century-api-key
CENTURY_COMMUNITIES_BASE_URL=your-century-base-url
```

### Cloudflare Images (hosted)

Public delivery (already in the app):

```
https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/public
```

```bash
NEXT_PUBLIC_CF_IMAGES_HASH=byE6BTe9lNqo21V57n4aPQ
NEXT_PUBLIC_CF_IMAGES_VARIANT=public
CLOUDFLARE_ACCOUNT_ID=2cc579c1ec9e426ed585e933ebf4753b
CLOUDFLARE_API_TOKEN=          # Images Write — never commit
```

Upload git JPEGs once: `CLOUDFLARE_API_TOKEN=… npm run upload:cf-images`

Keep the Vercel hostname on DNS-only (gray cloud). Serve media from `imagedelivery.net`.

### Google Maps API
- `VITE_GOOGLE_MAPS_API_KEY` ✅

### Follow Up Boss CRM
- `FOLLOW_UP_BOSS_BASE_URL` ✅
- `FOLLOW_UP_BOSS_API_KEY` ✅
- `FOLLOW_UP_BOSS_AGENT_ID` ✅

### SMS Auto Reply
- `SMS_AUTO_REPLY_ENABLED` ✅
- `SMS_AUTO_REPLY_MESSAGE` ✅
- `SMS_PHONE_NUMBER` ✅

### RealScout Integration
- `NEXT_PUBLIC_REALSCOUT_AGENT_ID` ✅

### AI Integration
- `OPENROUTER_API_KEY` ✅
- `openaikey` ✅

## Setup Instructions

1. **Google Analytics 4**: Create a GA4 property and add the measurement ID
2. **Google Search Console**: Verify your domain and add the verification code
3. **Century Communities**: Contact Century Communities for API access (if available)

## Benefits of These Environment Variables

- **Dynamic Content**: Contact information can be updated without code changes
- **Analytics Tracking**: Monitor website performance and user behavior
- **SEO Optimization**: Google Search Console verification for better rankings
- **API Integration**: Real-time data from Century Communities (if available)
- **Lead Management**: Follow Up Boss integration for CRM functionality
- **Automated Messaging**: SMS auto-reply for immediate lead response
