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

export default function PromoCountdown({ deadline, compact = false, deadlineLabel = 'до 10 сентября включительно' }: PromoCountdownProps) {
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
        compact ? 'p-4' : 'p-5 max-[420px]:p-3 sm:p-6'
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 max-[420px]:gap-2">
        <p className="text-[11px] uppercase tracking-[3px] text-[#7b1231]/70 max-[420px]:text-[9px] max-[420px]:tracking-[1.5px]">
          До конца акции
        </p>
        <p className="text-right text-[12px] uppercase tracking-[2px] text-[#3b0711]/55 max-[420px]:text-[9px] max-[420px]:tracking-[1px]">
          {deadlineLabel}
        </p>
      </div>
      <div className={`grid min-w-0 grid-cols-4 ${compact ? 'gap-2' : 'gap-3 max-[420px]:gap-1.5'}`}>
        {labels.map(([key, label]) => (
          <div key={key} className="min-w-0 bg-[#3b0711] px-2 py-3 text-center text-[#ffe5ef] max-[420px]:px-1.5">
            <span className={`block font-forum leading-none ${compact ? 'text-[26px]' : 'text-[34px] max-[420px]:text-[27px] sm:text-[42px]'}`}>
              {timeLeft ? String(timeLeft[key]).padStart(2, '0') : '--'}
            </span>
            <span className="mt-2 block text-[9px] uppercase tracking-[1.6px] text-[#ffe5ef]/68 max-[420px]:text-[7px] max-[420px]:tracking-[0.6px]">
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
