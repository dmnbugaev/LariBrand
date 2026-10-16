'use client'

import Link from 'next/link'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BeforeAfterSlider } from '../BeforeAfterSlider'
import { galleryItems } from '../BeforeAfterGallery'
import { getFeaturedWorks } from '../../lib/gallery'

/**
 * Полоса «До и после» на главной: три лучшие работы с ползунком сравнения.
 * Ведёт в галерею работ на странице «Кератин и ботокс».
 */
export default function Works() {
  const sectionRef = useScrollReveal<HTMLElement>(0.15)
  const featured = getFeaturedWorks(galleryItems)

  return (
    <section
      ref={sectionRef}
      className="section-fade bg-white py-[60px] px-[60px] max-[720px]:px-5 max-[720px]:py-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 className="font-forum text-[32px] text-brand-black m-0 max-[540px]:text-[26px]">
          До и после
        </h2>
        <Link
          href="/keratin_and_botox"
          className="font-forum text-[16px] text-brand-red no-underline transition-opacity duration-200 hover:opacity-80"
        >
          Смотреть все работы →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
        {featured.map((item) => (
          <figure key={item.id} className="m-0 flex flex-col gap-3">
            <div className="relative w-full aspect-[3/4]">
              <BeforeAfterSlider
                beforeImage={item.beforeImage!}
                afterImage={item.afterImage!}
              />
            </div>
            <figcaption className="flex flex-col gap-1">
              <span className="font-forum text-[16px] text-brand-black">{item.title}</span>
              <span className="text-[13px] uppercase tracking-[1px] text-brand-black opacity-60">
                {item.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
