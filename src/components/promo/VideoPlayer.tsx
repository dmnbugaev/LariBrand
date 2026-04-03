'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

function fmt(s: number) {
  if (!isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [loading, setLoading] = useState(true)

  const progress = duration ? (currentTime / duration) * 100 : 0

  const scheduleHide = useCallback(() => {
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000)
  }, [])

  const showControls = useCallback(() => {
    setControlsVisible(true)
    if (playing) scheduleHide()
  }, [playing, scheduleHide])

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  useEffect(() => {
    if (playing) {
      scheduleHide()
    } else {
      clearTimeout(hideTimer.current)
      setControlsVisible(true)
    }
  }, [playing, scheduleHide])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    const bar = progressRef.current
    if (!v || !bar || !v.duration) return
    const rect = bar.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current
    if (!v) return
    const val = parseFloat(e.target.value)
    v.volume = val
    setVolume(val)
    v.muted = val === 0
    setMuted(val === 0)
  }, [])

  const toggleFullscreen = useCallback(async () => {
    const c = containerRef.current
    if (!c) return
    try {
      if (!document.fullscreenElement) {
        await c.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (_err) {
      // Fullscreen not supported — silently ignore
    }
  }, [])

  useEffect(() => {
    const fn = () => setFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', fn)
    return () => document.removeEventListener('fullscreenchange', fn)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative bg-black overflow-hidden cursor-pointer select-none ${fullscreen ? '' : 'rounded-[14px] max-[600px]:rounded-none'}`}
      onMouseMove={showControls}
      onMouseLeave={() => playing && setControlsVisible(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full block aspect-video"
        onTimeUpdate={() => {
          const v = videoRef.current
          if (v) setCurrentTime(v.currentTime)
        }}
        onLoadedMetadata={() => {
          const v = videoRef.current
          if (v) { setDuration(v.duration); setLoading(false) }
        }}
        onWaiting={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
        onEnded={() => { setPlaying(false); setControlsVisible(true) }}
        playsInline
      />

      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Big center play button (when paused) */}
      {!playing && !loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[72px] h-[72px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/60 transition-transform hover:scale-110">
            <svg className="w-9 h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="px-4 pt-8 pb-1">
          <div
            ref={progressRef}
            className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative group/bar hover:h-2.5 transition-all duration-150"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-brand-red rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md scale-0 group-hover/bar:scale-100 transition-transform" />
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center gap-3 px-4 pb-3 pt-1">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="text-white hover:text-brand-red transition-colors shrink-0"
            aria-label={playing ? 'Пауза' : 'Воспроизвести'}
          >
            {playing ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Time */}
          <span className="text-white font-forum text-[13px] select-none">
            {fmt(currentTime)} / {fmt(duration)}
          </span>

          <div className="flex-1" />

          {/* Volume */}
          <button
            onClick={toggleMute}
            className="text-white hover:text-brand-red transition-colors shrink-0"
            aria-label="Звук"
          >
            {muted || volume === 0 ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : volume}
            onChange={handleVolume}
            className="w-16 max-[480px]:hidden"
            style={{ accentColor: '#891D1A' }}
            aria-label="Громкость"
          />

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-brand-red transition-colors shrink-0"
            aria-label="Полный экран"
          >
            {fullscreen ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
