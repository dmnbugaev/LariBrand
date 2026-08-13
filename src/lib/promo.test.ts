import { isPromoActive, PROMO_DEADLINE } from './promo'

describe('August 2026 promo availability', () => {
  it('is active through the end of 16 August in Saratov', () => {
    expect(isPromoActive(new Date('2026-08-16T23:59:59.999+04:00'))).toBe(true)
  })

  it('expires exactly at the configured deadline', () => {
    expect(isPromoActive(new Date(PROMO_DEADLINE))).toBe(false)
    expect(isPromoActive(new Date('2026-08-17T00:00:00.001+04:00'))).toBe(false)
  })
})
