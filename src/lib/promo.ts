export const PROMO_START = '2026-09-01T00:00:00+04:00'
export const PROMO_END = '2026-09-11T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 1 по 10 сентября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-september-2026-closed'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_9146.JPG',
  campaignStory: '/promo/IMG_9120.JPG',
  lebel: '/promo/IMG_9119.JPG',
  brandVideo: '/promo/IMG_9151.mp4',
} as const

export type PromoOffer = {
  id: string
  title: string
  subtitle?: string
  media: string
  mediaType: 'image' | 'video'
  duration: string
  oldPrice: string
  price: string
  benefits: readonly string[]
}

export const PROMO_OFFERS = [
  {
    id: 'keratin-peeling',
    title: 'Комбо 2в1: кератин + пилинг',
    media: '/promo/IMG_9114.mp4',
    mediaType: 'video',
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 700 ₽',
    price: '4 900 ₽',
    benefits: [
      'Полностью убирает пух и нежелательную волну',
      'Создаёт глянцевый блеск и запечатывает кутикулу',
      'Сглаживает «ёлочку» и частично секущиеся кончики',
      'Пилинг очищает кожу головы от себума и стайлингов',
    ],
  },
  {
    id: 'deep-recovery',
    title: 'Комбо 3в1: терапия глубокого восстановления',
    subtitle: 'Пилинг + холодная реконструкция Dr. Sorbie + визуальное завершение',
    media: '/promo/IMG_9117.mp4',
    mediaType: 'video',
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
    id: 'donatti',
    title: 'Холодная реконструкция Donatti',
    media: '/promo/IMG_9118.mp4',
    mediaType: 'video',
    duration: '≈ 2–2,5 часа',
    oldPrice: '5 900 ₽',
    price: '4 500 ₽',
    benefits: [
      'Питает, увлажняет, восстанавливает и придаёт блеск',
      'Делает волосы более послушными',
      'Идеальна после морской и хлорированной воды и палящего солнца',
    ],
  },
  {
    id: 'shape-refresh',
    title: 'Комбо 3в1: обновление формы',
    subtitle: 'Пилинг + SPA-уход + стрижка',
    media: '/promo/IMG_9138.mp4',
    mediaType: 'video',
    duration: '≈ 1,5–2 часа',
    oldPrice: '5 900 ₽',
    price: '3 300 ₽',
    benefits: [
      'Избавляет от секущихся и истончённых кончиков',
      'Возвращает стрижке чёткую и аккуратную форму',
      'Напитывает волосы по всей длине',
      'Глубоко очищает кожу головы для лучшего роста волос',
    ],
  },
  {
    id: 'lebel',
    title: 'Холодная реконструкция Lebel',
    subtitle: 'Счастье для волос от японского бренда',
    media: PROMO_MEDIA.lebel,
    mediaType: 'image',
    duration: '≈ 2–2,5 часа',
    oldPrice: '6 500 ₽',
    price: '5 000 ₽',
    benefits: [
      'Устраняет ломкость и улучшает качество волос',
      'Делает волосы более мягкими и послушными',
      'Идеальна после морской и хлорированной воды и палящего солнца',
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
