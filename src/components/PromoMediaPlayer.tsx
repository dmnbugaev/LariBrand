'use client'

import { useEffect, useRef, useState } from 'react'

type PromoMediaPlayerProps = {
  src: string
  poster: string
  title: string
}

export function formatPromoVideoTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return '0:00'
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export default function PromoMediaPlayer({ src, poster, title }: PromoMediaPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) videoRef.current?.focus()
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      try {
        await video.play()
      } catch {
        return
      }
    } else {
      video.pause()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const toggleFullscreen = async () => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else if (container.requestFullscreen) {
      await container.requestFullscreen()
    } else {
      const iosVideo = video as HTMLVideoElement & { webkitEnterFullscreen?: () => void }
      iosVideo.webkitEnterFullscreen?.()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    if (event.key === ' ' || event.key.toLowerCase() === 'k') {
      event.preventDefault()
      void togglePlayback()
    } else if (event.key === 'ArrowLeft') {
      video.currentTime = Math.max(0, video.currentTime - 5)
    } else if (event.key === 'ArrowRight') {
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 5)
    } else if (event.key.toLowerCase() === 'm') {
      toggleMute()
    } else if (event.key.toLowerCase() === 'f') {
      void toggleFullscreen()
    }
  }

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-[10px] bg-black shadow-[0_30px_90px_rgba(58,0,8,0.35)]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Видеоплеер: ${title}`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onVolumeChange={(event) => {
          setVolume(event.currentTarget.volume)
          setMuted(event.currentTarget.muted)
        }}
        aria-label={title}
      />

      {!playing ? (
        <button
          type="button"
          onClick={() => void togglePlayback()}
          className="absolute inset-0 flex items-center justify-center bg-black/20 text-white transition-colors hover:bg-black/30"
          aria-label="Воспроизвести видео со звуком"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/75 bg-brand-red/95 pl-1 text-[34px] shadow-2xl max-[480px]:h-16 max-[480px]:w-16 max-[480px]:text-[28px]" aria-hidden="true">
            ▶
          </span>
        </button>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-4 pb-4 pt-14 text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => {
            const nextTime = Number(event.target.value)
            if (videoRef.current) videoRef.current.currentTime = nextTime
            setCurrentTime(nextTime)
          }}
          className="mb-3 w-full accent-[#d71d2a]"
          aria-label="Перемотка видео"
        />
        <div className="flex items-center gap-3 text-[13px]">
          <button type="button" onClick={() => void togglePlayback()} className="min-h-10 min-w-10 rounded-full border border-white/45" aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
            {playing ? 'Ⅱ' : '▶'}
          </button>
          <span className="min-w-[76px] tabular-nums">{formatPromoVideoTime(currentTime)} / {formatPromoVideoTime(duration)}</span>
          <button type="button" onClick={toggleMute} className="min-h-10 min-w-10 rounded-full border border-white/45" aria-label={muted ? 'Включить звук' : 'Выключить звук'}>
            {muted ? '🔇' : '🔊'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : volume}
            onChange={(event) => {
              const nextVolume = Number(event.target.value)
              if (!videoRef.current) return
              videoRef.current.volume = nextVolume
              videoRef.current.muted = nextVolume === 0
              setVolume(nextVolume)
              setMuted(nextVolume === 0)
            }}
            className="hidden w-24 accent-[#d71d2a] sm:block"
            aria-label="Громкость"
          />
          <button type="button" onClick={() => void toggleFullscreen()} className="ml-auto min-h-10 rounded-full border border-white/45 px-3" aria-label="Полноэкранный режим">
            ⛶
          </button>
        </div>
      </div>
    </div>
  )
}
