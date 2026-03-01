'use client'

import { useEffect } from 'react'

export default function ScrollAnimation() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.service-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return null
}
