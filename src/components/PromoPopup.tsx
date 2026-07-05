'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PromoCountdown from './PromoCountdown'
import content from '../../content/content.json'
import { sanitizeHref } from '@/lib/security'

const PROMO_DEADLINE = '2026-07-15T23:59:59+04:00'
const TELEGRAM_LINK = 'https://t.me/Lari_Brand64'

export default function PromoPopup() {
  const pathname = usePathname()
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pathname === '/promo') return
    setRendered(true)
    const t = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(t)
  }, [pathname])

  const close = () => {
    setVisible(false)
    setTimeout(() => setRendered(false), 300)
  }

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center p-5 transition-opacity duration-300 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(22,0,8,0.72)', backdropFilter: 'blur(5px)' }}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-label="Актуальная акция LariBrand"
    >
      <div
        className={`relative grid w-full max-w-[920px] grid-cols-[0.88fr_1.12fr] overflow-hidden border border-white/45 bg-[#ffd2df] text-[#3b0711] shadow-[0_28px_90px_rgba(0,0,0,0.42)] transition-all duration-300 max-[760px]:max-w-[430px] max-[760px]:grid-cols-1 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          aria-label="Закрыть окно акции"
        >
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative min-h-[620px] bg-[#ffc4d5] max-[760px]:hidden">
          <Image
            src="/promo/IMG_3200.gif"
            alt="Специальное предложение LariBrand с 1 по 15 июля"
            fill
            className="object-cover"
            sizes="390px"
            priority
            unoptimized
          />
        </div>

        <div className="relative px-8 py-8 max-[420px]:px-5">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,210,223,0.42))]" />
          <div className="relative">
            <p className="mb-5 w-fit bg-white/72 px-3 py-2 text-[10px] uppercase tracking-[3px] text-[#7b1231]">
              LariBrand / 1-15 июля
            </p>

            <h2 className="mb-4 font-forum text-[48px] font-normal uppercase leading-[0.94] text-[#3b0711] max-[420px]:text-[38px]">
              Специальное предложение
            </h2>
            <p className="mb-5 font-forum text-[21px] uppercase leading-[1.25] text-[#5b1020]/84">
              Комбо 3в1 для волос за 5 500 ₽: глубокое восстановление или зеркальное полотно.
            </p>

            <div className="mb-6">
              <PromoCountdown deadline={PROMO_DEADLINE} compact />
            </div>

            <div className="mb-6 grid gap-2 border-y border-[#3b0711]/12 py-4 text-[15px] uppercase leading-[1.4] text-[#5b1020]/76">
              <p>Терапия глубокого восстановления: 9 700 ₽ - 5 500 ₽</p>
              <p>Зеркальное полотно: 8 900 ₽ - 5 500 ₽</p>
            </div>

            <div className="flex gap-3 max-[440px]:flex-col">
              <Link
                href="/promo"
                onClick={close}
                className="flex min-h-[56px] flex-1 items-center justify-center rounded-[14px] bg-brand-red px-5 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Подробнее
              </Link>
              <a
                href={sanitizeHref(content.sing_up_link)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] flex-1 items-center justify-center rounded-[14px] bg-brand-red px-5 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Записаться
              </a>
            </div>
            <a
              href={sanitizeHref(TELEGRAM_LINK)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-[56px] items-center justify-center rounded-[14px] bg-brand-red px-5 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Написать в Telegram
            </a>
            <button
              onClick={close}
              className="mx-auto mt-4 flex min-h-[56px] min-w-[180px] items-center justify-center rounded-[14px] bg-brand-red px-5 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
