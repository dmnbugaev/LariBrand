'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import content from '../../content/content.json'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header className="font-forum text-[18px] h-[80px] bg-white flex flex-col justify-end gap-[10px] fixed top-0 left-0 w-full z-[100] max-[780px]:h-[84px]">
      <nav className="px-[60px] flex justify-between items-center max-[780px]:px-[20px]">
        {/* Logo */}
        <Link href="/" onClick={close} aria-label="На главную страницу" className="logo-link">
          <Image
            src="/icons/Logo.svg"
            alt="Саратов LariBrand"
            width={50}
            height={50}
            className="max-[780px]:h-[53px] max-[780px]:w-[45px]"
            priority
          />
        </Link>

        {/* Address */}
        <div className="flex gap-[30px] ml-auto mr-[60px] max-[780px]:gap-0 max-[780px]:inline max-[780px]:mt-1 max-[780px]:mr-[23px] max-[600px]:mx-auto">
          <p className="m-0 p-0 max-[780px]:text-center max-[780px]:text-[15px]">Дом эстетики волос</p>
          <p className="m-0 p-0 max-[780px]:text-center max-[780px]:text-[15px]">ул.Чернышевского 145</p>
        </div>

        {/* Mobile nav drawer */}
        <div
          className={`burger-links-nav fixed top-0 right-0 h-[100dvh] w-1/4 flex-col justify-start bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.1)] gap-0 transition-[right] duration-[0.4s] ease-in-out z-[150] overflow-hidden flex max-[1250px]:w-[35%] max-[780px]:w-full max-[780px]:max-w-[400px] max-[560px]:max-w-full ${isOpen ? 'right-0' : 'right-[-100%]'}`}
          style={{ right: isOpen ? '0' : '-100%' }}
        >
          <div className="h-full flex flex-col p-5 overflow-hidden box-border burger-menu-content">
            {/* Menu header */}
            <div className="pb-5 border-b border-brand-black mt-[15px] shrink-0">
              <h2 className="m-0 text-2xl font-normal text-brand-black font-forum">МЕНЮ</h2>
            </div>

            {/* Nav links */}
            <div className="burger-links flex-1 flex flex-col gap-2 overflow-y-auto pr-[5px] my-[15px] max-h-[calc(100vh-280px)] box-border">
              {[
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
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="py-3 no-underline text-brand-black text-[1.1rem] border-b border-white transition-colors duration-300 hover:text-brand-red font-forum shrink-0"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Phones */}
            <div className="py-5 border-t border-white border-b border-white-0 m-0 shrink-0">
              <h3 className="m-0 mb-[15px] text-[18px] font-normal text-brand-bg font-forum">
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

            {/* Buttons */}
            <div className="burger-buttons-container flex flex-col gap-[10px] pt-5 mt-auto shrink-0 pb-5">
              <Link
                href={content.sing_up_link}
                onClick={close}
                className="flex justify-center items-center w-full py-[18px] px-5 text-white bg-brand-red font-normal text-[17px] rounded-[14px] no-underline text-center shrink-0 box-border min-h-[56px] font-forum transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Записаться
              </Link>
              <Link
                href={content.telegram_link}
                onClick={close}
                className="flex justify-center items-center w-full py-[18px] px-5 text-white bg-brand-red font-normal text-[17px] rounded-[14px] no-underline text-center shrink-0 box-border min-h-[56px] font-forum transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Telegram
              </Link>
            </div>
          </div>
        </div>

        {/* Burger button */}
        <button
          className={`burger relative w-[40px] h-[26px] bg-transparent border-none cursor-pointer z-[200] mt-[-2px] max-[780px]:mt-[-6px]`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
          <span className="absolute left-0 w-[36px] h-[4px] bg-brand-black rounded-[10px] transition-all duration-300 ease-in-out" />
        </button>
      </nav>

      {/* Bottom border line */}
      <div className="h-[1px] bg-brand-black w-auto" />

      {/* Overlay */}
      <div
        className={`overlay fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out z-[120]`}
        onClick={close}
        aria-hidden="true"
      />
    </header>
  )
}
