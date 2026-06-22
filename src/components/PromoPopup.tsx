'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(22,0,2,0.72)', backdropFilter: 'blur(4px)' }}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-label="Актуальная акция LariBrand"
    >
      <div
        className={`relative grid w-full max-w-[760px] grid-cols-[0.9fr_1.1fr] overflow-hidden border border-[#F6EFE5]/18 bg-[#530005] text-[#F6EFE5] shadow-[0_28px_90px_rgba(0,0,0,0.42)] transition-all duration-300 max-[700px]:max-w-[430px] max-[700px]:grid-cols-1 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-[#F6EFE5]/22 bg-[#2D0003]/70 text-[#F6EFE5]/70 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#F6EFE5] active:scale-95"
          aria-label="Закрыть окно акции"
        >
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative min-h-[500px] bg-[#2D0003] max-[700px]:hidden">
          <Image
            src="/images/images_window/photo_2026-06-22_22-25-51.jpg"
            alt="Комбо 3в1 Зеркальное полотно"
            fill
            className="object-cover"
            sizes="310px"
            priority
          />
        </div>

        <div className="relative px-8 py-8 max-[420px]:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(246,239,229,0.13),transparent_34%)]" />
          <div className="relative">
            <p className="mb-5 w-fit border border-[#F6EFE5]/24 px-3 py-2 text-[10px] uppercase tracking-[3px] text-[#F6EFE5]/72">
              Акция LariBrand
            </p>

            <h2 className="mb-4 font-forum text-[44px] font-normal uppercase leading-[0.96] text-[#F6EFE5] max-[420px]:text-[36px]">
              Комбо 3в1
            </h2>
            <p className="mb-6 font-forum text-[20px] uppercase leading-[1.25] text-[#F6EFE5]/82">
              Четыре предложения для восстановления, цвета, формы и зеркальной гладкости.
            </p>

            <div className="mb-7 border-y border-[#F6EFE5]/16 py-5">
              <p className="mb-3 text-[13px] uppercase tracking-[2px] text-[#F6EFE5]/58">
                от 2 900 ₽
              </p>
              <p className="text-[15px] uppercase leading-[1.55] text-[#F6EFE5]/74">
                Терапия глубокого восстановления, обновление формы, сочный цвет, зеркальное полотно.
              </p>
            </div>

            <div className="flex gap-3 max-[420px]:flex-col">
              <Link
                href="/promo"
                onClick={close}
                className="flex min-h-[54px] flex-1 items-center justify-center bg-[#F6EFE5] px-5 py-[14px] text-center font-forum text-[16px] font-normal uppercase tracking-[1.5px] text-[#5A0004] no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Смотреть акцию
              </Link>
              <button
                onClick={close}
                className="min-h-[54px] border border-[#F6EFE5]/22 bg-transparent px-5 py-[14px] font-forum text-[16px] font-normal uppercase tracking-[1.5px] text-[#F6EFE5]/78 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#F6EFE5] active:scale-95"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
