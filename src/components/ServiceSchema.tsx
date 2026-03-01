interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  image?: string
  priceFrom?: string
}

export default function ServiceSchema({ name, description, url, image, priceFrom }: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'HairSalon',
      name: 'LariBrand',
      url: 'https://laribrand.ru',
      telephone: '+79873298996',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Н.Г. Чернышевского, 145',
        addressLocality: 'Саратов',
        addressRegion: 'Саратовская область',
        addressCountry: 'RU',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Саратов',
    },
    serviceType: 'Уход за волосами',
  }

  if (image) {
    schema.image = `https://laribrand.ru${image}`
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
