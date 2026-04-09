import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/layout/Header'

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href, onClick, ...rest }: {
    children: React.ReactNode; href: string; onClick?: () => void; [key: string]: unknown
  }) => <a href={href} onClick={onClick} {...rest}>{children}</a>
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock next/image
jest.mock('next/image', () => {
  const MockImage = ({ src, alt, ...rest }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...rest} />
  )
  MockImage.displayName = 'MockImage'
  return MockImage
})

describe('Header', () => {
  it('рендерит кнопку бургер-меню', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /открыть меню/i })).toBeInTheDocument()
  })

  it('кнопка бургер-меню открывает мобильное меню', () => {
    render(<Header />)
    const burgerBtn = screen.getByRole('button', { name: /открыть меню/i })
    fireEvent.click(burgerBtn)
    expect(burgerBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /закрыть меню/i })).toBeInTheDocument()
  })

  it('повторный клик по бургер-кнопке закрывает меню', () => {
    render(<Header />)
    const burgerBtn = screen.getByRole('button', { name: /открыть меню/i })
    fireEvent.click(burgerBtn)
    fireEvent.click(screen.getByRole('button', { name: /закрыть меню/i }))
    expect(screen.getByRole('button', { name: /открыть меню/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('логотип ведёт на главную страницу', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: /главную страницу/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('меню содержит ссылку "Записаться"', () => {
    render(<Header />)
    // Open menu first
    fireEvent.click(screen.getByRole('button', { name: /открыть меню/i }))
    const signupLinks = screen.getAllByRole('link', { name: /записаться/i })
    expect(signupLinks.length).toBeGreaterThan(0)
  })
})
