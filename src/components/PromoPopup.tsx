'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import content from '../../content/content.json'
import { isPromoActive, PROMO_END, PROMO_MEDIA, PROMO_STORAGE_KEY } from '@/lib/promo'
import { sanitizeHref } from '@/lib/security'

const actionButton =
  'flex min-h-[52px] min-w-0 items-center justify-center rounded-[14px] bg-[#a90016] px-5 py-4 text-center font-forum text-[17px] uppercase leading-none text-white no-underline shadow-[0_12px_28px_rgba(112,0,15,0.24)] transition-transform hover:scale-[1.03] active:scale-95 max-[520px]:min-h-[48px] max-[520px]:text-[15px]'

export default function PromoPopup() {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
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
      window.setTimeout(() => setVisible(true), 60)
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
    }
  }, [pathname])

  useEffect(() => {
    if (!rendered) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        window.sessionStorage.setItem(PROMO_STORAGE_KEY, '1')
        setVisible(false)
        window.setTimeout(() => setRendered(false), 260)
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
  }, [rendered])

  const close = () => {
    window.sessionStorage.setItem(PROMO_STORAGE_KEY, '1')
    setVisible(false)
    window.setTimeout(() => setRendered(false), 260)
  }

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center p-5 transition-opacity duration-300 max-[560px]:items-end max-[560px]:p-3 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(38,0,6,0.68)', backdropFilter: 'blur(7px)' }}
      onClick={close}
      aria-hidden={!visible}
    >
      <div
        ref={dialogRef}
        className={`relative grid max-h-[calc(100dvh-40px)] w-full max-w-[880px] grid-cols-[0.86fr_1.14fr] overflow-hidden rounded-[10px] border border-[#fff6e8]/55 bg-[#fff8ed] text-[#4a1117] shadow-[0_32px_100px_rgba(40,0,6,0.48)] transition-all duration-300 max-[760px]:max-w-[450px] max-[760px]:grid-cols-1 max-[560px]:max-h-[calc(100dvh-24px)] ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
        aria-modal="true"
        role="dialog"
        aria-labelledby="promo-popup-title"
      >
        <button
          ref={closeButtonRef}
          onClick={close}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#a90016] text-white transition-transform hover:scale-105 active:scale-95 max-[520px]:right-3 max-[520px]:top-3"
          aria-label="Закрыть окно акции"
        >
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative min-h-[590px] bg-[#f4eadc] max-[760px]:hidden">
          <Image
            src={PROMO_MEDIA.campaignCover}
            alt="Процедуры LariBrand с выгодой до 60 процентов"
            fill
            sizes="380px"
            className="object-cover"
          />
        </div>

        <div className="relative overflow-y-auto px-8 py-9 max-[760px]:max-h-[calc(100dvh-40px)] max-[520px]:max-h-[calc(100dvh-24px)] max-[520px]:px-4 max-[520px]:py-4">
          <div className="relative mx-auto mb-5 hidden aspect-[4/5] max-h-[260px] w-full max-w-[210px] overflow-hidden rounded-[8px] border border-[#8f0012]/12 bg-[#f4eadc] max-[760px]:block">
            <Image src={PROMO_MEDIA.campaignCover} alt="Акция LariBrand 1–10 сентября" fill sizes="210px" className="object-cover" />
          </div>

          <p className="mb-5 w-fit border border-[#a90016] px-3 py-2 pr-12 text-[10px] uppercase tracking-[3px] text-[#a90016] max-[520px]:mb-3 max-[380px]:tracking-[1.5px]">
            LariBrand / 1–10 сентября
          </p>
          <h2 id="promo-popup-title" className="mb-4 text-[48px] font-normal uppercase leading-[0.92] text-[#8f0012] max-[520px]:text-[32px] max-[380px]:text-[28px]">
            Выгода до 60%
          </h2>
          <p className="mb-6 text-[21px] uppercase leading-[1.3] text-[#4a1117]/76 max-[520px]:text-[16px]">
            Восстанавливаем волосы после лета: три эффективных комбо и две холодные реконструкции.
          </p>

          <div className="mb-6 grid gap-2 border-y border-[#8f0012]/14 py-4 text-[15px] uppercase leading-[1.4] text-[#4a1117]/66 max-[520px]:text-[12px]">
            <p>Комбо-процедуры от 3 300 ₽</p>
            <p>Холодные реконструкции от 4 500 ₽</p>
            <p>Специальные цены до 10 сентября включительно</p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-[440px]:grid-cols-1">
            <Link href="/promo" onClick={close} className={actionButton}>
              Подробнее
            </Link>
            <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" onClick={close} className={actionButton}>
              Записаться
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
