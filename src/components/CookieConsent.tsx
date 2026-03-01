'use client'

import { useState, useEffect } from 'react'

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setShowBanner(true)
  }, [])

  const acceptCookies = (): void => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = (): void => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="font-forum text-sm fixed bottom-0 left-0 right-0 bg-white text-brand-black px-5 py-5 z-[1000] shadow-[0_0_5px_#222222]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-5 max-[768px]:flex-col max-[768px]:text-center max-[768px]:gap-0">
        <p className="m-0 flex-1 text-sm leading-[1.4] max-[768px]:mb-5">
          Мы используем файлы cookie для улучшения работы сайта.
          Продолжая использовать сайт, вы соглашаетесь с этим.
        </p>
        <div className="flex flex-row-reverse gap-5 shrink-0">
          <button
            className="bg-brand-red text-white border border-brand-black py-[10px] px-0 text-center w-[110px] rounded-[10px] cursor-pointer text-sm transition-all hover:scale-105"
            onClick={acceptCookies}
          >
            Принять
          </button>
          <button
            className="bg-transparent text-brand-black border border-brand-black py-[10px] px-0 text-center rounded-[10px] w-[110px] cursor-pointer text-sm"
            onClick={declineCookies}
          >
            Отклонить
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
