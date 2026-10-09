import { SERVICES, SERVICE_SLUGS, getService, serviceFromPath } from './services'
import { SERVICE_NAV_LINKS } from '../nav-links'
import { YM_GOALS, ymReachGoal, ymHit, YM_COUNTER_ID } from '../analytics'

describe('Реестр услуг (SEO)', () => {
  it('содержит все 10 услуг с уникальными slug', () => {
    expect(SERVICES).toHaveLength(10)
    expect(new Set(SERVICE_SLUGS).size).toBe(SERVICE_SLUGS.length)
  })

  it('у каждой услуги уникальное название и цена «от» указана', () => {
    const names = SERVICES.map((s) => s.name)
    expect(new Set(names).size).toBe(names.length)
    for (const service of SERVICES) {
      expect(service.priceFrom).toBeGreaterThan(0)
    }
  })

  it('у каждой услуги минимум 3 вопроса FAQ с уникальными формулировками', () => {
    for (const service of SERVICES) {
      expect(service.faq.length).toBeGreaterThanOrEqual(3)
      const questions = service.faq.map((f) => f.question)
      expect(new Set(questions).size).toBe(questions.length)
      for (const item of service.faq) {
        expect(item.question).toMatch(/\?$/)
        expect(item.answer.length).toBeGreaterThan(30)
      }
    }
  })

  it('перелинковка ссылается только на существующие услуги и без само-ссылок', () => {
    for (const service of SERVICES) {
      expect(service.related.length).toBeGreaterThanOrEqual(2)
      for (const relatedSlug of service.related) {
        expect(SERVICE_SLUGS).toContain(relatedSlug)
        expect(relatedSlug).not.toBe(service.slug)
      }
    }
  })

  it('каждая услуга достижима из навигации (нет страниц-сирот)', () => {
    const navSlugs = SERVICE_NAV_LINKS.map((l) => l.href.replace(/^\//, ''))
    for (const slug of SERVICE_SLUGS) {
      expect(navSlugs).toContain(slug)
    }
  })

  it('serviceFromPath определяет услугу по пути', () => {
    expect(serviceFromPath('/bioavailability')).toBe('bioavailability')
    expect(serviceFromPath('/bioavailability/')).toBe('bioavailability')
    expect(serviceFromPath('/')).toBeNull()
    expect(serviceFromPath('/promo')).toBeNull()
    expect(serviceFromPath(null)).toBeNull()
    expect(getService('keratin_and_botox')?.priceFrom).toBe(3700)
  })
})

describe('Аналитика (Яндекс Метрика)', () => {
  it('использует существующий счётчик 105193463', () => {
    expect(YM_COUNTER_ID).toBe(105193463)
  })

  it('набор целей фиксирован и содержит ключевые события', () => {
    for (const goal of ['booking_click', 'phone_click', 'messenger_click', 'service_view']) {
      expect(YM_GOALS).toContain(goal)
    }
  })

  it('безопасно работает без window (SSR)', () => {
    expect(() => ymReachGoal('booking_click', { service: 'home' })).not.toThrow()
    expect(() => ymHit('/promo', '/')).not.toThrow()
  })
})
