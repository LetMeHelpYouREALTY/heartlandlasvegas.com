import Image from 'next/image'
import type { ReactNode } from 'react'
import GbpActions from '@/components/GbpActions'
import { mediaAlt, mediaSrc } from '@/lib/media'
import type { SiteImageId } from '@/lib/image-catalog'

type PageHeroProps = {
  imageId: SiteImageId
  title: string
  subtitle?: ReactNode
  badge?: string
  children?: ReactNode
  priority?: boolean
  compact?: boolean
  showActions?: boolean
}

export default function PageHero({
  imageId,
  title,
  subtitle,
  badge,
  children,
  priority = true,
  compact = false,
  showActions = true,
}: PageHeroProps) {
  return (
    <header
      className={`relative overflow-hidden text-white ${compact ? 'min-h-[280px]' : 'min-h-[380px] md:min-h-[460px]'}`}
    >
      <Image
        src={mediaSrc(imageId)}
        alt={mediaAlt(imageId)}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2439]/85 via-[#1a365d]/75 to-[#1a365d]/55" />
      <div className={`relative container mx-auto px-4 ${compact ? 'py-12 md:py-16' : 'py-16 md:py-24'}`}>
        <div className="max-w-4xl">
          {badge ? (
            <div className="inline-block bg-[#d4af37] text-[#1a365d] px-4 py-1.5 rounded-full font-bold text-sm mb-4">
              {badge}
            </div>
          ) : null}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-sm">
            {title}
          </h1>
          {subtitle ? (
            <div className="text-lg md:text-xl text-blue-50 mb-6 max-w-3xl">{subtitle}</div>
          ) : null}
          {children}
          {showActions ? <GbpActions className="mt-6" compact /> : null}
        </div>
      </div>
    </header>
  )
}
