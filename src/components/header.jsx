"use client"
import Link from 'next/link';
import { useState, useEffect } from "react"
import Image from "next/image"
import '../styles/components_styles/header.css'
import content from '../../content/content.json'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    // Закрытие меню при изменении размера окна
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <header className="header">
            <nav className="nav-and-logo">
                <Link 
                    href="/" 
                    className="logo-link"
                    onClick={() => setIsOpen(false)}
                    aria-label="На главную страницу"
                >
                    <Image
                        src="/icons/Logo.svg"
                        alt="Саратов LariBrand"
                        width={50}
                        height={50}
                        className="header-logo-icons"
                        priority
                    />
                </Link>
                
                    <div className='header-address-and-home'>
                        <p>Дом эстетики волос</p>
                        <p>ул.Чернышевского 145</p>
                    </div>
                        <div className={`nav ${isOpen ? "open" : ""}`}>
                            <div className="burger-menu-content">
                                {/* Заголовок меню */}
                                <div className="burger-menu-header">
                                    <h2 className="burger-menu-title">МЕНЮ</h2>
                                </div>

                                {/* Основные ссылки навигации */}
                                <div className="burger-links">
                                    <Link 
                                        href="/" 
                                        className="burger-link main-page-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ГЛАВНАЯ
                                    </Link>
                                    <Link 
                                        href="/keratin_and_botox" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        КЕРАТИН И БОТОКС
                                    </Link>
                                    <Link 
                                        href="/safe_hair_straightening" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        БЕЗОПАСНОЕ ВЫПРЯМЛЕНИЕ
                                    </Link>
                                    <Link 
                                        href="/cold_hair_reconstruction" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ХОЛОДНАЯ РЕКОНСТРУКЦИЯ
                                    </Link>
                                    <Link 
                                        href="/bioavailability" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        БИОЗАВИВКА
                                    </Link>
                                    <Link 
                                        href="/hair_coloring" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ОКРАШИВАНИЕ
                                    </Link>
                                    <Link 
                                        href="/hair_cutting" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        СТРИЖКА ВОЛОС
                                    </Link>
                                    <Link 
                                        href="/afro_weaving" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        АФРО-ПЛЕТЕНИЕ
                                    </Link>
                                    <Link 
                                        href="/hair_styling" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        УКЛАДКИ
                                    </Link>
                                    <Link 
                                        href="/additional_services" 
                                        className="burger-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ДОП УСЛУГИ
                                    </Link>
                                </div>

                                {/* Телефоны */}
                                <div className="burger-phones">
                                    <h3 className="phones-title">Телефоны для связи:</h3>
                                    <div className="phone-numbers">
                                        <a href={content.phone_number_2_link} className="phone-link">
                                            {content.phone_number_2}
                                        </a>
                                        <a href={content.phone_number_1_link} className="phone-link">
                                            {content.phone_number_1}
                                        </a>
                                    </div>
                                </div>

                                {/* Кнопка записи внизу меню */}
                                <div className="burger-bottom">
                                    <Link 
                                        href={content.sing_up_link} 
                                        className="appointment-button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Записаться
                                    </Link>
                                </div>
                                <div className="burger-bottom">
                                    <Link 
                                        href={content.whatsapp_link} 
                                        className="appointment-button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>
                
                

                    <button
                        className={`burger ${isOpen ? "open" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                
            </nav>

            <div className="header-bottom"></div>

            {/* Затемнение при открытом меню */}
            <div 
                className={`overlay ${isOpen ? "show" : ""}`} 
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            ></div>
        </header>
    )
}