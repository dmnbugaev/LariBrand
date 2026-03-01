'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import content from '../../../content/content.json'
import LinkSingUp from '../ui/LinkSingUp'

export default function Sing_Up() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-fade bg-brand-red pt-[60px] pb-[60px] text-center max-[460px]:px-5">
      <div className="max-w-[420px] w-full aspect-[3/4] rounded-[10px] border border-brand-black mx-auto overflow-hidden relative">
        <Image
          src={content.sing_up_img}
          alt="Lari brand записаться"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 460px) 100vw, 420px"
        />
      </div>
      <LinkSingUp href={content.sing_up_link}>
        записаться
      </LinkSingUp>
    </section>
  )
}
