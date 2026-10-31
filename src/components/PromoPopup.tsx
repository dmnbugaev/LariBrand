'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import content from '../../content/content.json'
import { isPromoActive, PROMO_END, PROMO_MEDIA, PROMO_STORAGE_KEY } from '@/lib/promo'
import { sanitizeHref } from '@/lib/security'
import BookingButton from './analytics/BookingButton'

const buttonBase = 'flex min-h-[50px] items-center justify-center rounded-full px-6 py-3 text-center text-[16px] no-underline transition focus-visible:outline-[#EAB93F]'

export default function PromoPopup() {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)

  const close = useCallback(() => {
    window.sessionStorage.setItem(PROMO_STORAGE_KEY, '1')
    setVisible(false)
    window.setTimeout(() => setRendered(false), 260)
  }, [])

  useEffect(() => {
    if (pathname !== '/' || !isPromoActive() || window.sessionStorage.getItem(PROMO_STORAGE_KEY) === '1') return

    const openTimer = window.setTimeout(() => {
      if (!isPromoActive()) return
      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      setRendered(true)
    }, 900)
    const expiryTimer = window.setTimeout(() => {
      setVisible(false)
      setRendered(false)
    }, Math.min(Math.max(0, new Date(PROMO_END).getTime() - Date.now()) + 50, 2_147_483_647))

    return () => {
      window.clearTimeout(openTimer)
      window.clearTimeout(expiryTimer)
      setRendered(false)
      setVisible(false)
    }
  }, [pathname])

  useEffect(() => {
    if (!rendered) return
    const revealTimer = window.setTimeout(() => setVisible(true), 30)
    return () => window.clearTimeout(revealTimer)
  }, [rendered])

  useEffect(() => {
    if (!rendered) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [close, rendered])

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center bg-[#24170F]/75 p-3 backdrop-blur-[7px] transition-opacity duration-300 sm:p-6 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={close}
      aria-hidden={!visible}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-popup-title"
        aria-describedby="promo-popup-description"
        onClick={(event) => event.stopPropagation()}
        className={`relative grid max-h-[calc(100dvh-24px)] w-full max-w-[880px] overflow-hidden rounded-[22px] bg-[#F8F3E7] text-[#3D2418] shadow-[0_34px_100px_rgba(0,0,0,.42)] transition duration-300 md:grid-cols-[.84fr_1.16fr] ${visible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[.97]'}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Закрыть окно акции"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#9B765B]/40 bg-[#F8F3E7] text-[#3D2418] shadow-sm transition hover:bg-white sm:right-5 sm:top-5"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>

        <div className="relative hidden min-h-[570px] bg-[#E9DCC4] md:block">
          <Image src={PROMO_MEDIA.campaignCover} alt="Обложка акции LariBrand 1–8 ноября" fill priority sizes="370px" className="object-cover" />
        </div>

        <div className="max-h-[calc(100dvh-24px)] overflow-y-auto p-5 pt-0 sm:p-9 sm:pt-0 md:p-10 md:pt-14">
          <div className="relative -mx-5 mb-5 h-[150px] overflow-hidden bg-[#E9DCC4] sm:-mx-9 md:hidden">
            <Image src={PROMO_MEDIA.campaignCover} alt="" fill priority sizes="(max-width: 768px) 100vw, 470px" className="object-cover object-[center_42%]" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F8F3E7] to-transparent" />
          </div>
          <p className="mb-4 text-[11px] uppercase tracking-[.25em] text-[#986B46]">Ваше приглашение · 1–8 ноября</p>
          <h2 id="promo-popup-title" className="mb-4 max-w-[420px] font-forum text-[clamp(34px,4vw,54px)] leading-[1.02]">Особенное время для ваших волос</h2>
          <p id="promo-popup-description" className="mb-6 max-w-[420px] text-[17px] leading-relaxed text-[#6A4D39]">
            Пять предложений по специальной цене: от обновления формы до глубокого восстановления и цвета.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-3 border-y border-[#B59573]/40 py-5">
            <div><span className="block font-forum text-[30px] leading-none text-[#A46D12]">5</span><span className="text-[13px] text-[#72553F]">процедур на выбор</span></div>
            <div><span className="block font-forum text-[30px] leading-none text-[#A46D12]">3 500 ₽</span><span className="text-[13px] text-[#72553F]">цены от</span></div>
          </div>
          <p className="mb-6 text-[13px] uppercase tracking-[.14em] text-[#8B5E3D]">Только до 8 ноября включительно</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/promo" onClick={close} className={`${buttonBase} border border-[#9B765B] text-[#3D2418] hover:bg-white`}>Смотреть акцию</Link>
            <BookingButton href={sanitizeHref(content.sing_up_link)} placement="promo_popup" onClick={close} className={`${buttonBase} bg-[#3D2418] text-[#FFF9ED] hover:bg-[#65402B]`}>Записаться</BookingButton>
          </div>
        </div>
      </div>
    </div>
  )
}
