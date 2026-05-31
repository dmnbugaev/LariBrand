'use client'

import { useState, useEffect } from 'react'

const END_DATE = new Date('2026-06-10T23:59:59')

const UNITS = ['дней', 'часов', 'минут', 'секунд'] as const

function calc() {
  const diff = END_DATE.getTime() - Date.now()
  if (diff <= 0) return [0, 0, 0, 0]
  return [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    Math.floor((diff % (1000 * 60)) / 1000),
  ]
}

export default function PromoCountdown() {
  const [values, setValues] = useState<number[]>([0, 0, 0, 0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setValues(calc())
    const id = setInterval(() => setValues(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  const ended = values.every((v) => v === 0)

  if (ended) {
    return (
      <p className="font-forum text-[16px] text-brand-black/50 tracking-[2px] uppercase">
        Акция завершена
      </p>
    )
  }

  return (
    <div className="flex items-start gap-1">
      {UNITS.map((label, i) => (
        <div key={label} className="flex items-start">
          <div className="flex flex-col items-center min-w-[64px] max-[480px]:min-w-[52px]">
            <div className="bg-brand-black text-white font-forum text-[36px] leading-none w-full text-center py-3 rounded-[8px] tabular-nums max-[480px]:text-[26px] max-[480px]:py-2.5">
              {String(values[i]).padStart(2, '0')}
            </div>
            <span className="font-forum text-[10px] text-brand-black/45 tracking-[1.5px] uppercase mt-2 max-[480px]:text-[9px]">
              {label}
            </span>
          </div>
          {i < UNITS.length - 1 && (
            <span className="font-forum text-[30px] text-brand-black/25 leading-none mt-1 mx-1 max-[480px]:text-[22px]">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
