// Единый источник фактических данных о салоне для SEO, схем и аналитики.
// Значения сверены с content.json и юридическими документами сайта.

export const SITE_URL = 'https://laribrand.ru'

export const BUSINESS = {
  name: 'LariBrand',
  legalName: 'ИП Козлова Кристина Сергеевна',
  inn: '643101311828',
  ogrnip: '324645700069027',
  category: 'Салон красоты',
  description:
    'Дом эстетики волос в Саратове: кератиновое выпрямление, ботокс для волос, биозавивка, окрашивание, стрижки, реконструкция волос.',
  phone: '+7 (987) 329-89-96',
  phoneLink: 'tel:+79873298996',
  address: {
    street: 'ул. Н.Г. Чернышевского, 145',
    city: 'Саратов',
    region: 'Саратовская область',
    country: 'RU',
    postalCode: '',
  },
  geo: { latitude: 51.5406, longitude: 46.0086 },
  // Ежедневно 10:00–20:00 (см. Footer и Яндекс Бизнес)
  openingHours: { opens: '10:00', closes: '20:00' },
  priceRange: '₽₽',
  logo: '/icons/Logo.svg',
  image: '/upload/1762277381106-IMG_5217.JPG',
  yandexMapsUrl:
    'https://yandex.ru/maps/org/laribrand/103694209198/',
  reviewsUrl:
    'https://yandex.ru/maps/org/laribrand/103694209198/reviews/',
  social: {
    vk: 'https://vk.com/lari_brand',
    max: 'https://max.ru/u/f9LHodD0cOID7BufLjRhKQsdUk99Sz2soXHkc3bJp__hN1mSBXPsk4-52wg',
  },
} as const

export const BOOKING_URL =
  'https://n782275.yclients.com/company/734555/personal/menu?o='
