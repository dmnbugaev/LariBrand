'use client'

import { useState, useEffect } from 'react'

export const useCookieConsent = (): boolean => {
  const [hasConsent, setHasConsent] = useState<boolean>(false)

  useEffect(() => {
    const update = () => {
      setHasConsent(localStorage.getItem('cookieConsent') === 'accepted')
    }
    update()
    window.addEventListener('cookieConsentChanged', update)
    return () => window.removeEventListener('cookieConsentChanged', update)
  }, [])

  return hasConsent
}
