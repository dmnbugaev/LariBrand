export const PROMO_START = '2026-11-15T00:00:00+04:00'
export const PROMO_END = '2026-11-23T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 15 по 22 ноября включительно'
export const PROMO_DATES_LABEL = '15–22 ноября'
export const PROMO_DEADLINE_LABEL = 'до 22 ноября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-november-15-22-2026-closed'

export const PROMO_HEADLINE = 'Выгода до 60% на комбо-уходы'
export const PROMO_BENEFIT_LABEL = 'четыре комбо по специальной цене'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_6027.JPG',
} as const

export type PromoOffer = {
  id: string
  title: string
  subtitle: string
  description: string
  poster: string
  videos: readonly string[]
  duration: string
  oldPrice: string
  price: string
  benefitLabel: string
  benefits: readonly string[]
}

export const PROMO_OFFERS = [
  {
    id: 'smooth-and-shine',
    title: 'Гладкость и блеск',
    subtitle: 'Комбо 2 в 1 · кератин/ботокс + SPA-уход',
    description: 'Гладкие, зеркально блестящие волосы и уход, который питает их по всей длине.',
    poster: '/promo/IMG_5400-poster.jpg',
    videos: ['/promo/IMG_5400.mp4'],
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 700 ₽',
    price: '4 900 ₽',
    benefitLabel: 'выгода 3 800 ₽',
    benefits: [
      'Полностью убирает пух и нежелательную волну',
      'Создаёт глянцевый блеск и запечатывает кутикулу',
      'Сглаживает «ёлочку» и частично секущиеся кончики',
      'SPA-уход питает и восстанавливает волосы',
    ],
  },
  {
    id: 'deep-recovery',
    title: 'Терапия глубокого восстановления',
    subtitle: 'Комбо 3 в 1 · пилинг + холодная реконструкция Dr. Sorbie + визуальное завершение',
    description: 'Уход для повреждённых волос: питание, восстановление и ухоженный вид.',
    poster: '/promo/IMG_6031-poster.jpg',
    videos: [],
    duration: '≈ 2–2,5 часа',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 4 200 ₽',
    benefits: [
      'Глубоко восстанавливает и питает повреждённую структуру',
      'Очищает кожу головы благодаря пилингу',
      'Придаёт волосам здоровый и ухоженный вид',
      'Помогает защитить волосы от ломкости',
    ],
  },
  {
    id: 'shape-refresh',
    title: 'Обновление формы',
    subtitle: 'Комбо 3 в 1 · пилинг + SPA-уход + стрижка',
    description: 'Обновить длину, освежить форму и позаботиться о коже головы за один визит.',
    poster: '/promo/IMG_6030-poster.jpg',
    videos: [],
    duration: '≈ 1,5–2 часа',
    oldPrice: '5 900 ₽',
    price: '3 500 ₽',
    benefitLabel: 'выгода 2 400 ₽',
    benefits: [
      'Избавляет от секущихся и истончённых кончиков',
      'Возвращает стрижке чёткую и аккуратную форму',
      'Напитывает волосы по всей длине',
      'Глубоко очищает кожу головы для лучшего роста волос',
    ],
  },
  {
    id: 'autumn-combo',
    title: 'Осеннее комбо',
    subtitle: 'Комбо 3 в 1 · пилинг + уход + ботокс в тёплой технике',
    description: 'Интенсивная программа для гладкости, зеркального блеска и прикорневого объёма.',
    poster: '/promo/IMG_5391-poster.jpg',
    videos: ['/promo/IMG_5391.mp4'],
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 3 400 ₽',
    benefits: [
      'Укрощает пух и нежелательную волну',
      'Создаёт глянцевый «голливудский» блеск',
      'Пилинг помогает создать прикорневой объём',
      'SPA-уход защищает структуру волос от пересушивания',
    ],
  },
] as const satisfies readonly PromoOffer[]

export const PROMO_OFFERS_COUNT = PROMO_OFFERS.length

export const PROMO_MIN_PRICE_LABEL = `${Math.min(
  ...PROMO_OFFERS.map((offer) => Number(offer.price.replace(/\D/g, ''))),
)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`

export function getPromoStatus(now: number | Date = Date.now()): PromoStatus {
  const timestamp = now instanceof Date ? now.getTime() : now
  if (timestamp < new Date(PROMO_START).getTime()) return 'scheduled'
  if (timestamp >= new Date(PROMO_END).getTime()) return 'expired'
  return 'active'
}

export function isPromoActive(now: number | Date = Date.now()) {
  return getPromoStatus(now) === 'active'
}
