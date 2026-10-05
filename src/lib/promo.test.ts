import { getPromoStatus, isPromoActive, PROMO_END, PROMO_START } from './promo'

describe('1–10 October 2026 promo availability', () => {
  it('is scheduled before 1 October in Saratov', () => {
    expect(getPromoStatus(new Date('2026-09-30T23:59:59.999+04:00'))).toBe('scheduled')
    expect(isPromoActive(new Date('2026-09-30T23:59:59.999+04:00'))).toBe(false)
  })

  it('starts exactly at the configured start', () => {
    expect(getPromoStatus(new Date(PROMO_START))).toBe('active')
  })

  it('is active through the end of 10 October in Saratov', () => {
    expect(isPromoActive(new Date('2026-10-10T23:59:59.999+04:00'))).toBe(true)
  })

  it('expires exactly at 11 October in Saratov', () => {
    expect(getPromoStatus(new Date(PROMO_END))).toBe('expired')
    expect(isPromoActive(new Date('2026-10-11T00:00:00.001+04:00'))).toBe(false)
  })
})
