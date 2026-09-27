import { MetadataRoute } from 'next'
import { fetchKCMPosts } from '@/lib/rss-fetcher'
import { SITE_URL } from '@/lib/site-contact'
import { PAGE_HERO_IMAGE } from '@/lib/image-catalog'
import { mediaAbsoluteUrl } from '@/lib/media'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const now = new Date()
  const lastModified = now.toISOString()

  let blogUrls: MetadataRoute.Sitemap = []
  try {
    const posts = await fetchKCMPosts()
    blogUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt.toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // Omit blog URLs if RSS unavailable at build/crawl time
  }

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
        },
      },
    },
    
    // VIP New Construction Homes Specialist - High Priority (Key Differentiator)
    {
      url: `${baseUrl}/vip-buyer-program`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Floor Plans - High Priority (Core Product)
    {
      url: `${baseUrl}/floor-plans`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/floor-plans/3336`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/floor-plans/3704`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    
    // Community & Location - High Priority
    {
      url: `${baseUrl}/community`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/northwest-las-vegas-new-construction`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${baseUrl}/la-madre-foothills`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community-map`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/virtual-tour`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // About & Credentials - High Priority
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Buyer Resources - High Priority
    {
      url: `${baseUrl}/buyers-guide`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/homebuying-process`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Contact - High Priority (Conversion Page)
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    
    // Content & SEO Pages
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Services
    {
      url: `${baseUrl}/services`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/buying`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/selling`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/investment`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/property-management`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    
    // Location & Appointment
    {
      url: `${baseUrl}/location`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/directions`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location/las-vegas-office`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/homestead-west-vs-skye-canyon`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/homestead-west-vs-cadence`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  const withImages = [...staticPages, ...blogUrls].map((entry) => {
    const path = entry.url.replace(baseUrl, '') || '/'
    const imageId = PAGE_HERO_IMAGE[path] ?? 'ranch-exterior-dusk'
    return {
      ...entry,
      images: [mediaAbsoluteUrl(imageId)],
    }
  })

  return withImages
}
