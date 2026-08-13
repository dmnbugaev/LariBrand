export const PROMO_DEADLINE = '2026-08-17T00:00:00+04:00'
export const PROMO_DEADLINE_LABEL = 'до 16 августа включительно'
export const PROMO_STORAGE_KEY = 'laribrand-promo-popup-august-2026-closed'

export const PROMO_MEDIA = {
  hotProcedures: {
    video: '/promo/august-2026-7259.mp4',
    poster: '/promo/august-2026-7259-poster.jpg',
  },
  deepRecovery: {
    video: '/promo/august-2026-7260.mp4',
    poster: '/promo/august-2026-7260-poster.jpg',
  },
  shapeRefresh: {
    video: '/promo/august-2026-7261.mp4',
    poster: '/promo/august-2026-7261-poster.jpg',
  },
} as const

export function isPromoActive(now: number | Date = Date.now()) {
  const timestamp = now instanceof Date ? now.getTime() : now
  return timestamp < new Date(PROMO_DEADLINE).getTime()
}
