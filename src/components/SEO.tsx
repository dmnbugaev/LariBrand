import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: object | null
}

const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'LariBrand - Дома эстетики волос',
  description: 'Салон красоты премиум-класса в Саратове',
  url: 'https://laribrand.ru',
  telephone: '+7 (987) 329-89-96',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Саратов',
    postalCode: '410000',
    streetAddress: 'ул. Н.Г. Чернышевского, 145',
  },
  openingHours: '10:00-20:00',
  priceRange: '₽₽₽',
}

const SEO: React.FC<SEOProps> = ({
  title = 'Салон красоты LariBrand в Саратове | Кератин, ботокс, парикмахерские услуги Саратов',
  description = 'Салон красоты LariBrand в Саратове: кератиновое выпрямление, ботокс для волос, стрижки, окрашивание, уход за волосами. Профессиональные парикмахерские услуги.',
  keywords = 'салон красоты саратов, кератин саратов, ботокс для волос саратов, парикмахерские саратов, стрижки саратов, окрашивание волос саратов',
  canonical = 'https://laribrand.ru',
  ogImage = '/og-image.jpg',
  structuredData = null,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="ru" />
      <meta name="geo.region" content="RU-SAR" />
      <meta name="geo.placename" content="Саратов" />
      <meta name="geo.position" content="51.533557;46.034257" />
      <meta name="ICBM" content="51.533557, 46.034257" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData ?? defaultStructuredData),
        }}
      />
    </Head>
  )
}

export default SEO
