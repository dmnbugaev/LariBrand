import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PromoMediaPlayer, { formatPromoVideoTime } from './PromoMediaPlayer'

describe('PromoMediaPlayer', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
      configurable: true,
      value: jest.fn().mockResolvedValue(undefined),
    })
    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      value: jest.fn(),
    })
  })

  it('formats the video time', () => {
    expect(formatPromoVideoTime(0)).toBe('0:00')
    expect(formatPromoVideoTime(65)).toBe('1:05')
  })

  it('starts only after a user action and exposes accessible controls', async () => {
    const user = userEvent.setup()
    render(<PromoMediaPlayer src="/promo/IMG_9151.mp4" poster="/promo/IMG_9120.JPG" title="Видео LariBrand" />)

    const video = screen.getByLabelText('Видео LariBrand')
    expect(video).toHaveAttribute('preload', 'metadata')
    expect(video).not.toHaveAttribute('autoplay')

    await user.click(screen.getByRole('button', { name: 'Воспроизвести видео со звуком' }))
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Выключить звук' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Полноэкранный режим' })).toBeInTheDocument()
  })
})
