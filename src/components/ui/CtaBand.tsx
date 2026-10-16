'use client'

import Image from 'next/image'
import content from '../../../content/content.json'
import { sanitizeHref } from '../../lib/security'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import BookingButton from '../analytics/BookingButton'

interface CtaBandProps {
  /** Текст-лид; по умолчанию — главный CTA-текст главной страницы. */
  text?: string
  placement?: string
  /** Изображение 3:4 в правой колонке (по умолчанию sing_up_img). */
  image?: string
  imageAlt?: string
}

/**
 * Винный CTA-бэнд (design.md 6.16 / 7.1–7.2): полноширинная плашка акцента,
 * слева текст 7/12, справа портрет в рамке 5/12.
 */
export default function CtaBand({
  text = 'Подберём процедуру под ваши волосы — консультация бесплатна.',
  placement = 'singup_section',
  image,
  imageAlt = 'Записаться в LariBrand',
}: CtaBandProps) {
  const sectionRef = useScrollReveal<HTMLElement>(0.15)
  const src = image ?? content.sing_up_img

  return (
    <section ref={sectionRef} className="reveal bg-accent text-ink-inverse w-full">
      <div className="lb-container lb-section-y-tight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <p className="lb-label lb-label-inverse m-0" style={{ color: 'rgba(251,246,240,0.82)' }}>
              Запись открыта
            </p>
            <h2 className="t-display-1 text-ink-inverse m-0" style={{ fontSize: 'clamp(34px, 4.6vw, 72px)' }}>
              Готовы к переменам?
            </h2>
            <p className="t-body-l m-0 max-w-measure" style={{ color: 'rgba(251,246,240,0.82)' }}>
              {text}
            </p>
            <BookingButton
              href={sanitizeHref(content.sing_up_link)}
              placement={placement}
              className="btn btn-inverse px-10"
            >
              Записаться
            </BookingButton>
          </div>

          <div className="lg:col-span-5 hidden sm:block">
            <div
              className="relative w-full max-w-[380px] mx-auto aspect-[3/4] border overflow-hidden"
              style={{ borderColor: 'rgba(251,246,240,0.35)' }}
            >
              <Image
                src={src}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 60vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
