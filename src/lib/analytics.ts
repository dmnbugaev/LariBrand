// Типобезопасная обёртка над Яндекс Метрикой № 105193463.
// Все функции безопасны на сервере и при отсутствии счётчика,
// передают только технические параметры — без персональных данных.

import { serviceFromPath } from './seo/services'

export const YM_COUNTER_ID = 105193463

/** Идентификаторы целей. Создаются вручную в интерфейсе Метрики. */
export const YM_GOALS = [
  'booking_click',
  'phone_click',
  'messenger_click',
  'reviews_click',
  'promo_click',
  'service_view',
] as const

export type YmGoal = (typeof YM_GOALS)[number]

type YmParams = Record<string, string>

type Ym = {
  (id: number, action: 'init', config: Record<string, unknown>): void
  (id: number, action: 'reachGoal', goal: string, params?: YmParams): void
  (id: number, action: 'hit', url: string, options?: { referer?: string }): void
  a?: unknown[][]
}

declare global {
  interface Window {
    ym?: Ym
  }
}

function getYm(): Ym | undefined {
  if (typeof window === 'undefined') return undefined
  if (!window.ym) {
    // Та же заглушка-очередь, что создаёт официальный сниппет tag.js:
    // вызовы копятся и обрабатываются после загрузки счётчика.
    const stub = function (...args: unknown[]) {
      const self = stub as unknown as { a?: unknown[][] }
      ;(self.a = self.a ?? []).push(args)
    }
    window.ym = stub as unknown as Ym
  }
  return window.ym
}

/** Отправка цели. Безопасна до загрузки счётчика и в SSR. */
export function ymReachGoal(goal: YmGoal, params?: YmParams): void {
  try {
    const ym = getYm()
    if (!ym) return
    ym(YM_COUNTER_ID, 'reachGoal', goal, params)
  } catch {
    // Аналитика не должна ломать интерфейс.
  }
}

/** Отправка виртуального просмотра страницы (клиентские переходы Next.js). */
export function ymHit(url: string, referer?: string): void {
  try {
    const ym = getYm()
    if (!ym) return
    ym(YM_COUNTER_ID, 'hit', url, referer ? { referer } : undefined)
  } catch {
    // no-op
  }
}

/** Параметр услуги для целей: slug услуги, 'home' или 'promo'. */
export function serviceParamFromPath(pathname: string | null): string {
  const service = serviceFromPath(pathname)
  if (service) return service
  if (pathname === '/promo') return 'promo'
  return 'home'
}
