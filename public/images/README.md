# Legacy `/public/images` path

Static assets were reorganized:

- **Logos / brokerage:** `/brand/` (e.g. `/brand/bhhs-logo.svg`)
- **Photography:** `/photos/` (e.g. `/photos/team/dr-jan-duffy-headshot.jpg`)

Old URLs under `/images/...` redirect to the new paths (see `next.config.ts`). Prefer importing paths from `lib/site-assets.ts`.
