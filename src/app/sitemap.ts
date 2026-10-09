import { MetadataRoute } from 'next'
import { isPromoActive, PROMO_START } from '@/lib/promo'
import { SITE_URL } from '@/lib/seo/site'
import { SERVICES } from '@/lib/seo/services'

// Даты изменения — фактические даты правок контента, без генерации «на лету».
const SEO_UPDATE_DATE = new Date('2026-10-09T12:00:00+04:00')

export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const promoEntry: MetadataRoute.Sitemap = isPromoActive()
    ? [
        {
          url: `${SITE_URL}/promo`,
          lastModified: new Date(PROMO_START),
          changeFrequency: 'daily',
          priority: 0.9,
        },
      ]
    : []

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: SEO_UPDATE_DATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: SEO_UPDATE_DATE,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...promoEntry,
    ...serviceEntries,
  ]
}
