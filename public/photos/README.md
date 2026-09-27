# Photography (`/public/photos`)

Git is the **backup source of truth**. Production delivery uses [Cloudflare hosted Images](https://developers.cloudflare.com/images/optimization/hosted-images/) after upload:

`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/public`

| Path | Use |
|------|-----|
| `photos/team/dr-jan-duffy-headshot.jpg` | Agent photo (JSON-LD + About) |
| `photos/sections/*.jpg` | Heading-matched section/hero photos |

Do not orange-cloud the Vercel apex. Keep homesteadwestlasvegas.com on Vercel (DNS only).

Upload (needs an **Images Write** API token, not the account hash):

```bash
CLOUDFLARE_API_TOKEN=… npm run upload:cf-images
```

That writes custom IDs into `lib/cloudflare-image-ids.json`. Until then, Next.js serves the git JPEGs.
