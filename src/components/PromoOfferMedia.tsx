'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { PromoOffer } from '@/lib/promo'

type PromoOfferMediaProps = {
  offer: PromoOffer
  sizes?: string
}

export default function PromoOfferMedia({ offer, sizes = '(max-width: 768px) 90vw, 430px' }: PromoOfferMediaProps) {
  const [activeVideo, setActiveVideo] = useState(0)
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasVideo = offer.videos.length > 0

  useEffect(() => {
    if (!hasVideo) return
    const video = videoRef.current
    const frame = frameRef.current
    if (!video || !frame || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(frame)
    return () => observer.disconnect()
  }, [hasVideo, activeVideo])

  return (
    <div
      ref={frameRef}
      className="relative aspect-[9/16] w-full overflow-hidden bg-[#f5f0e5] shadow-[0_18px_48px_rgba(72,42,28,0.16)]"
    >
      {hasVideo ? (
        <video
          key={offer.videos[activeVideo]}
          ref={videoRef}
          src={offer.videos[activeVideo]}
          poster={offer.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Видеоролик предложения «${offer.title}»`}
          className="h-full w-full object-cover"
        />
      ) : offer.poster ? (
        <Image
          src={offer.poster}
          alt={`Постер предложения «${offer.title}»`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : null}

      {offer.videos.length > 1 ? (
        <div
          className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2"
          role="group"
          aria-label="Видеоролики предложения"
        >
          {offer.videos.map((video, index) => (
            <button
              key={video}
              type="button"
              onClick={() => setActiveVideo(index)}
              aria-label={`Показать ролик ${index + 1} из ${offer.videos.length}`}
              aria-current={index === activeVideo}
              className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                index === activeVideo ? 'bg-white' : 'bg-black/35 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
