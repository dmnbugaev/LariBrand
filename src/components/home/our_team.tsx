'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import content from '../../../content/content.json'

export default function OurTeam() {
  const blockRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (blockRef.current) observer.observe(blockRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main
      ref={blockRef}
      className="fade-up text-center p-[60px] pt-[30px] max-[1024px]:p-[30px] max-[768px]:p-[30px] max-[768px]:px-5 max-[768px]:pt-[30px] max-[768px]:pb-[25px]"
    >
      <h1 className="text-[28px] tracking-[3px] mb-[50px] font-normal max-[768px]:mb-[35px]">
        НАША<br />КОМАНДА
      </h1>

      <div className="flex justify-center items-start gap-[60px] max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:gap-[30px] max-[1024px]:max-w-[66.666%] max-[1024px]:mx-auto max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-5 max-[768px]:max-w-none max-[768px]:w-full">
        <div className="bg-brand-bg border border-brand-black rounded-[14px] flex justify-center items-center text-[22px] font-forum font-normal p-[10px] leading-[1.3] w-full h-[354px] box-border flex-1 max-w-[630px] max-[1024px]:h-auto max-[1024px]:aspect-video max-[768px]:h-auto max-[768px]:aspect-video">
          <p>{content.our_team || 'Текст не найден'}</p>
        </div>

        <div className="border border-brand-black rounded-[14px] overflow-hidden relative w-full h-[354px] box-border flex-1 max-w-[630px] max-[1024px]:h-auto max-[1024px]:aspect-video max-[768px]:h-auto max-[768px]:aspect-video">
          <Image
            src={content.our_team_img || '/default-image.jpg'}
            alt="Команда LariBrand"
            width={630}
            height={400}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </main>
  )
}
