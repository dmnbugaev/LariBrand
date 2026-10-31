import { getPromoStatus, isPromoActive, PROMO_END, PROMO_START } from './promo'

describe('1–8 November 2026 promo availability', () => {
  it('is scheduled before 1 November in Saratov', () => {
    expect(getPromoStatus(new Date('2026-10-31T23:59:59.999+04:00'))).toBe('scheduled')
    expect(isPromoActive(new Date('2026-10-31T23:59:59.999+04:00'))).toBe(false)
  })

  it('starts exactly at the configured start', () => {
    expect(getPromoStatus(new Date(PROMO_START))).toBe('active')
  })

  it('is active through the end of 8 November in Saratov', () => {
    expect(isPromoActive(new Date('2026-11-08T23:59:59.999+04:00'))).toBe(true)
  })

  it('expires exactly at 9 November in Saratov', () => {
    expect(getPromoStatus(new Date(PROMO_END))).toBe('expired')
    expect(isPromoActive(new Date('2026-11-09T00:00:00.001+04:00'))).toBe(false)
  })
})
