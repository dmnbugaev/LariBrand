'use client'

import { useEffect, useRef } from 'react'

interface LetterRevealProps {
  /** Текст для побуквенного появления (plain string). */
  text: string
  /** Дополнительные классы контейнера (типографика задаётся снаружи). */
  className?: string
  /** Шаг задержки между буквами, мс (по умолчанию 35 — паттерн insideart, design.md 15.7.1). */
  step?: number
}

/**
 * Побуквенное появление заголовка (design.md 15.7.1):
 * буквы оборачиваются в span.lr-l, IntersectionObserver (threshold 0.15)
 * добавляет класс .lr-on; задержки выставляются инлайном i×step.
 * Скрытое состояние существует только при работающем JS (`.js .lr`),
 * при prefers-reduced-motion и без JS текст виден сразу (globals.css).
 * Доступность: контейнер aria-hidden — доступное имя задаёт заголовок-родитель
 * (aria-label на <h1>), чтобы скринридер не читал буквы по одной.
 */
export default function LetterReveal({ text, className, step = 35 }: LetterRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const letters = Array.from(el.querySelectorAll<HTMLElement>('.lr-l'))
    if (letters.length === 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        letters.forEach((letter, i) => {
          letter.style.transitionDelay = `${i * step}ms`
        })
        requestAnimationFrame(() => el.classList.add('lr-on'))
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [step, text])

  return (
    <span ref={ref} className={`lr ${className ?? ''}`} aria-hidden="true">
      {text.split(' ').map((word, wi, words) => (
        <span key={wi}>
          {word.split('').map((ch, ci) => (
            <span key={ci} className="lr-l">{ch}</span>
          ))}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
