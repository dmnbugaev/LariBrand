import { getPromoStatus, isPromoActive, PROMO_END, PROMO_START } from './promo'

describe('15–22 November 2026 promo availability', () => {
  it('is scheduled before 15 November in Saratov', () => {
    expect(getPromoStatus(new Date('2026-11-14T23:59:59.999+04:00'))).toBe('scheduled')
    expect(isPromoActive(new Date('2026-11-14T23:59:59.999+04:00'))).toBe(false)
  })

  it('starts exactly at the configured start', () => {
    expect(getPromoStatus(new Date(PROMO_START))).toBe('active')
  })

  it('is active through the end of 22 November in Saratov', () => {
    expect(isPromoActive(new Date('2026-11-22T23:59:59.999+04:00'))).toBe(true)
  })

  it('expires exactly at 23 November in Saratov', () => {
    expect(getPromoStatus(new Date(PROMO_END))).toBe('expired')
    expect(isPromoActive(new Date('2026-11-23T00:00:00.001+04:00'))).toBe(false)
  })
})
