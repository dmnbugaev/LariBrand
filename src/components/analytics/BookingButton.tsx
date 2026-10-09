'use client'

import { usePathname } from 'next/navigation'
import { ymReachGoal, serviceParamFromPath } from '../../lib/analytics'

interface BookingButtonProps {
  href: string
  /** Место размещения кнопки: service_page, floating, header, footer, hero, singup_section, promo */
  placement: string
  /** Внешний вид соответствует существующим кнопкам «Записаться». */
  variant?: 'solid' | 'outline'
  className?: string
  ariaLabel?: string
  onClick?: () => void
  children: React.ReactNode
}

/**
 * Кнопка «Записаться» с целью booking_click и параметром услуги
 * (slug страницы, на которой нажата кнопка).
 */
export default function BookingButton({
  href,
  placement,
  variant = 'solid',
  className,
  ariaLabel = 'Записаться онлайн',
  onClick,
  children,
}: BookingButtonProps) {
  const pathname = usePathname()

  return (
    <a
      href={href}
      className={
        className ??
        (variant === 'solid'
          ? 'font-forum text-[20px] inline-block py-[15px] px-[30px] bg-brand-red text-white rounded-[10px] no-underline uppercase font-normal transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95'
          : 'font-forum text-[15px] text-brand-red no-underline transition-opacity duration-200 hover:opacity-70')
      }
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => {
        ymReachGoal('booking_click', {
          service: serviceParamFromPath(pathname),
          placement,
        })
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}
