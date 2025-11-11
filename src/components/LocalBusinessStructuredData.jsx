// components/LocalBusinessStructuredData.jsx
const LocalBusinessStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "LariBrand - Дома эстетики волос",
    "description": "Салон красоты премиум-класса в Саратове. Кератиновое выпрямление, ботокс для волос, парикмахерские услуги, окрашивание, стрижки.",
    "url": "https://laribrand-saratov.ru",
    "telephone": "+7 (987) 329-89-96",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Саратов",
      "addressRegion": "Саратовская область",
      "postalCode": "410000",
      "streetAddress": "ул. Примерная, д. 123"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.533557",
      "longitude": "46.034257"
    },
    "openingHours": "Mo-Sa 09:00-21:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₽₽₽",
    "service": [
      {
        "@type": "Service",
        "name": "Кератиновое выпрямление волос",
        "description": "Профессиональное кератиновое выпрямление волос в Саратове"
      },
      {
        "@type": "Service",
        "name": "Ботокс для волос",
        "description": "Восстановление и лечение волос ботоксом"
      },
      {
        "@type": "Service",
        "name": "Парикмахерские услуги",
        "description": "Стрижки, окрашивание, укладки"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Саратов"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default LocalBusinessStructuredData