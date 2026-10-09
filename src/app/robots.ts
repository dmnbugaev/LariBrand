import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/site'

// /_next/ не блокируем: роботам нужны CSS/JS для рендеринга страниц
// (Яндекс и Google оценивают мобильную версию и отрисованное содержимое).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
