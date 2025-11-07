"use client";

import '../styles/components_styles/footer.css'
import Image from 'next/image'
import YandexMap from './UI_kit/map'
import UI_kit_link_footer from './UI_kit/UI_kit_footer/Link_footer'
import { useEffect } from 'react';
import content from '../../content/content.json'

export default function Footer() {

    useEffect(() => {
        const footer = document.querySelector(".footer");
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    footer.classList.add("visible");
                    observer.unobserve(footer);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(footer);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-map">
                <YandexMap />
            </div>
            <div className="footer-txt">
                <h1>Lari Brand</h1>
                <div className="footer-address-and-time">
                    <a href="" >Где нас найти?<br />ул. Н.Г. Чернышевского, 145</a>
                    <p>Время работы:<br />10:00 - 20:00</p>
                </div>
                <div className="footer-contacts">
                    <div className="phone-number-footer">
                        <a href={content.phone_number_2_link}>{content.phone_number_2}</a>
                        <a href={content.phone_number_1_link}>{content.phone_number_1}</a>
                    </div>
                    <div className="footer-btn">                        
                        <UI_kit_link_footer href={content.telegram_link}>
                            <Image
                                src="/icons/footer-icon/tg.svg" 
                                alt="Telegram LariBrand"
                                width={34}      
                                height={34}   
                                className='btn-tg-footer'  
                            />
                        </UI_kit_link_footer>

                        <UI_kit_link_footer href={content.vk_link}>
                            <Image
                                src="/icons/footer-icon/vk.svg" 
                                alt="VK LariBrand"
                                width={40}      
                                height={40}     
                            />
                        </UI_kit_link_footer>

                        <UI_kit_link_footer href={content.whatsapp_link}>
                            <Image
                                src="/icons/footer-icon/wh1.svg" 
                                alt="WhatsApp LariBrand"
                                width={38}      
                                height={38}   
                                className='btn-wh-footer'  
                            />
                        </UI_kit_link_footer>
                    </div>
                </div>
            </div>
        </footer>
    )
}
