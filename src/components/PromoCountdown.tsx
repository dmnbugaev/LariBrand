'use client'

import { useEffect, useState } from 'react'

type PromoCountdownProps = {
  deadline: string
  compact?: boolean
  deadlineLabel?: string
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

export function getTimeLeft(deadline: string, now = Date.now()): TimeLeft {
  const total = Math.max(0, new Date(deadline).getTime() - now)

  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

const labels = [
  ['days', 'дней'],
  ['hours', 'часов'],
  ['minutes', 'минут'],
  ['seconds', 'секунд'],
] as const

export default function PromoCountdown({ deadline, compact = false, deadlineLabel = 'до 16 августа включительно' }: PromoCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(deadline))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [deadline])

  return (
    <div
      className={`border border-[#4b0010]/15 bg-white/72 text-[#3b0711] shadow-[0_18px_48px_rgba(92,0,28,0.12)] backdrop-blur ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[3px] text-[#7b1231]/70">
          До конца акции
        </p>
        <p className="text-[12px] uppercase tracking-[2px] text-[#3b0711]/55">
          {deadlineLabel}
        </p>
      </div>
      <div className={`grid grid-cols-4 ${compact ? 'gap-2' : 'gap-3'}`}>
        {labels.map(([key, label]) => (
          <div key={key} className="bg-[#3b0711] px-2 py-3 text-center text-[#ffe5ef]">
            <span className={`block font-forum leading-none ${compact ? 'text-[26px]' : 'text-[34px] sm:text-[42px]'}`}>
              {timeLeft ? String(timeLeft[key]).padStart(2, '0') : '--'}
            </span>
            <span className="mt-2 block text-[9px] uppercase tracking-[1.6px] text-[#ffe5ef]/68">
              {label}
            </span>
          </div>
        ))}
      </div>
      {timeLeft?.total === 0 ? (
        <p className="mt-3 text-center text-[12px] uppercase tracking-[2px] text-[#7b1231]">
          Акция завершена
        </p>
      ) : null}
    </div>
  )
}
