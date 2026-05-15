import Link from 'next/link'
import content from '../../../content/content.json'

export default function FloatingBookingButton() {
  return (
    <div className="floating-booking fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-[200]">
      <Link
        href={content.sing_up_link}
        aria-label="Записаться онлайн"
        className="bg-brand-red text-white font-forum text-[17px] px-7 py-[14px] rounded-[14px] shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 no-underline whitespace-nowrap"
      >
        Записаться
      </Link>
      <Link
        href={content.telegram_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Max"
        className="bg-brand-red text-white font-forum text-[17px] px-7 py-[14px] rounded-[14px] shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 no-underline whitespace-nowrap"
      >
        Max
      </Link>
    </div>
  )
}
