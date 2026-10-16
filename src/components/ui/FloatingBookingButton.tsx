'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import content from '../../../content/content.json'
import { useMenu } from '../../context/MenuContext'
import { sanitizeHref } from '../../lib/security'
import { ymReachGoal, serviceParamFromPath } from '../../lib/analytics'
import BookingButton from '../analytics/BookingButton'

// при скролле меньше этого значения кнопки скрыты
const SHOW_AFTER_SCROLL_PX = 300

export default function FloatingBookingButton() {
  const { isMenuOpen } = useMenu()
  const pathname = usePathname()
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // В начале страницы кнопок нет — всплывают после первых прокруток экрана
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > SHOW_AFTER_SCROLL_PX)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [pathname])

  // Кнопки прячутся, когда футер (со своей кнопкой записи) доходит до них;
  // при SPA-навигации футер — новый узел, поэтому эффект повторяется на каждый роут
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      // зона обзора срезана снизу на высоту кнопок — срабатывает чуть заранее
      { threshold: 0, rootMargin: '0px 0px -96px 0px' }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [pathname])

  if (pathname === '/promo') return null

  const isVisible = isScrolled && !isFooterVisible && !isMenuOpen

  return (
    <div
      className={[
        'fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-[200]',
        'transition-[opacity,transform] duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 translate-y-[200%] pointer-events-none',
      ].join(' ')}
    >
      <BookingButton
        href={sanitizeHref(content.sing_up_link)}
        placement="floating"
        className="bg-brand-red text-white font-forum text-[17px] px-7 py-[14px] rounded-[14px] shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 no-underline whitespace-nowrap"
      >
        Записаться
      </BookingButton>
      <Link
        href={sanitizeHref(content.telegram_link)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Max"
        onClick={() =>
          ymReachGoal('messenger_click', {
            channel: 'max',
            service: serviceParamFromPath(pathname),
          })
        }
        className="bg-brand-red text-white font-forum text-[17px] px-7 py-[14px] rounded-[14px] shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 no-underline whitespace-nowrap"
      >
        Max
      </Link>
    </div>
  )
}
