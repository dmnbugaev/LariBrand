'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import YandexMap from '../ui/Map'
import content from '../../../content/content.json'

const NAV_LINKS = [
  { href: '/keratin_and_botox', label: 'Кератин и ботокс' },
  { href: '/safe_hair_straightening', label: 'Безопасное выпрямление' },
  { href: '/cold_hair_reconstruction', label: 'Холодная реконструкция' },
  { href: '/bioavailability', label: 'Биозавивка' },
  { href: '/total_reconstruction', label: 'Тотальная реконструкция' },
  { href: '/hair_coloring', label: 'Окрашивание' },
  { href: '/hair_cutting', label: 'Стрижка волос' },
  { href: '/afro_weaving', label: 'Афро-плетение' },
  { href: '/hair_styling', label: 'Укладки' },
  { href: '/additional_services', label: 'Доп. услуги' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current?.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="footer-anim bg-brand-bg font-forum">
      <div className="px-[60px] pt-[50px] pb-[30px] max-w-[1400px] mx-auto max-[720px]:px-5 max-[720px]:pt-[40px] max-[720px]:pb-[24px]">

        {/* Main grid */}
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-[60px] max-[1100px]:grid-cols-[1fr_1fr] max-[600px]:grid-cols-1 max-[600px]:gap-[32px]">

          {/* Column 1: Brand + Map */}
          <div>
            <h2 className="font-canelope font-normal uppercase text-brand-black text-[40px] tracking-[3px] mb-2 max-[648px]:text-[32px]">
              LariBrand
            </h2>
            <p className="text-[16px] text-brand-black mb-5 leading-[1.5] opacity-80">
              Дом эстетики волос · Саратов
            </p>
            <div className="w-full">
              <YandexMap />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[18px] font-normal text-brand-black uppercase tracking-[1.5px] mb-4 pb-3 border-b border-brand-black">
              Услуги
            </h3>
            <nav className="flex flex-col gap-[10px]">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[15px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="text-[18px] font-normal text-brand-black uppercase tracking-[1.5px] mb-4 pb-3 border-b border-brand-black">
              Контакты
            </h3>
            <div className="flex flex-col gap-[18px]">
              <div>
                <p className="text-[12px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Адрес</p>
                <p className="text-[15px] text-brand-black leading-[1.5] m-0">
                  ул. Н.Г. Чернышевского, 145
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Время работы</p>
                <p className="text-[15px] text-brand-black m-0">10:00 — 20:00</p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Телефон</p>
                <div className="flex flex-col gap-2">
                  {content.phone_number_2 && (
                    <a
                      href={content.phone_number_2_link}
                      className="text-[15px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                    >
                      {content.phone_number_2}
                    </a>
                  )}
                  <a
                    href={content.phone_number_1_link}
                    className="text-[15px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                  >
                    {content.phone_number_1}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[1px] text-brand-black opacity-60 mb-2">Мессенджеры</p>
                <div className="flex gap-3">
                  <a
                    href={content.telegram_link}
                    className="w-[44px] h-[44px] bg-brand-red rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                    aria-label="Написать в Telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/about-us-icon/tg.svg" width={22} height={22} alt="Telegram" />
                  </a>
                  <a
                    href={content.phone_number_1_link}
                    className="w-[44px] h-[44px] bg-brand-red rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                    aria-label="Позвонить"
                  >
                    <Image src="/icons/about-us-icon/ph.svg" width={22} height={22} alt="Телефон" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-[40px] pt-[20px] border-t border-brand-black flex justify-between items-center max-[500px]:flex-col max-[500px]:gap-3 max-[500px]:text-center">
          <p className="text-[13px] text-brand-black opacity-50 m-0">
            © {new Date().getFullYear()} LariBrand. Все права защищены.
          </p>
          <Link
            href={content.sing_up_link}
            className="text-[13px] text-brand-red no-underline transition-opacity duration-200 hover:opacity-70"
          >
            Записаться онлайн →
          </Link>
        </div>
      </div>
    </footer>
  )
}
