import { MetadataRoute } from 'next'
import { isPromoActive } from '@/lib/promo'

const BASE_URL = 'https://laribrand.ru'

export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const promoEntry: MetadataRoute.Sitemap = isPromoActive()
    ? [
        {
          url: `${BASE_URL}/promo`,
          lastModified,
          changeFrequency: 'daily',
          priority: 0.9,
        },
      ]
    : []

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...promoEntry,
    {
      url: `${BASE_URL}/keratin_and_botox`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/safe_hair_straightening`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cold_hair_reconstruction`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/bioavailability`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hair_coloring`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hair_cutting`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hair_styling`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/afro_weaving`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/total_reconstruction`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/additional_services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
