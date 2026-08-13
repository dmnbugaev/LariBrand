'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import content from '../../content/content.json'
import { isPromoActive, PROMO_DEADLINE, PROMO_MEDIA, PROMO_STORAGE_KEY } from '@/lib/promo'
import { sanitizeHref } from '@/lib/security'
import PromoLoopVideo from './PromoLoopVideo'

const actionButton =
  'flex min-h-[52px] min-w-0 items-center justify-center rounded-[14px] bg-brand-red px-5 py-4 text-center font-forum text-[17px] uppercase leading-none text-white no-underline shadow-[0_12px_28px_rgba(137,29,26,0.22)] transition-transform duration-200 hover:scale-105 active:scale-95 max-[520px]:min-h-[48px] max-[520px]:text-[15px]'

export default function PromoPopup() {
  const pathname = usePathname()
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
      if (window.scrollY < 220 || window.sessionStorage.getItem(PROMO_STORAGE_KEY) === '1') return
      setRendered(true)
      window.setTimeout(() => setVisible(true), 60)
      window.removeEventListener('scroll', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const expiryDelay = Math.max(0, new Date(PROMO_DEADLINE).getTime() - Date.now())
    const expiryTimer = window.setTimeout(() => {
      setVisible(false)
      setRendered(false)
    }, Math.min(expiryDelay + 50, 2_147_483_647))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(expiryTimer)
    }
  }, [pathname])

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
      style={{ backgroundColor: 'rgba(0,0,0,0.56)', backdropFilter: 'blur(6px)' }}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-label="Специальное предложение LariBrand"
    >
      <div
        className={`relative grid max-h-[calc(100dvh-40px)] w-full max-w-[840px] grid-cols-[0.88fr_1.12fr] overflow-hidden rounded-[8px] border border-white/70 bg-white text-brand-black shadow-[0_28px_90px_rgba(0,0,0,0.34)] transition-all duration-300 max-[760px]:max-w-[430px] max-[760px]:grid-cols-1 max-[560px]:max-h-[calc(100dvh-24px)] ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-200 hover:scale-105 active:scale-95 max-[520px]:right-3 max-[520px]:top-3"
          aria-label="Закрыть окно акции"
        >
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="bg-white max-[760px]:hidden">
          <PromoLoopVideo
            src={PROMO_MEDIA.hotProcedures.video}
            poster={PROMO_MEDIA.hotProcedures.poster}
            title="Специальное предложение до 16 августа LariBrand"
            className="min-h-[560px] object-contain"
            startAt={0}
          />
        </div>

        <div className="relative overflow-y-auto px-8 py-8 max-[760px]:max-h-[calc(100dvh-40px)] max-[520px]:max-h-[calc(100dvh-24px)] max-[520px]:px-4 max-[520px]:py-4">
          <div className="relative mx-auto mb-5 hidden aspect-[9/16] max-h-[280px] w-full max-w-[160px] overflow-hidden rounded-[8px] border border-brand-black/12 bg-white max-[760px]:block">
            <PromoLoopVideo
              src={PROMO_MEDIA.hotProcedures.video}
              poster={PROMO_MEDIA.hotProcedures.poster}
              title="Специальное предложение до 16 августа LariBrand"
              startAt={0}
            />
          </div>

          <p className="mb-5 max-w-full w-fit border border-brand-red px-3 py-2 pr-12 text-[10px] uppercase tracking-[3px] text-brand-red max-[520px]:mb-3 max-[380px]:tracking-[1.5px]">
            LariBrand / до 16 августа
          </p>

          <h2 className="mb-4 font-forum text-[46px] font-normal uppercase leading-[0.96] text-brand-black max-[520px]:text-[31px] max-[380px]:text-[28px]">
            Скидка 50% и комбо 3в1
          </h2>
          <p className="mb-6 break-words text-[21px] uppercase leading-[1.28] text-brand-black/76 max-[520px]:text-[16px]">
            Четыре предложения для гладкости, восстановления и новой формы волос — до 16 августа включительно.
          </p>

          <div className="mb-6 grid gap-2 border-y border-brand-black/12 py-4 text-[15px] uppercase leading-[1.4] text-brand-black/66 max-[520px]:text-[12px]">
            <p>Горячие процедуры от 4 900 ₽</p>
            <p>Комбо 3в1 от 2 900 ₽</p>
            <p>Максимальная выгода 5 500 ₽</p>
            <p>Все подробности и видео результатов на странице акции</p>
          </div>

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
