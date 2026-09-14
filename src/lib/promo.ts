export const PROMO_START = '2026-09-14T00:00:00+04:00'
export const PROMO_END = '2026-09-19T00:00:00+04:00'
export const PROMO_PERIOD_LABEL = 'с 14 по 18 сентября включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-september-14-18-2026-closed'

export type PromoStatus = 'scheduled' | 'active' | 'expired'

export const PROMO_MEDIA = {
  campaignCover: '/promo/IMG_0378.JPG',
} as const

export type PromoOffer = {
  id: string
  title: string
  subtitle: string
  description: string
  media: string
  duration: string
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
    media: '/promo/IMG_0379.JPG',
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
    media: '/promo/IMG_0380.JPG',
    duration: '≈ 3–3,5 часа',
    oldPrice: '8 900 ₽',
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
    media: '/promo/IMG_0381.JPG',
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
    id: 'safe-straightening',
    title: 'Безопасное выпрямление',
    subtitle: 'Холодная реконструкция + кератин или ботокс',
    description:
      'Комплексная и самая безопасная для волос процедура: холодная реконструкция восстанавливает и питает волос, а горячая создаёт эстетичный вид прямых и блестящих волос.',
    media: '/promo/IMG_0382.JPG',
    duration: '≈ 2,5–3 часа',
    oldPrice: '11 400 ₽',
    price: '8 500 ₽',
    benefits: [],
  },
  {
    id: 'rich-color',
    title: 'Комбо 3в1 «Сочный цвет»',
    subtitle: 'Пилинг + SPA-уход + однотонное окрашивание или тонирование',
    description: 'Комплексный подход, направленный на выравнивание цвета и защиту структуры волос.',
    media: '/promo/IMG_0383.JPG',
    duration: '≈ 2–2,5 часа',
    oldPrice: '10 400 ₽',
    price: '6 000 ₽',
    benefits: [
      'Полностью выравнивает тон',
      'SPA-уход защищает структуру от пересушивания и глубоко питает',
    ],
  },
  {
    id: 'bio-wave',
    title: 'Женская биозавивка',
    subtitle: 'Классическая или корейская техника',
    description:
      'Процедура направлена на формирование кудрей с применением современных составов. Мастер подбирает технику и вид завитка индивидуально перед процедурой.',
    media: '/promo/IMG_0384.JPG',
    duration: '≈ 3–5 часов',
    gift: 'Холодная реконструкция в подарок',
    benefits: [],
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
