'use client'

import { useEffect, useRef } from 'react'

/**
 * Тонкая линия прогресса чтения на страницах услуг (design.md 7.2).
 * rAF-привязка без transition; скрыта < md и при reduced-motion (CSS).
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      bar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`
    }

    const onScroll = () => {
      if (raf === 0) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf !== 0) window.cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={barRef} className="scroll-progress hidden md:block" aria-hidden="true" />
}
