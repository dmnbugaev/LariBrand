'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import content from '../../content/content.json'
import { isPromoActive, PROMO_END, PROMO_MEDIA, PROMO_STORAGE_KEY } from '@/lib/promo'
import { sanitizeHref } from '@/lib/security'

const actionButton =
  'flex min-h-[52px] min-w-0 items-center justify-center rounded-[12px] bg-[#a30f16] px-5 py-4 text-center text-[14px] font-bold uppercase leading-none tracking-[0.1em] text-white no-underline shadow-[0_12px_28px_rgba(103,17,23,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#8f0d13] active:translate-y-0 max-[520px]:min-h-[48px] max-[520px]:text-[13px]'

export default function PromoPopup() {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const closeTimerRef = useRef<number | undefined>(undefined)
  const revealTimerRef = useRef<number | undefined>(undefined)
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pathname !== '/' || !isPromoActive()) {
      setRendered(false)
      setVisible(false)
      return
    }

    if (window.sessionStorage.getItem(PROMO_STORAGE_KEY) === '1') return

    const onScroll = () => {
      if (!isPromoActive()) {
        setRendered(false)
        setVisible(false)
        window.removeEventListener('scroll', onScroll)
        return
      }
      if (window.scrollY < 240 || window.sessionStorage.getItem(PROMO_STORAGE_KEY) === '1') return

      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      setRendered(true)
      revealTimerRef.current = window.setTimeout(() => setVisible(true), 60)
      window.removeEventListener('scroll', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const expiryDelay = Math.max(0, new Date(PROMO_END).getTime() - Date.now())
    const expiryTimer = window.setTimeout(() => {
      setVisible(false)
      setRendered(false)
    }, Math.min(expiryDelay + 50, 2_147_483_647))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(expiryTimer)
      if (revealTimerRef.current !== undefined) window.clearTimeout(revealTimerRef.current)
      if (closeTimerRef.current !== undefined) window.clearTimeout(closeTimerRef.current)
    }
  }, [pathname])

  const close = useCallback(() => {
    window.sessionStorage.setItem(PROMO_STORAGE_KEY, '1')
    setVisible(false)
    closeTimerRef.current = window.setTimeout(() => setRendered(false), 260)
  }, [])

  useEffect(() => {
    if (!rendered) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], input, [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute('disabled'))
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
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
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.removeEventListener('keydown', onKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [close, rendered])

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center p-5 transition-opacity duration-300 max-[560px]:items-end max-[560px]:p-3 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(38, 11, 8, 0.72)', backdropFilter: 'blur(7px)' }}
      onClick={close}
      aria-hidden={!visible}
    >
      <div
        ref={dialogRef}
        className={`relative grid max-h-[calc(100dvh-40px)] w-full max-w-[900px] grid-cols-[0.82fr_1.18fr] overflow-hidden border border-[#fff7e8]/45 bg-[#f7f1e5] text-[#642427] shadow-[0_34px_100px_rgba(39,12,8,0.52)] transition-all duration-300 max-[760px]:max-w-[470px] max-[760px]:grid-cols-1 max-[560px]:max-h-[calc(100dvh-24px)] ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
        aria-modal="true"
        role="dialog"
        aria-labelledby="promo-popup-title"
        aria-describedby="promo-popup-description"
      >
        <button
          ref={closeButtonRef}
          onClick={close}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#a30f16] text-white shadow-[0_8px_20px_rgba(77,7,12,0.28)] transition hover:scale-105 active:scale-95 max-[520px]:right-3 max-[520px]:top-3"
          aria-label="Закрыть окно акции"
        >
          <svg width="15" height="15" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative min-h-[620px] bg-[#e9e1d2] max-[760px]:hidden">
          <Image
            src={PROMO_MEDIA.campaignCover}
            alt="Постер акции LariBrand с 14 по 18 сентября"
            fill
            priority
            sizes="370px"
            className="object-contain"
          />
        </div>

        <div className="relative overflow-y-auto px-9 py-10 max-[760px]:max-h-[calc(100dvh-40px)] max-[520px]:max-h-[calc(100dvh-24px)] max-[520px]:px-5 max-[520px]:pb-5 max-[520px]:pt-4">
          <div className="relative -mx-5 -mt-4 mb-5 hidden h-[150px] overflow-hidden bg-[#e9e1d2] max-[760px]:block">
            <Image
              src={PROMO_MEDIA.campaignCover}
              alt=""
              fill
              priority
              sizes="470px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7f1e5]/20 to-[#f7f1e5]" />
          </div>

          <p className="mb-5 w-fit border border-[#a30f16] px-3 py-2 pr-12 text-[10px] font-bold uppercase tracking-[0.24em] text-[#a30f16] max-[520px]:mb-3 max-[380px]:tracking-[0.12em]">
            LariBrand / 14–18 сентября
          </p>
          <h2
            id="promo-popup-title"
            className="mb-4 font-sans text-[48px] font-black uppercase leading-[0.92] text-[#a30f16] max-[520px]:text-[34px] max-[380px]:text-[30px]"
          >
            Выгода до 60%
          </h2>
          <p
            id="promo-popup-description"
            className="mb-6 text-[19px] leading-[1.42] text-[#642427]/78 max-[520px]:text-[16px]"
          >
            Шесть комплексов для гладкости, объёма, восстановления и смены образа.
          </p>

          <div className="mb-6 grid gap-3 border-y border-[#a30f16]/18 py-5 text-[14px] font-semibold uppercase leading-[1.35] tracking-[0.04em] text-[#642427]/72 max-[520px]:text-[12px]">
            <p>
              <span className="mr-2 text-[#d89c16]">{'//'}</span>Комбо-процедуры от 3 300 ₽
            </p>
            <p>
              <span className="mr-2 text-[#d89c16]">{'//'}</span>Безопасное выпрямление — 8 500 ₽
            </p>
            <p>
              <span className="mr-2 text-[#d89c16]">{'//'}</span>К биозавивке — реконструкция в подарок
            </p>
          </div>

          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.16em] text-[#a30f16]">
            Предложение действует 14–18 сентября
          </p>

          <div className="grid grid-cols-2 gap-3 max-[440px]:grid-cols-1">
            <Link href="/promo" onClick={close} className={actionButton}>
              Подробнее
            </Link>
            <a
              href={sanitizeHref(content.sing_up_link)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={actionButton}
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
