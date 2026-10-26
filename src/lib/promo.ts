export const PROMO_START = '2026-10-26T00:00:00+04:00'
export const PROMO_END = '2026-11-01T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 26 по 31 октября включительно'
export const PROMO_DEADLINE_LABEL = 'до 31 октября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-october-26-31-2026-closed'

/** Заголовок кампании (обложка IMG_3618). */
export const PROMO_HEADLINE = 'Специальное предложение октября'
/**
 * Максимальная выгода по кампании: 9 700 − 5 500 = 4 200 ₽ («Глубокое
 * восстановление»). На обложке указано «до 5 500 ₽» — эту цифру на сайте
 * не используем: она не подтверждается ценами постеров (юрриск R-09).
 */
export const PROMO_BENEFIT_LABEL = 'с выгодой до 4 200 ₽'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_3618.JPG',
  summaryPoster: '/promo/IMG_3619.JPG',
} as const

export type PromoOffer = {
  id: string
  title: string
  subtitle: string
  description: string
  poster?: string
  videos: readonly string[]
  duration?: string
  oldPrice?: string
  price?: string
  gift?: string
  /** Проверяемая выгода: oldPrice − price (для метки в карточке). */
  benefitLabel?: string
  benefits: readonly string[]
}

export const PROMO_OFFERS = [
  {
    id: 'shape-refresh',
    title: 'Комбо 3в1 «Обновление формы»',
    subtitle: 'Пилинг + SPA-уход + стрижка',
    description: 'Идеальное решение для обновления длины и ухода за кожей головы.',
    poster: '/promo/IMG_3620.JPG',
    videos: [],
    duration: '≈ 1,5–2 часа',
    oldPrice: '5 900 ₽',
    price: '3 300 ₽',
    benefitLabel: 'выгода 2 600 ₽',
    benefits: [
      'Избавит от секущихся и истончённых кончиков',
      'Вернёт стрижке чёткую и аккуратную форму — любая стрижка, кроме креативных',
      'Идеально дополняется окрашиванием для нового образа',
      'Глубоко очищает кожу головы, возвращая здоровье и ускоряя рост',
    ],
  },
  {
    id: 'mirror-finish',
    title: 'Комбо 3в1 «Зеркальное полотно»',
    subtitle: 'Пилинг + SPA-уход + ботокс в тёплой технике',
    description: 'Интенсивная процедура для зеркального блеска и прикорневого объёма.',
    poster: '/promo/IMG_3621.JPG',
    videos: [],
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 3 400 ₽',
    benefits: [
      'Убирает пух и нежелательную волну',
      'Создаёт глянцевый блеск',
      'Пилинг обеспечивает прикорневой объём',
      'SPA-уход защищает структуру от пересушивания',
    ],
  },
  {
    id: 'deep-recovery',
    title: 'Комбо 3в1 «Глубокое восстановление»',
    subtitle: 'Пилинг + холодная реконструкция Dr. Sorbie + визуальное завершение',
    description: 'Мощное восстановление и реконструкция даже для сильно повреждённых волос.',
    poster: '/promo/IMG_3622.JPG',
    videos: [],
    duration: '≈ 2–2,5 часа',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 4 200 ₽',
    benefits: [
      'Глубоко восстанавливает повреждённую структуру',
      'Очищает и освежает кожу головы благодаря пилингу',
      'Придаёт волосам здоровый и ухоженный вид',
      'Питает, уплотняет и защищает от ломкости',
    ],
  },
  {
    id: 'hot-straightening',
    title: 'Кератин | Ботокс',
    subtitle: 'Горячая реконструкция — техника выпрямления',
    description:
      'Процедура в горячей технике для выпрямления и плотности волос. Подбор процедуры — в индивидуальном порядке, после консультации с мастером.',
    poster: '/promo/IMG_3623.JPG',
    videos: [],
    duration: '≈ 2,5–3 часа',
    oldPrice: '8 200 ₽',
    price: '4 500 ₽',
    benefitLabel: 'выгода 3 700 ₽',
    benefits: [
      'Прямые, гладкие, плотные и блестящие волосы',
      'Индивидуальный подбор процедуры после консультации с мастером',
    ],
  },
] as const satisfies readonly PromoOffer[]

export function getPromoStatus(now: number | Date = Date.now()): PromoStatus {
  const timestamp = now instanceof Date ? now.getTime() : now
  if (timestamp < new Date(PROMO_START).getTime()) return 'scheduled'
  if (timestamp >= new Date(PROMO_END).getTime()) return 'expired'
  return 'active'
}

export function isPromoActive(now: number | Date = Date.now()) {
  return getPromoStatus(now) === 'active'
}
