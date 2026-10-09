import { safeJsonLd } from '../lib/security'
import { SITE_URL, BUSINESS } from '../lib/seo/site'

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  image?: string
  priceFrom?: string
}

/**
 * Service + BreadcrumbList для страницы услуги.
 * Главная › <Услуга> — видимая навигация на страницах услуг отсутствует
 * по дизайну, разметка отражает фактическую структуру сайта.
 */
export default function ServiceSchema({ name, description, url, image, priceFrom }: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@type': 'HairSalon',
      '@id': `${SITE_URL}/#localsalon`,
      name: BUSINESS.name,
      url: SITE_URL,
      telephone: '+79873298996',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Саратов',
    },
    serviceType: 'Уход за волосами',
  }

  if (image) {
    schema.image = `${SITE_URL}${image}`
  }

  if (priceFrom) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: priceFrom,
      availability: 'https://schema.org/InStock',
      url,
    }
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: url,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
    </>
  )
}
