import { render, screen, fireEvent } from '@testing-library/react'
import { BeforeAfterGallery } from '../components/BeforeAfterGallery'

// BeforeAfterSlider uses img, mock it to avoid complexity
jest.mock('../components/BeforeAfterSlider', () => ({
  BeforeAfterSlider: ({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) => (
    <div data-testid="before-after-slider">
      <img src={beforeImage} alt="before" />
      <img src={afterImage} alt="after" />
    </div>
  ),
}))

describe('BeforeAfterGallery', () => {
  it('рендерит кнопки категорий', () => {
    render(<BeforeAfterGallery />)
    expect(screen.getByRole('button', { name: 'Все' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Кератин и ботокс' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Окрашивание' })).toBeInTheDocument()
  })

  it('кнопка "Все" активна по умолчанию', () => {
    render(<BeforeAfterGallery />)
    expect(screen.getByRole('button', { name: 'Все' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('клик по категории меняет активную кнопку', () => {
    render(<BeforeAfterGallery />)
    const btn = screen.getByRole('button', { name: 'Окрашивание' })
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Все' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('фильтрует галерею по выбранной категории', () => {
    render(<BeforeAfterGallery />)
    fireEvent.click(screen.getByRole('button', { name: 'Биозавивка' }))
    // All visible titles should belong to "Биозавивка"
    const titles = screen.getAllByRole('heading', { level: 3 })
    titles.forEach(t => expect(t.textContent).toMatch(/Биозавивка/))
  })

  it('defaultCategory проп устанавливает начальную категорию', () => {
    render(<BeforeAfterGallery defaultCategory="Биозавивка" />)
    expect(screen.getByRole('button', { name: 'Биозавивка' })).toHaveAttribute('aria-pressed', 'true')
  })
})
