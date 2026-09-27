import Image from 'next/image'
import { mediaAlt, mediaDimensions, mediaSrc } from '@/lib/media'
import type { SiteImageId } from '@/lib/image-catalog'

type SectionImageProps = {
  imageId: SiteImageId
  heading: string
  caption?: string
  priority?: boolean
  className?: string
}

export default function SectionImage({
  imageId,
  heading,
  caption,
  priority = false,
  className = '',
}: SectionImageProps) {
  const { width, height } = mediaDimensions(imageId)

  return (
    <figure className={`mb-8 ${className}`}>
      <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-gray-200">
        <Image
          src={mediaSrc(imageId)}
          alt={`${mediaAlt(imageId)} — ${heading}`}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(max-width: 768px) 100vw, 960px"
          className="h-full w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-gray-600">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
