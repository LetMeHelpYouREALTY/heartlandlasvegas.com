# What's Missing

Lead capture is in place: `components/LeadForm.tsx` posts to `/api/leads/submit` and `lib/fub/client.ts` sends to Follow Up Boss when `FOLLOW_UP_BOSS_API_KEY` is set.

Cloudflare hosted Images:

- Account hash `byE6BTe9lNqo21V57n4aPQ` is in `lib/cloudflare-images.ts`.
- Upload still needs `CLOUDFLARE_API_TOKEN` with **Images Write**. Then `npm run upload:cf-images`.
- Until that token runs, git JPEGs in `public/photos` stay the live source.

Do not orange-cloud the Vercel hostname.
