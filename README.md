# heartlandlasvegas.com

Next.js site for **Heartland Cottages at Tule Springs** (D.R. Horton) — buyer guidance, floor plans, model tours, and MLS search. Agent: Dr. Jan Duffy, Nevada license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.

- **Canonical URL:** https://www.heartlandlasvegas.com
- **Vercel:** linked to this repo; production deploys from `main`
- **Phone:** none on site yet (`SITE_PHONE = null` in `lib/contact.ts`)
- **Leads:** `POST /api/leads/capture` → Follow Up Boss (`FOLLOW_UP_BOSS_API_KEY` or `FUB_API_KEY`)

## Develop

```bash
npm ci
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL=https://www.heartlandlasvegas.com` in Vercel.

## Build

```bash
npm ci
npm run build
npm run start
```

Template source: [heyberkshire.com](https://github.com/LetMeHelpYouREALTY/heyberkshire.com) (imported as a single commit; no `.env` secrets in git).
