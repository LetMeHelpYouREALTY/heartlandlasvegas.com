# Google Business Profile & Search Console Setup Guide

## Google Search Console Setup

### 1. Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://homesteadwestlasvegas.com`
3. Choose verification method:
   - **HTML file upload**: Upload `google-site-verification.html` to `/public/`
   - **HTML tag**: Use the meta tag in `app/layout.tsx`
   - **DNS record**: Add TXT record to domain DNS

### 2. Replace Placeholder Values
In `app/layout.tsx`, replace:
- `your-google-verification-code` with actual verification code
- `GA_MEASUREMENT_ID` with your Google Analytics 4 Measurement ID

### 3. Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Submit: `https://homesteadwestlasvegas.com/sitemap.xml`

## Google Business Profile Setup

### 1. Create Business Profile
1. Go to [Google Business Profile](https://business.google.com)
2. Create new business listing
3. Use exact information from structured data:
   - **Business Name**: Homestead West | Homes by Dr Jan Duffy
   - **Address**: 5592 Dapple Gray Rd, Las Vegas, NV 89149
   - **Phone**: (702) 299-6607
   - **Email**: DrJanSells@HomesteadWestLasVegas.com
   - **Website**: https://homesteadwestlasvegas.com

### 2. Business Categories
- Primary: Real Estate Agent
- Secondary: Real Estate Consultant
- Additional: Property Management

### 3. Business Hours
- Sunday: 10:00 AM - 3:00 PM
- Monday-Friday: 10:00 AM - 6:00 PM
- Saturday: 10:00 AM - 4:00 PM

### 4. Services
- Real Estate Sales
- Property Management
- Real Estate Investment Consulting
- First Time Home Buyer Services

### 5. Photos & Media
- Upload professional headshot of Dr. Jan Duffy
- Add property photos
- Include business logo
- Add virtual tour videos

### 6. Posts & Updates
- Regular market updates
- New property listings
- Client testimonials
- Local Las Vegas real estate news

## Social Media Integration

Update social media URLs in structured data:
- Facebook: https://www.facebook.com/homesteadwestlasvegas
- Instagram: https://www.instagram.com/homesteadwestlasvegas
- LinkedIn: https://www.linkedin.com/company/homestead-west-las-vegas

## Next Steps After Setup

1. **Monitor Performance**
   - Check Search Console for indexing status
   - Monitor Google Business Profile insights
   - Track Google Analytics data

2. **Optimize Content**
   - Add more property-specific pages
   - Create location-based landing pages
   - Publish regular blog content

3. **Local SEO**
   - Get listed in local directories
   - Encourage customer reviews
   - Maintain consistent NAP (Name, Address, Phone) across all platforms
