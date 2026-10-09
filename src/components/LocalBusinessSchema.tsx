import { safeJsonLd } from '../lib/security'
import { BUSINESS, SITE_URL } from '../lib/seo/site'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${SITE_URL}/#localsalon`,
    name: BUSINESS.name,
    alternateName: 'Салон красоты LariBrand',
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: '+79873298996',
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'RUB',
    image: `${SITE_URL}${BUSINESS.image}`,
    logo: `${SITE_URL}${BUSINESS.logo}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(BUSINESS.geo.latitude),
      longitude: String(BUSINESS.geo.longitude),
    },
    hasMap: BUSINESS.yandexMapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
      },
    ],
    sameAs: [BUSINESS.social.vk, BUSINESS.social.max],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги салона LariBrand',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Кератиновое выпрямление волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ботокс для волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Биозавивка' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Холодная реконструкция волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Тотальная реконструкция волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Окрашивание волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Стрижка волос' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Афроплетение' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Укладки' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Безопасное выпрямление волос' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  )
}
