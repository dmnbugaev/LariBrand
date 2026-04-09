import { render, screen, fireEvent } from '@testing-library/react'
import CookieConsent from '../components/CookieConsent'

beforeEach(() => {
  localStorage.clear()
})

describe('CookieConsent', () => {
  it('показывает баннер, если нет записи в localStorage', () => {
    render(<CookieConsent />)
    expect(screen.getByRole('region', { name: /cookie/i })).toBeInTheDocument()
    expect(screen.getByText('Принять')).toBeInTheDocument()
    expect(screen.getByText('Отклонить')).toBeInTheDocument()
  })

  it('не показывает баннер, если consent уже установлен', () => {
    localStorage.setItem('cookieConsent', 'accepted')
    render(<CookieConsent />)
    expect(screen.queryByRole('region', { name: /cookie/i })).not.toBeInTheDocument()
  })

  it('кнопка "Принять" скрывает баннер и записывает в localStorage', () => {
    render(<CookieConsent />)
    fireEvent.click(screen.getByText('Принять'))
    expect(screen.queryByRole('region', { name: /cookie/i })).not.toBeInTheDocument()
    expect(localStorage.getItem('cookieConsent')).toBe('accepted')
  })

  it('кнопка "Отклонить" скрывает баннер и записывает в localStorage', () => {
    render(<CookieConsent />)
    fireEvent.click(screen.getByText('Отклонить'))
    expect(screen.queryByRole('region', { name: /cookie/i })).not.toBeInTheDocument()
    expect(localStorage.getItem('cookieConsent')).toBe('declined')
  })
})
