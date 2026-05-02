'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import content from '../../../content/content.json'
import type { Work } from '../../types'

const BeautySalonGallery: React.FC = () => {
  const works: Work[] = content.works || []
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const nextSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1))
  }, [works.length])

  const prevSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1))
  }, [works.length])

  const onTouchStart = (e: React.TouchEvent): void => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextSlide()
    else if (distance < -minSwipeDistance) prevSlide()
  }

  useEffect(() => {
    if (works.length === 0) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [currentIndex, nextSlide, works.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowLeft') prevSlide()
      else if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevSlide, nextSlide])

  if (works.length === 0) return <div className="bg-white py-10 px-5 w-full box-border font-forum" />

  return (
    <div className="bg-white py-10 px-5 w-full box-border font-forum">
      <div
        className="relative max-w-[1037px] mx-auto overflow-hidden rounded-[10px] border border-black aspect-video select-none max-[760px]:aspect-auto max-[760px]:h-[450px] max-[560px]:h-[600px] max-[480px]:h-[550px]"
      >
        <div
          className="flex transition-transform duration-[0.4s] ease-in-out h-full select-none"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {works.map((work) => (
            <div
              key={work.id}
              className="min-w-full relative h-full shrink-0 flex items-center justify-center"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-contain max-[760px]:object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-bg text-brand-black p-6 text-center max-[760px]:p-5">
                <h3 className="m-0 mb-2 text-2xl font-medium tracking-[0.5px] max-[760px]:text-xl max-[480px]:text-[1.1rem]">
                  {work.title}
                </h3>
                <p className="m-0 text-base opacity-90 font-light leading-6 max-[760px]:text-[0.9rem] max-[480px]:text-[0.8rem]">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {works.length > 1 && (
          <>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-5 bg-white/95 border-none w-[50px] h-[50px] rounded-[14px] text-[22px] cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-white text-brand-black z-10 max-[760px]:w-11 max-[760px]:h-11 max-[760px]:rounded-[12px] max-[760px]:text-xl max-[760px]:left-[10px] max-[480px]:w-10 max-[480px]:h-10 max-[480px]:rounded-[10px] max-[480px]:text-lg"
              onClick={prevSlide}
              aria-label="Предыдущий слайд"
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-5 bg-white/95 border-none w-[50px] h-[50px] rounded-[14px] text-[22px] cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-white text-brand-black z-10 max-[760px]:w-11 max-[760px]:h-11 max-[760px]:rounded-[12px] max-[760px]:text-xl max-[760px]:right-[10px] max-[480px]:w-10 max-[480px]:h-10 max-[480px]:rounded-[10px] max-[480px]:text-lg"
              onClick={nextSlide}
              aria-label="Следующий слайд"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default BeautySalonGallery
