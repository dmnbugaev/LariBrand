export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'LariBrand',
    alternateName: 'Салон красоты LariBrand',
    description:
      'Профессиональный салон красоты в Саратове: кератиновое выпрямление, ботокс для волос, биозавивка, окрашивание, стрижки, тотальная реконструкция волос.',
    url: 'https://laribrand.ru',
    telephone: '+79873298996',
    priceRange: '₽₽',
    image: 'https://laribrand.ru/upload/1762277381106-IMG_5217.JPG',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Н.Г. Чернышевского, 145',
      addressLocality: 'Саратов',
      addressRegion: 'Саратовская область',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.5406',
      longitude: '46.0086',
    },
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
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://vk.com/lari_brand',
      'https://max.ru/u/f9LHodD0cOID7BufLjRhKQsdUk99Sz2soXHkc3bJp__hN1mSBXPsk4-52wg',
    ],
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
