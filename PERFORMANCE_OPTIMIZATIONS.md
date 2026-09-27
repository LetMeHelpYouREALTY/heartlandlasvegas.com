# Performance & Lighthouse Optimizations

Summary of changes made to address Lighthouse / PageSpeed Insights findings (cache lifetimes, legacy JavaScript, unused JS, long main-thread tasks).

## 1. Calendly: On-demand loading

**Issue:** Calendly widget.js and widget.css were loaded on every page (short cache TTL from third party, long main-thread task, unused JS on non-appointment pages).

**Change:**
- Removed Calendly script and CSS from `app/layout.tsx` (no global badge widget).
- **CalendlyLink** (`components/CalendlyLink.tsx`) now loads Calendly only when the user clicks the CTA: script and CSS are injected on first click, then the popup opens (fallback: open Calendly in a new tab).
- **Appointment page** (`app/appointment/page.tsx`) still loads the inline widget with `Script strategy="lazyOnload"` only on that route.

**Result:** No Calendly on initial load → better LCP, smaller main-thread work, and the “efficient cache lifetimes” warning for Calendly no longer affects first-load metrics (third-party TTL is unchanged; we just don’t request it until the user acts).

## 2. Legacy JavaScript (polyfills)

**Issue:** ~12 KiB of polyfills for features like `Array.at`, `Array.flat`, `Object.fromEntries`, etc., for older browsers.

**Change:** Updated `.browserslistrc` to target only modern browsers:
- Chrome >= 92, Firefox >= 90, Safari >= 15.4, Edge >= 92
- `not dead`, `not IE 11`

**Result:** Build can omit polyfills for Baseline features on modern browsers. If some polyfills remain (e.g. from dependencies), consider updating or replacing those packages.

## 3. Config cleanup

- Removed `experimental.inlineCss: true` from `next.config.ts` to avoid build warnings.

## 4. First-party cache (already in place)

- `next.config.ts` sets long-lived `Cache-Control` for `/_next/static/*`, `/_next/image*`, `/images/*`, `/brand/*`, `/photos/*`, etc. (e.g. `max-age=31536000, immutable`).
- Calendly’s 5m TTL is set by `assets.calendly.com`; we cannot change it. Loading Calendly on-demand reduces its impact on initial load.

## After deploy

1. Deploy (e.g. push to `main` if Vercel auto-deploys, or run `vercel --prod`).
2. Re-run **Lighthouse** or **PageSpeed Insights** on the live URL (e.g. `https://www.homesteadwestlasvegas.com`) to confirm:
   - Calendly no longer in critical path / first-load “Efficient cache lifetimes”.
   - Fewer “Avoid long main-thread tasks” and “Reduce unused JavaScript” issues.
   - Possibly less “Legacy JavaScript” from the browserslist change.
