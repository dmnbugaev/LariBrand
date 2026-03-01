'use client'

import { useEffect, useRef } from 'react'
import YandexMap from './ui/Map'
import content from '../../content/content.json'

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
      { threshold: 0.2 }
    )

    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="footer-anim bg-brand-bg flex justify-center flex-row-reverse gap-[60px] font-forum font-normal text-[30px] px-[60px] pb-[30px] flex-wrap max-[1330px]:flex-row max-[720px]:px-5 max-[648px]:text-2xl max-[648px]:gap-5 max-[520px]:text-[22px]"
    >
      <div className="max-w-[650px] w-full mt-[25px]">
        <YandexMap />
      </div>
      <div className="max-w-[650px] w-full">
        <h1 className="font-canelope font-normal uppercase text-brand-black text-[48px] tracking-[3px] max-[648px]:text-[38px] max-[520px]:text-center">
          LariBrand
        </h1>
        <div className="flex items-center gap-[60px] leading-[60px] max-[1330px]:justify-between max-[648px]:gap-5 max-[520px]:flex-wrap max-[520px]:justify-center max-[520px]:text-center max-[520px]:leading-[37px]">
          <a
            href=""
            className="no-underline text-brand-black max-w-[330px] w-full"
          >
            Где нас найти?<br />ул. Н.Г. Чернышевского, 145
          </a>
          <p className="text-brand-black">
            Время работы:<br />10:00 - 20:00
          </p>
        </div>
        <div className="flex items-center gap-[60px] max-[1330px]:justify-between max-[648px]:gap-5">
          <div className="flex flex-col gap-[30px] max-w-[330px] w-full max-[520px]:gap-[14px] max-[520px]:mt-[10px]">
            {content.phone_number_2 && (
              <a href={content.phone_number_2_link} className="no-underline text-brand-black">
                {content.phone_number_2}
              </a>
            )}
            <a href={content.phone_number_1_link} className="no-underline text-brand-black">
              {content.phone_number_1}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
