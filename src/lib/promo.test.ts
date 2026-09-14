import { getPromoStatus, isPromoActive, PROMO_END, PROMO_START } from './promo'

describe('14–18 September 2026 promo availability', () => {
  it('is scheduled before 14 September in Saratov', () => {
    expect(getPromoStatus(new Date('2026-09-13T23:59:59.999+04:00'))).toBe('scheduled')
    expect(isPromoActive(new Date('2026-09-13T23:59:59.999+04:00'))).toBe(false)
  })

  it('starts exactly at the configured start', () => {
    expect(getPromoStatus(new Date(PROMO_START))).toBe('active')
  })

  it('is active through the end of 18 September in Saratov', () => {
    expect(isPromoActive(new Date('2026-09-18T23:59:59.999+04:00'))).toBe(true)
  })

  it('expires exactly at 19 September in Saratov', () => {
    expect(getPromoStatus(new Date(PROMO_END))).toBe('expired')
    expect(isPromoActive(new Date('2026-09-19T00:00:00.001+04:00'))).toBe(false)
  })
})
