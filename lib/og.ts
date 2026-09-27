import { mediaAbsoluteUrl, mediaAlt, mediaDimensions } from '@/lib/media'
import type { SiteImageId } from '@/lib/image-catalog'

export function ogImages(id: SiteImageId): { url: string; width: number; height: number; alt: string }[] {
  const { width, height } = mediaDimensions(id)
  return [
    {
      url: mediaAbsoluteUrl(id),
      width,
      height,
      alt: mediaAlt(id),
    },
  ]
}
