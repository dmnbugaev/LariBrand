'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(4px)' }}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-label="Акция LariBrand"
    >
      <div
        className={`relative bg-white max-w-[420px] w-full rounded-[18px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-300 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* accent line */}
        <div className="h-[3px] bg-gradient-to-r from-[#D4870A] to-brand-red" />

        {/* close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-brand-black/35 hover:text-brand-black hover:bg-gray-100 transition-colors"
          aria-label="Закрыть"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="px-7 py-6 pb-7">
          <span className="inline-block font-forum text-[10px] tracking-[3px] uppercase text-brand-red border border-brand-red/30 px-3 py-[5px] rounded-full mb-5">
            Только до 10 июня
          </span>

          <h2 className="font-forum text-brand-black text-[26px] leading-[1.15] font-normal mb-1">
            Лето в LariBrand
          </h2>
          <p className="font-forum text-[17px] text-[#C07008] font-normal mb-4 leading-snug">
            10 дней тотального преображения
          </p>

          <p className="font-forum text-[15px] text-brand-black/60 leading-[1.65] mb-6">
            4 эксклюзивных комбо со скидками{' '}
            <span className="text-brand-red">до 60%</span> — кератин, окрашивание, стрижка, ботокс.
          </p>

          <div className="flex gap-3">
            <Link
              href="/promo"
              onClick={close}
              className="flex-1 font-forum text-[16px] text-white bg-brand-red py-[13px] px-4 rounded-[10px] text-center no-underline transition-all duration-200 hover:scale-[1.02] active:scale-95 hover:shadow-[0_6px_20px_rgba(137,29,26,0.3)]"
            >
              Смотреть акцию
            </Link>
            <button
              onClick={close}
              className="font-forum text-[15px] text-brand-black/40 border border-gray-200 py-[13px] px-4 rounded-[10px] transition-colors hover:border-gray-300 hover:text-brand-black/60"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
