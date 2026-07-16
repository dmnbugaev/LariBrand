'use client'

import { useEffect, useRef } from 'react'

type PromoLoopVideoProps = {
  src: string
  title: string
  className?: string
  poster?: string
  startAt?: number
}

export default function PromoLoopVideo({
  src,
  title,
  className = '',
  poster,
  startAt = 0.9,
}: PromoLoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hasSeekedToStart = false

    const play = () => {
      const result = video.play()
      if (result) result.catch(() => undefined)
    }

    const seekToStart = () => {
      if (!Number.isFinite(video.duration) || video.duration <= startAt + 0.2) return
      if (Math.abs(video.currentTime - startAt) > 0.15) {
        video.currentTime = startAt
      }
    }

    const handleLoadedMetadata = () => {
      if (!hasSeekedToStart) {
        hasSeekedToStart = true
        seekToStart()
      }
      play()
    }

    const handleEnded = () => {
      seekToStart()
      play()
    }

    const handleTimeUpdate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= startAt + 0.2) return
      if (video.currentTime >= video.duration - 0.12) {
        seekToStart()
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)
    play()

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [startAt])

  return (
    <video
      ref={videoRef}
      className={`block h-full w-full bg-white object-cover ${className}`}
      autoPlay
      muted
      playsInline
      poster={poster}
      preload="auto"
      aria-label={title}
    >
      <source src={src} />
    </video>
  )
}
