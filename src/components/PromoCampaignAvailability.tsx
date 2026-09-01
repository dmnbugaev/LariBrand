'use client'

import { ReactNode, useEffect, useState } from 'react'
import { isPromoActive, PROMO_END } from '@/lib/promo'

type PromoCampaignAvailabilityProps = {
  children: ReactNode
  expired?: ReactNode
}

export default function PromoCampaignAvailability({ children, expired = null }: PromoCampaignAvailabilityProps) {
  const [active, setActive] = useState(() => isPromoActive())

  useEffect(() => {
    const update = () => setActive(isPromoActive())
    update()

    const delay = Math.max(0, new Date(PROMO_END).getTime() - Date.now())
    const timer = window.setTimeout(update, Math.min(delay + 50, 2_147_483_647))
    return () => window.clearTimeout(timer)
  }, [])

  return active ? children : expired
}
