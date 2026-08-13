'use client'

import { ReactNode, useEffect, useState } from 'react'
import { isPromoActive, PROMO_DEADLINE } from '@/lib/promo'

type PromoCampaignAvailabilityProps = {
  children: ReactNode
  expired?: ReactNode
}

export default function PromoCampaignAvailability({ children, expired = null }: PromoCampaignAvailabilityProps) {
  const [active, setActive] = useState<boolean | null>(null)

  useEffect(() => {
    const update = () => setActive(isPromoActive())
    update()

    const delay = Math.max(0, new Date(PROMO_DEADLINE).getTime() - Date.now())
    const timer = window.setTimeout(update, Math.min(delay + 50, 2_147_483_647))
    return () => window.clearTimeout(timer)
  }, [])

  if (active === null) return null
  return active ? children : expired
}
