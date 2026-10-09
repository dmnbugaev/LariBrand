'use client'

import Link from 'next/link'
import type { YmGoal } from '../../lib/analytics'
import { ymReachGoal } from '../../lib/analytics'
import { sanitizeHref } from '../../lib/security'

interface TrackedLinkProps {
  href: string
  goal: YmGoal
  params?: Record<string, string>
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
  onClick?: () => void
  children: React.ReactNode
}

/**
 * Ссылка с отправкой цели в Яндекс Метрику: booking_click, phone_click и т.д.
 * Внешним ссылкам сохраняет sanitizeHref-политику проекта.
 */
export default function TrackedLink({
  href,
  goal,
  params,
  className,
  target,
  rel,
  ariaLabel,
  onClick,
  children,
}: TrackedLinkProps) {
  const safeHref = sanitizeHref(href)

  return (
    <Link
      href={safeHref}
      className={className}
      {...(target ? { target } : {})}
      {...(target ? { rel: rel ?? 'noopener noreferrer' } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      onClick={() => {
        ymReachGoal(goal, params)
        onClick?.()
      }}
    >
      {children}
    </Link>
  )
}
