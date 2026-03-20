'use client'

import Image from 'next/image'
import content from '../../../content/content.json'
import LinkAboutUs from '../ui/LinkAboutUs'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function About_Us() {
  const sectionRef = useScrollReveal(0.15)

  return (
    <section ref={sectionRef} className="section-fade pt-5 pb-[50px] bg-brand-bg">
      <div className="px-[60px] text-center font-forum text-[22px] leading-[1.6] max-[720px]:px-5">
        <p>{content.about_text_1}</p>
        <p>{content.about_text_2}</p>
        <p>{content.about_text_3}</p>
        <p>{content.about_text_4}</p>
      </div>
      <div className="flex justify-center items-center gap-[60px] mt-10 max-[620px]:flex-wrap max-[620px]:gap-10 max-[620px]:px-[100px] max-[425px]:px-[60px]">
        <LinkAboutUs href={content.phone_number_1_link} aria-label="Позвонить нам">
          <Image src="/icons/about-us-icon/ph.svg" width={37} height={37} alt="" aria-hidden="true" />
        </LinkAboutUs>
        <LinkAboutUs href={content.telegram_link} aria-label="Написать в Max">
          <Image src="/icons/about-us-icon/max.svg" width={37} height={37} alt="" aria-hidden="true" />
        </LinkAboutUs>
      </div>
    </section>
  )
}
