'use client'

import { useState, useEffect } from 'react'

export const useCookieConsent = (): boolean => {
  const [hasConsent, setHasConsent] = useState<boolean>(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    setHasConsent(consent === 'accepted')
  }, [])

  return hasConsent
}
