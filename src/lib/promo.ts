export const PROMO_START = '2026-11-01T00:00:00+04:00'
export const PROMO_END = '2026-11-09T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 1 по 8 ноября включительно'
export const PROMO_DEADLINE_LABEL = 'до 8 ноября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-november-1-8-2026-closed'

export const PROMO_HEADLINE = 'Особенное время для ваших волос'
export const PROMO_BENEFIT_LABEL = 'пять предложений по специальной цене'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_4664.JPG',
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
    id: 'shape-refresh',
    title: 'Обновление формы',
    subtitle: 'Комбо 3 в 1 · пилинг + SPA-уход + стрижка',
    description: 'Обновить длину, освежить форму и позаботиться о коже головы за один визит.',
    poster: '/promo/IMG_4681-poster.jpg',
    videos: ['/promo/IMG_4681.mp4'],
    duration: '≈ 1,5–2 часа',
    oldPrice: '5 900 ₽',
    price: '3 500 ₽',
    benefitLabel: 'выгода 2 400 ₽',
    benefits: [
      'Убирает секущиеся и истончённые кончики',
      'Возвращает стрижке аккуратную форму',
      'Глубоко очищает кожу головы',
    ],
  },
  {
    id: 'deep-recovery',
    title: 'Терапия глубокого восстановления',
    subtitle: 'Комбо 3 в 1 · пилинг + холодная реконструкция Dr. Sorbie + визуальное завершение',
    description: 'Уход для повреждённых волос: питание, восстановление и ухоженный вид.',
    poster: '/promo/IMG_4682-poster.jpg',
    videos: ['/promo/IMG_4682.mp4'],
    duration: '≈ 2–2,5 часа',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 4 200 ₽',
    benefits: [
      'Питает и восстанавливает повреждённую структуру',
      'Очищает кожу головы благодаря пилингу',
      'Помогает защитить волосы от ломкости',
    ],
  },
  {
    id: 'color-and-shine',
    title: 'Цвет и блеск',
    subtitle: 'Комбо 3 в 1 · окрашивание корней + тонирование + холодный уход',
    description: 'Ровный цвет, блеск и бережный уход за структурой волос.',
    poster: '/promo/IMG_4685-poster.jpg',
    videos: ['/promo/IMG_4685.mp4'],
    duration: '≈ 2–2,5 часа',
    oldPrice: '10 900 ₽',
    price: '7 500 ₽',
    benefitLabel: 'выгода 3 400 ₽',
    benefits: [
      'Выравнивает тон волос',
      'Уход помогает сохранить цвет и блеск',
      'Питает и защищает от пересушивания',
    ],
  },
  {
    id: 'donatti-reconstruction',
    title: 'Холодная реконструкция Donatti',
    subtitle: 'Уход от бразильского бренда Donatti',
    description: 'Восстанавливающий уход для мягкости, гладкости и блеска волос.',
    poster: '/promo/IMG_4686-poster.jpg',
    videos: ['/promo/IMG_4686.mp4'],
    duration: '≈ 2–2,5 часа',
    oldPrice: '5 900 ₽',
    price: '3 900 ₽',
    benefitLabel: 'выгода 2 000 ₽',
    benefits: [
      'Питает и увлажняет волосы',
      'Придаёт блеск и послушность',
      'Подходит для ухода после моря, хлорированной воды и солнца',
    ],
  },
  {
    id: 'autumn-combo',
    title: 'Осеннее комбо',
    subtitle: 'Пилинг + холодная реконструкция + ботокс в тёплой технике',
    description: 'Интенсивная программа для гладкости, зеркального блеска и прикорневого объёма.',
    poster: '/promo/IMG_4691-poster.jpg',
    videos: ['/promo/IMG_4691.mp4'],
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    benefitLabel: 'выгода 3 400 ₽',
    benefits: [
      'Убирает пух и нежелательную волну',
      'Придаёт глянцевый блеск',
      'Пилинг помогает создать прикорневой объём',
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
