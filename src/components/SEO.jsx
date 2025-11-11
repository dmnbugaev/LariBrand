// components/SEO.jsx
import Head from 'next/head'
import content from '../../content/content.json'

const SEO = ({ 
  title = "Салон красоты LariBrand в Саратове | Кератин, ботокс, парикмахерские услуги",
  description = "Салон красоты LariBrand в Саратове: кератиновое выпрямление, ботокс для волос, стрижки, окрашивание, уход за волосами. Профессиональные парикмахерские услуги.",
  keywords = "салон красоты саратов, кератин саратов, ботокс для волос саратов, парикмахерские саратов, стрижки саратов, окрашивание волос саратов",
  canonical = "https://laribrand-saratov.ru",
  ogImage = "/og-image.jpg",
  structuredData = null
}) => {
  const defaultStructuredData = {
    "@context": "https://laribrand.ru",
    "@type": "BeautySalon",
    "name": "LariBrand - Дома эстетики волос",
    "description": "Салон красоты премиум-класса в Саратове",
    "url": "https://laribrand.ru",
    "telephone": "+7 (987) 329-89-96",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Саратов",
      "postalCode": "410000",
      "streetAddress": "ул. Н.Г. Чернышевского, 145"
    },
    "openingHours": "10:00-20:00",
    "priceRange": "₽₽₽"
  }

  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Дополнительные SEO-теги */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="ru" />
      <meta name="geo.region" content="RU-SAR" />
      <meta name="geo.placename" content="Саратов" />
      <meta name="geo.position" content="51.533557;46.034257" />
      <meta name="ICBM" content="51.533557, 46.034257" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
    </Head>
  )
}

export default SEO