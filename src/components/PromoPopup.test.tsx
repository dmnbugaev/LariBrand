import { act, fireEvent, render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import PromoPopup from './PromoPopup'
import { PROMO_STORAGE_KEY } from '../lib/promo'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('PromoPopup', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-09-15T12:00:00+04:00'))
    jest.mocked(usePathname).mockReturnValue('/')
    window.sessionStorage.clear()
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 0,
    })
  })

  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it('opens after the scroll threshold and stays dismissed for the session', () => {
    render(<PromoPopup />)

    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument()

    window.scrollY = 239
    fireEvent.scroll(window)
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument()

    window.scrollY = 240
    fireEvent.scroll(window)
    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(60)
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Закрыть окно акции' }))
    expect(window.sessionStorage.getItem(PROMO_STORAGE_KEY)).toBe('1')

    act(() => {
      jest.advanceTimersByTime(260)
    })
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument()
  })

  it('does not render when the campaign is inactive', () => {
    jest.setSystemTime(new Date('2026-09-19T00:00:00+04:00'))
    window.scrollY = 400

    render(<PromoPopup />)
    fireEvent.scroll(window)

    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument()
  })
})
