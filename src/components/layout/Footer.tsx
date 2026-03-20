'use client'

import Link from 'next/link'
import Image from 'next/image'
import YandexMap from '../ui/Map'
import content from '../../../content/content.json'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SERVICE_NAV_LINKS } from '../../lib/nav-links'

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>(0.1)

  return (
    <footer ref={footerRef} className="footer-anim bg-brand-bg font-forum">
      <div className="px-[60px] pt-[50px] pb-[30px] max-w-[1400px] mx-auto max-[720px]:px-5 max-[720px]:pt-[40px] max-[720px]:pb-[24px]">

        <div className="grid grid-cols-[2fr_1fr_1fr] gap-[60px] max-[1100px]:grid-cols-[1fr_1fr] max-[600px]:grid-cols-1 max-[600px]:gap-[32px]">

          {/* Column 1: Brand + Map */}
          <div>
            <h2 className="font-canelope font-normal uppercase text-brand-black text-[42px] tracking-[3px] mb-2 max-[648px]:text-[34px]">
              LariBrand
            </h2>
            <p className="text-[17px] text-brand-black mb-5 leading-[1.5] opacity-80">
              Дом эстетики волос · Саратов
            </p>
            <div className="w-full">
              <YandexMap />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[19px] font-normal text-brand-black uppercase tracking-[1.5px] mb-4 pb-3 border-b border-brand-black">
              Услуги
            </h3>
            <nav className="flex flex-col gap-[10px]" aria-label="Услуги">
              {SERVICE_NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[16px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="text-[19px] font-normal text-brand-black uppercase tracking-[1.5px] mb-4 pb-3 border-b border-brand-black">
              Контакты
            </h3>
            <div className="flex flex-col gap-[18px]">
              <div>
                <p className="text-[13px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Адрес</p>
                <p className="text-[16px] text-brand-black leading-[1.5] m-0">
                  ул. Н.Г. Чернышевского, 145
                </p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Время работы</p>
                <p className="text-[16px] text-brand-black m-0">10:00 — 20:00</p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[1px] text-brand-black opacity-60 mb-1">Телефон</p>
                <div className="flex flex-col gap-2">
                  {content.phone_number_2 && (
                    <a
                      href={content.phone_number_2_link}
                      className="text-[16px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                    >
                      {content.phone_number_2}
                    </a>
                  )}
                  <a
                    href={content.phone_number_1_link}
                    className="text-[16px] text-brand-black no-underline transition-colors duration-200 hover:text-brand-red"
                  >
                    {content.phone_number_1}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[1px] text-brand-black opacity-60 mb-2">Мессенджеры</p>
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
          <p className="text-[15px] text-brand-black opacity-50 m-0">
            © {new Date().getFullYear()} LariBrand. Все права защищены.
          </p>
          <Link
            href={content.sing_up_link}
            className="text-[15px] text-brand-red no-underline transition-opacity duration-200 hover:opacity-70"
          >
            Записаться онлайн →
          </Link>
        </div>

        {/* Реквизиты и юридические ссылки */}
        <div className="mt-6 text-[13px] text-brand-black opacity-60">
          <div>ИП Козлова Кристина Сергеевна</div>
          <div>ИНН 643101311828</div>
          <div>ОГРНИП 324645700069027</div>
          <nav className="flex flex-col md:flex-row gap-3 mt-2" aria-label="Юридические документы">
            <Link href="/privacy-policy" className="no-underline transition-opacity duration-200 hover:opacity-100">
              Политика в отношении обработки персональных данных
            </Link>
            <Link href="/consent" className="no-underline transition-opacity duration-200 hover:opacity-100">
              Согласие на обработку персональных данных
            </Link>
            <Link href="/offer" className="no-underline transition-opacity duration-200 hover:opacity-100">
              Оферта
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
