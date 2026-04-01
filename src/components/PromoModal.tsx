'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const STORAGE_KEY = 'promo-v1-dismissed'

const OFFERS = [
  {
    emoji: '🌸',
    title: 'Стрижка + Пилинг + SPA-уход',
    newPrice: '2 900 ₽',
    oldPrice: '5 200 ₽',
  },
  {
    emoji: '🌀',
    title: 'Биозавивка классическая',
    newPrice: '5 500 ₽',
    oldPrice: '9 000 ₽',
  },
  {
    emoji: '🎨',
    title: 'Окрашивание + Холодная реконструкция + Dyson',
    newPrice: '5 500 ₽',
    oldPrice: '10 500 ₽',
  },
  {
    emoji: '🌿',
    title: 'Пилинг + Реконструкция + Ботокс',
    newPrice: '4 500 ₽',
    oldPrice: '8 900 ₽',
  },
]

export default function PromoModal() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/promo') return
    if (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) return
    const t = setTimeout(() => setOpen(true), 1800)
    return () => clearTimeout(t)
  }, [pathname])

  const close = () => {
    setOpen(false)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, '1')
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/55"
      style={{ backdropFilter: 'blur(4px)' }}
      onClick={close}
    >
      <div
        className="modal-enter bg-white rounded-[20px] max-w-[480px] w-full max-h-[90dvh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-brand-red px-6 py-5 rounded-t-[20px]">
          <button
            onClick={close}
            aria-label="Закрыть"
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="font-forum text-[12px] text-white/70 uppercase tracking-widest mb-1 m-0">
            Специальное предложение
          </p>
          <h2 className="font-forum text-[26px] text-white m-0 leading-tight">
            Ваше время сиять ✨
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="font-forum text-[15px] text-brand-black/70 mb-4 leading-relaxed">
            Мы подготовили специальные предложения, чтобы Ваш путь к идеальному образу был ещё приятнее:
          </p>

          <div className="flex flex-col gap-2.5 mb-6">
            {OFFERS.map((o, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F0EDE9] rounded-[12px] px-3 py-3">
                <span className="text-[22px] shrink-0">{o.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-forum text-[14px] text-brand-black leading-snug m-0">{o.title}</p>
                </div>
                <div className="text-right shrink-0 ml-1">
                  <div className="font-forum text-[16px] text-brand-red leading-none">{o.newPrice}</div>
                  <div className="font-forum text-[12px] text-brand-black/40 line-through">{o.oldPrice}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href="/promo"
              onClick={close}
              className="flex items-center justify-center w-full py-[15px] bg-brand-red text-white font-forum text-[17px] rounded-[12px] no-underline transition-transform hover:scale-105 active:scale-95"
            >
              Подробнее об акции
            </Link>
            <button
              onClick={close}
              className="font-forum text-[14px] text-brand-black/50 hover:text-brand-black transition-colors py-2"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
