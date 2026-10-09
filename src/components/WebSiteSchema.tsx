import { safeJsonLd } from '../lib/security'
import { BUSINESS, SITE_URL } from '../lib/seo/site'

/** WebSite-сущность для главной страницы (объединяет сущности сайта с HairSalon). */
export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    alternateName: 'LariBrand — дом эстетики волос',
    description: BUSINESS.description,
    url: SITE_URL,
    inLanguage: 'ru-RU',
    publisher: { '@id': `${SITE_URL}/#localsalon` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  )
}
