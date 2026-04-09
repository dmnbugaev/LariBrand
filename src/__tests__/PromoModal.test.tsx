import { render, screen, fireEvent, act } from '@testing-library/react'
import PromoModal from '../components/PromoModal'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => (
    <a href={href} onClick={onClick}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

beforeEach(() => {
  localStorage.clear()
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('PromoModal', () => {
  it('не показывается сразу после монтирования', () => {
    render(<PromoModal />)
    expect(screen.queryByText(/Весна — время сиять/)).not.toBeInTheDocument()
  })

  it('появляется через 1800мс если не dismissed', () => {
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    expect(screen.getByText(/Весна — время сиять/)).toBeInTheDocument()
  })

  it('не показывается если уже dismisssed в localStorage', () => {
    localStorage.setItem('promo-april-2026-dismissed', '1')
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    expect(screen.queryByText(/Весна — время сиять/)).not.toBeInTheDocument()
  })

  it('кнопка "Закрыть" закрывает модальное окно', () => {
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    fireEvent.click(screen.getByText('Закрыть'))
    expect(screen.queryByText(/Весна — время сиять/)).not.toBeInTheDocument()
    expect(localStorage.getItem('promo-april-2026-dismissed')).toBe('1')
  })

  it('кнопка X (aria-label="Закрыть") закрывает модальное окно', () => {
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    // Two buttons match /закрыть/i — take the one with aria-label (the X icon)
    const buttons = screen.getAllByRole('button', { name: /закрыть/i })
    fireEvent.click(buttons[0]) // first is the SVG X button
    expect(screen.queryByText(/Весна — время сиять/)).not.toBeInTheDocument()
  })

  it('ссылка "Подробнее об акции" ведёт на /promo', () => {
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    const link = screen.getByText('Подробнее об акции')
    expect(link.closest('a')).toHaveAttribute('href', '/promo')
  })

  it('клик по фону закрывает модальное окно', () => {
    render(<PromoModal />)
    act(() => { jest.advanceTimersByTime(1800) })
    // Click the backdrop (the outer div)
    const backdrop = screen.getByText(/Весна — время сиять/).closest('[class*="fixed inset-0"]') ||
      document.querySelector('[class*="fixed inset-0 z-[500]"]')
    if (backdrop) fireEvent.click(backdrop)
    expect(screen.queryByText(/Весна — время сиять/)).not.toBeInTheDocument()
  })
})
