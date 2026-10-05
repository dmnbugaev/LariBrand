export const PROMO_START = '2026-10-01T00:00:00+04:00'
export const PROMO_END = '2026-10-11T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 1 по 10 октября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-october-1-10-2026-closed'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_2275.JPG',
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
  benefits: readonly string[]
}

export const PROMO_OFFERS = [
  {
    id: 'shape-refresh',
    title: 'Комбо 3в1 «Обновление формы»',
    subtitle: 'Пилинг + SPA-уход + стрижка',
    description: 'Идеальное решение для обновления длины и оздоровления кожи головы.',
    poster: '/promo/IMG_2277.JPG',
    videos: [],
    duration: '≈ 1,5–2 часа',
    oldPrice: '5 900 ₽',
    price: '3 300 ₽',
    benefits: [
      'Избавит от секущихся и истончённых кончиков',
      'Вернёт стрижке чёткую и аккуратную форму',
      'Напитает волосы по всей длине',
      'Глубоко очистит кожу головы для лучшего роста волос',
    ],
  },
  {
    id: 'mirror-finish',
    title: 'Комбо 3в1 «Зеркальное полотно»',
    subtitle: 'Пилинг + SPA-уход + ботокс в тёплой технике',
    description: 'Интенсивная процедура для зеркального блеска и прикорневого объёма.',
    videos: ['/promo/IMG_2276.mp4', '/promo/IMG_2278.mp4', '/promo/IMG_2280.mp4'],
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 980 ₽',
    price: '5 500 ₽',
    benefits: [
      'Убирает пух и нежелательную волну',
      'Создаёт глянцевый блеск',
      'Пилинг обеспечивает прикорневой объём',
      'SPA-уход защищает структуру от пересушивания',
    ],
  },
  {
    id: 'deep-recovery',
    title: 'Комбо 3в1 «Терапия глубокого восстановления»',
    subtitle: 'Пилинг + холодная реконструкция Dr. Sorbie + визуальное завершение',
    description: 'Мощное восстановление и реконструкция даже для сильно повреждённых волос.',
    videos: ['/promo/IMG_2291.mp4', '/promo/IMG_2294.mp4', '/promo/IMG_2295.mp4'],
    duration: '≈ 2–2,5 часа',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    benefits: [
      'Глубоко восстанавливает повреждённую структуру',
      'Очищает и освежает кожу головы благодаря пилингу',
      'Придаёт волосам здоровый и ухоженный вид',
      'Питает, уплотняет и защищает от ломкости',
    ],
  },
  {
    id: 'cold-reconstruction',
    title: 'Холодная реконструкция с ламинирующим эффектом',
    subtitle: 'Предложение октября в LariBrand',
    description:
      'Процедура холодного восстановления увлажняет, питает и укрепляет волосы — без термического воздействия.',
    poster: '/promo/IMG_2287.JPG',
    videos: ['/promo/IMG_2296.mp4'],
    oldPrice: '6 500 ₽',
    price: '4 500 ₽',
    benefits: [
      'Волосы гладкие, блестящие и шелковистые',
      'Послушные волосы без пуха по всей длине',
      'Глубокое увлажнение и укрепление структуры',
    ],
  },
] as const satisfies readonly PromoOffer[]

export type PromoMasterPrice = {
  id: string
  title: string
  price: string
}

export const PROMO_MASTER_PRICES = {
  poster: '/promo/IMG_2642.JPG',
  periodLabel: '5–11 октября',
  note: 'Фиксированная цена действует только к категории «Мастер».',
  items: [
    { id: 'keratin-botox', title: 'Кератин | Ботокс', price: '4 500 ₽' },
    { id: 'safe-straightening', title: 'Безопасное выпрямление', price: '7 500 ₽' },
  ] as const satisfies readonly PromoMasterPrice[],
} as const

export function getPromoStatus(now: number | Date = Date.now()): PromoStatus {
  const timestamp = now instanceof Date ? now.getTime() : now
  if (timestamp < new Date(PROMO_START).getTime()) return 'scheduled'
  if (timestamp >= new Date(PROMO_END).getTime()) return 'expired'
  return 'active'
}

export function isPromoActive(now: number | Date = Date.now()) {
  return getPromoStatus(now) === 'active'
}
