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
      aria-label="Актуальная акция LariBrand"
    >
      <div
        className={`relative bg-[#f8f5f1] max-w-[440px] w-full overflow-hidden border border-white/25 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition-all duration-300 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[3px] bg-brand-red" />
        <div className="absolute left-0 top-0 h-full w-[1px] bg-brand-black/10" />
        <div className="absolute right-12 top-0 h-full w-[1px] bg-brand-black/8" />

        <button
          onClick={close}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-[12px] border border-brand-black/10 bg-white/60 text-brand-black/40 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-brand-black active:scale-95"
          aria-label="Закрыть окно акции"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative px-7 py-7">
          <div className="mb-5 flex flex-wrap gap-2 pr-10">
            <span className="inline-block font-forum text-[10px] tracking-[3px] uppercase text-white bg-brand-black px-3 py-[7px]">
              До 20 июня
            </span>
            <span className="inline-block font-forum text-[10px] tracking-[3px] uppercase text-brand-red border border-brand-red/30 bg-white/45 px-3 py-[6px]">
              Скидка до 60%
            </span>
          </div>

          <h2 className="font-forum text-brand-black text-[36px] leading-[1.02] font-normal mb-2">
            Акция LariBrand
          </h2>
          <p className="font-forum text-[21px] text-brand-red font-normal mb-5 leading-snug">
            Продлеваем удовольствие
          </p>

          <p className="font-forum text-[15px] text-brand-black/62 leading-[1.65] mb-6">
            Четыре сезонных комбо для блеска, цвета, формы и ухода за кожей головы.
            Акция действует до 20 июня.
          </p>

          <div className="mb-6 border-y border-brand-black/10 py-4">
            <p className="font-forum text-[11px] uppercase tracking-[3px] text-brand-black/38">
              Кератин/ботокс · цвет · стрижка · SPA-уход
            </p>
          </div>

          <div className="flex gap-3 max-[420px]:flex-col">
            <Link
              href="/promo"
              onClick={close}
              className="flex min-h-[56px] flex-1 items-center justify-center rounded-[14px] bg-brand-red px-5 py-[14px] text-center font-forum text-[17px] font-normal uppercase tracking-[1px] text-white no-underline shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Получить скидку
            </Link>
            <button
              onClick={close}
              className="min-h-[56px] rounded-[14px] border border-brand-black/12 bg-white px-5 py-[14px] font-forum text-[17px] font-normal uppercase tracking-[1px] text-brand-black transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
