# Google Search Console — Setup & Checklist

Use this guide to prepare and maintain the site in Google Search Console (GSC).

---

## Pre-submit checklist (site is ready)

| Item | Status |
|------|--------|
| **Canonical domain** | `https://www.homesteadwestlasvegas.com` (all metadata, schema, links use this) |
| **Sitemap** | `https://www.homesteadwestlasvegas.com/sitemap.xml` (static pages + blog posts) |
| **robots.txt** | Allows crawling, references sitemap, disallows `/api/`, `/_next/`, `favicon.ico` |
| **Verification** | Meta tag in layout (set `GOOGLE_SITE_VERIFICATION` env) or HTML file (see below) |
| **Structured data** | LocalBusiness, RealEstateAgent, FAQPage, BreadcrumbList, BlogPosting, etc. |
| **Mobile & HTTPS** | Responsive; HTTPS enforced via host/Vercel |

---

## 1. Add the property in GSC

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose **URL prefix** and enter: `https://www.homesteadwestlasvegas.com`
4. Proceed to verification.

---

## 2. Verify ownership

Use **one** of these methods.

### Option A: HTML meta tag (recommended)

1. In GSC, choose **HTML tag**.
2. Copy the `content` value (e.g. `AbCdEf123456...`).
3. In your deployment (Vercel / host), set the environment variable:
   - **Name:** `GOOGLE_SITE_VERIFICATION`
   - **Value:** the code from GSC (no `google-site-verification` prefix, just the code).
4. Redeploy so the live site outputs:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE" />
   ```
5. In GSC, click **Verify**.

The meta tag is rendered in `app/layout.tsx` from `process.env.GOOGLE_SITE_VERIFICATION`. If the env var is missing, the placeholder in code is **not** valid for verification — you must set the real code in your environment.

### Option B: HTML file upload

1. In GSC, choose **HTML file**.
2. Download the file (e.g. `google1234567890abcdef.html`).
3. Put that file in the project’s **`public/`** folder (same name and content as provided).
4. Deploy. The file will be at `https://www.homesteadwestlasvegas.com/google1234567890abcdef.html`.
5. In GSC, click **Verify**.

**Note:** `public/google-site-verification.html` in the repo is only a template. For this method, use the exact file name and content GSC gives you.

### Option C: DNS (domain property)

If you add a **Domain** property (e.g. `homesteadwestlasvegas.com`), use the TXT record GSC provides at your DNS host.

---

## 3. Submit the sitemap

1. In GSC, open **Sitemaps** (left menu).
2. Under “Add a new sitemap”, enter: `sitemap.xml`
3. Click **Submit**.

Full URL: `https://www.homesteadwestlasvegas.com/sitemap.xml`

The sitemap includes:

- All static pages (home, VIP program, floor plans, community, services, contact, location, appointment, FAQ, blog index, etc.).
- `/homestead-west-vs-skye-canyon`.
- All blog post URLs from the KCM RSS feed (`/blog/[slug]`).

---

## 4. After verification

- **URL Inspection:** Request indexing for key URLs (home, `/vip-buyer-program`, `/floor-plans`, `/contact`) if you want them crawled sooner.
- **Coverage:** Check for “Valid” vs “Excluded” and fix any real errors (ignore expected exclusions like `_next` or `favicon.ico`; see `CRAWL_NOT_INDEXED_EXPLANATION.md`).
- **Performance:** Monitor impressions, clicks, CTR, and position over time.
- **Enhancements:** Use the “Enhancements” reports for Core Web Vitals, mobile usability, and structured data issues.

---

## 5. Sitemap details

| Type | Count | Notes |
|------|--------|------|
| Static pages | 35+ | Home, VIP, floor plans, community, amenities, services, contact, location, directions, appointment, FAQ, reviews, testimonials, etc. |
| Blog posts | From RSS | `/blog/[slug]`; added at build/crawl time from KCM feed |
| **Sitemap URL** | — | `https://www.homesteadwestlasvegas.com/sitemap.xml` |

Priorities: Homepage 1.0; VIP / floor plans 0.9–0.95; key conversion pages 0.8–0.85; blog and supporting pages 0.7–0.75.

---

## 6. robots.txt

Live URL: `https://www.homesteadwestlasvegas.com/robots.txt`

- **Allow:** `/`
- **Disallow:** `/api/`, `/admin/`, `/_next/`, `/favicon.ico`
- **Sitemap:** `https://www.homesteadwestlasvegas.com/sitemap.xml`
- **Host:** `https://www.homesteadwestlasvegas.com` (for crawlers that use it)

---

## 7. Common GSC messages

- **“Page with redirect”** — Non-www or http redirecting to `https://www.homesteadwestlasvegas.com` is expected. See `REDIRECT_ISSUE_EXPLANATION.md`.
- **“Blocked by robots.txt”** for `/_next/*` or `favicon.ico` — Intentional; see `CRAWL_NOT_INDEXED_EXPLANATION.md`.
- **“Crawled – currently not indexed”** — Can be normal for low-priority or duplicate-like URLs; focus on key pages and content quality.

---

## 8. Environment variable reference

| Variable | Where used | Purpose |
|----------|------------|---------|
| `GOOGLE_SITE_VERIFICATION` | `app/layout.tsx` (meta tag) | GSC domain verification (Option A) |

Set in Vercel: Project → Settings → Environment Variables (Production, Preview as needed).
