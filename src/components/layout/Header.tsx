'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import content from '../../../content/content.json'

const NAV_LINKS = [
  { href: '/', label: 'ГЛАВНАЯ' },
  { href: '/keratin_and_botox', label: 'КЕРАТИН И БОТОКС' },
  { href: '/safe_hair_straightening', label: 'БЕЗОПАСНОЕ ВЫПРЯМЛЕНИЕ' },
  { href: '/cold_hair_reconstruction', label: 'ХОЛОДНАЯ РЕКОНСТРУКЦИЯ' },
  { href: '/bioavailability', label: 'БИОЗАВИВКА' },
  { href: '/total_reconstruction', label: 'ТОТАЛЬНАЯ РЕКОНСТРУКЦИЯ' },
  { href: '/hair_coloring', label: 'ОКРАШИВАНИЕ' },
  { href: '/hair_cutting', label: 'СТРИЖКА ВОЛОС' },
  { href: '/afro_weaving', label: 'АФРО-ПЛЕТЕНИЕ' },
  { href: '/hair_styling', label: 'УКЛАДКИ' },
  { href: '/additional_services', label: 'ДОП УСЛУГИ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header
      className={`font-forum text-[18px] h-[80px] flex flex-col fixed top-0 left-0 w-full z-[100] transition-all duration-300 max-[780px]:h-[84px] ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
          : 'bg-white'
      }`}
    >
      {/* Навигация занимает всю высоту header (кроме нижней линии) */}
      <nav className="flex-1 px-[60px] flex items-center justify-between max-[780px]:px-[20px]">
        {/* Логотип */}
        <Link href="/" onClick={close} aria-label="На главную страницу">
          <Image
            src="/icons/Logo.svg"
            alt="Саратов LariBrand"
            width={50}
            height={50}
            className="max-[780px]:h-[53px] max-[780px]:w-[45px]"
            priority
          />
        </Link>

        {/* Адрес: на десктопе строка, на мобильных колонка по центру */}
        <div
          className={`
            flex items-center gap-[30px] 
            max-[780px]:flex-col max-[780px]:gap-1 max-[780px]:items-center max-[780px]:flex-1
            ml-auto mr-[60px] max-[780px]:ml-0 max-[780px]:mr-0
          `}
        >
          <p className="m-0 p-0 max-[780px]:text-center max-[780px]:text-[15px]">
            Дом эстетики волос
          </p>
          <p className="m-0 p-0 max-[780px]:text-center max-[780px]:text-[15px]">
            ул.Чернышевского 145
          </p>
        </div>

        {/* Кнопка бургер-меню */}
        <button
          className={`burger ${isOpen ? 'open' : ''} relative w-[40px] h-[26px] bg-transparent border-none cursor-pointer z-[200]`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
        </button>
      </nav>

      {/* Нижняя линия */}
      <div
        className={`h-[1px] bg-brand-black w-full transition-opacity duration-300 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Мобильное меню (drawer) */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-1/4 flex-col justify-start bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.1)] gap-0 transition-[right] duration-[0.4s] ease-in-out z-[150] overflow-hidden flex max-[1250px]:w-[35%] max-[780px]:w-full max-[780px]:max-w-[400px] max-[560px]:max-w-full ${
          isOpen ? 'right-0' : 'right-[-100%]'
        }`}
      >
        <div className="h-full flex flex-col p-5 overflow-hidden box-border burger-menu-content">
          {/* Заголовок меню */}
          <div className="pb-5 border-b border-brand-black mt-[15px] shrink-0">
            <h2 className="m-0 text-2xl font-normal text-brand-black font-forum">МЕНЮ</h2>
          </div>

          {/* Ссылки */}
          <div className="burger-links flex-1 flex flex-col gap-2 overflow-y-auto pr-[5px] my-[15px] max-h-[calc(100vh-280px)] box-border">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="py-3 no-underline text-brand-black text-[1.1rem] border-b border-gray-100 transition-colors duration-300 hover:text-brand-red font-forum shrink-0"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Телефоны */}
          <div className="py-5 border-t border-gray-200 shrink-0">
            <h3 className="m-0 mb-[15px] text-[18px] font-normal text-brand-black/60 font-forum">
              Телефоны для связи:
            </h3>
            <div className="flex flex-col gap-[10px]">
              {content.phone_number_2 && (
                <a
                  href={content.phone_number_2_link}
                  className="no-underline text-brand-black text-[1.1rem] font-normal transition-colors duration-300 hover:text-brand-red font-forum"
                >
                  {content.phone_number_2}
                </a>
              )}
              <a
                href={content.phone_number_1_link}
                className="no-underline text-brand-black text-[1.1rem] font-normal transition-colors duration-300 hover:text-brand-red font-forum"
              >
                {content.phone_number_1}
              </a>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="burger-buttons-container flex flex-col gap-[10px] pt-5 mt-auto shrink-0 pb-5">
            <Link
              href={content.sing_up_link}
              onClick={close}
              aria-label="Записаться онлайн"
              className="flex justify-center items-center w-full py-[18px] px-5 text-white bg-brand-red font-normal text-[17px] rounded-[14px] no-underline text-center shrink-0 box-border min-h-[56px] font-forum transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Записаться
            </Link>
            <Link
              href={content.telegram_link}
              onClick={close}
              aria-label="Написать в Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full py-[18px] px-5 text-white bg-brand-red font-normal text-[17px] rounded-[14px] no-underline text-center shrink-0 box-border min-h-[56px] font-forum transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>

      {/* Оверлей */}
      <div
        className={`overlay ${isOpen ? 'show' : ''} fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out z-[120]`}
        onClick={close}
        aria-hidden="true"
      />
    </header>
  )
}