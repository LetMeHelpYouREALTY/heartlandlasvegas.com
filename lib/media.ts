import cloudflareImageIds from '@/lib/cloudflare-image-ids.json'
import { cloudflareDeliveryUrl } from '@/lib/cloudflare-images'
import { SITE_IMAGES, type SiteImageId } from '@/lib/image-catalog'
import { SITE_URL } from '@/lib/site-contact'

type CloudflareIdMap = Record<string, string>

const uploadedIds = cloudflareImageIds as CloudflareIdMap

function customDomain(): string | undefined {
  const domain = process.env.NEXT_PUBLIC_CF_IMAGES_CUSTOM_DOMAIN?.trim()
  if (!domain) return undefined
  return domain.replace(/\/$/, '')
}

/**
 * Cloudflare hosted Images first, git `/photos/...` backup.
 *
 * Delivery order (Cloudflare hosted Images, not orange-cloud on Vercel):
 * 1. https://imagedelivery.net/<account_hash>/<image_id>/<variant>
 *    when lib/cloudflare-image-ids.json has an uploaded custom ID
 * 2. Optional custom Images hostname
 * 3. Git-hosted JPEG on this origin
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/
 */
export function mediaSrc(id: SiteImageId): string {
  const asset = SITE_IMAGES[id]
  const cfId = uploadedIds[id]

  if (cfId) {
    return cloudflareDeliveryUrl(cfId)
  }

  const custom = customDomain()
  if (custom) {
    if (process.env.NEXT_PUBLIC_CF_IMAGE_RESIZING === '1') {
      return `${custom}/cdn-cgi/image/width=1920,format=auto,quality=80${asset.gitPath}`
    }
    return `${custom}${asset.gitPath}`
  }

  return asset.gitPath
}

export function mediaAbsoluteUrl(id: SiteImageId): string {
  const src = mediaSrc(id)
  if (src.startsWith('http')) return src
  return `${SITE_URL}${src}`
}

export function mediaAlt(id: SiteImageId): string {
  return SITE_IMAGES[id].alt
}

export function mediaDimensions(id: SiteImageId): { width: number; height: number } {
  const asset = SITE_IMAGES[id]
  return { width: asset.width, height: asset.height }
}
