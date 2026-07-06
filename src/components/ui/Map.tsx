'use client'

import { useEffect, useRef } from 'react'

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mapContainer = containerRef.current
    if (!mapContainer) return

    mapContainer.innerHTML = ''

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa4c44388f23506ce84cd0c42145a6cc5ab329a6cb6819afe9a3f7ae9e6367c4c&width=100%25&height=380&lang=ru_RU&scroll=false'

    mapContainer.appendChild(script)

    return () => {
      mapContainer.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[380px] w-full border border-brand-black"
      aria-label="Карта проезда в LariBrand"
    />
  )
}
