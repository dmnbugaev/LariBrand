'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { GalleryMedia } from '@/types'

type GalleryMediaCarouselProps = {
  media: GalleryMedia[]
  title: string
}

export default function GalleryMediaCarousel({ media, title }: GalleryMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [videoStarted, setVideoStarted] = useState(false)
  const activeMedia = media[activeIndex]

  useEffect(() => setVideoStarted(false), [activeIndex])

  const showPrevious = () => setActiveIndex((current) => (current - 1 + media.length) % media.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % media.length)

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f4f1ed]">
      {activeMedia.type === 'image' ? (
        <Image
          src={activeMedia.src}
          alt={`${title}, фото ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      ) : videoStarted ? (
        <video
          className="h-full w-full bg-black object-contain"
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={activeMedia.poster}
          aria-label={`${title}, видео ${activeIndex + 1}`}
        >
          <source src={activeMedia.src} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          className="group relative block h-full w-full cursor-pointer"
          onClick={() => setVideoStarted(true)}
          aria-label={`Воспроизвести видео: ${title}`}
        >
          {activeMedia.poster ? (
            <Image
              src={activeMedia.poster}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          ) : null}
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-xl transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {media.length > 1 ? (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Предыдущее фото или видео"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-brand-black shadow-md"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Следующее фото или видео"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-brand-black shadow-md"
          >
            ›
          </button>
          <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
            {activeIndex + 1} / {media.length}
          </span>
        </>
      ) : null}
    </div>
  )
}
