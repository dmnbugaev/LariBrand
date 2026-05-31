import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCountdown from '@/components/promo/PromoCountdown'
import content from '../../../content/content.json'

export const metadata: Metadata = {
  title: 'Акция: Лето в LariBrand — скидки до 60%',
  description:
    '4 эксклюзивных комбо со скидкой до 60%. Только с 1 по 10 июня в салоне LariBrand, Саратов.',
  openGraph: {
    title: 'Лето в LariBrand — 10 дней тотального преображения',
    description:
      'Скидки до 60% на комплексные процедуры: кератин, окрашивание, стрижка, ботокс.',
    images: [{ url: '/promo/IMG_8814.JPG' }],
  },
}

const COMBOS = [
  {
    n: 1,
    title: 'Зеркальное полотно',
    image: '/promo/IMG_8827.JPG',
  },
  {
    n: 2,
    title: 'Сочный цвет',
    image: '/promo/IMG_8821.JPG',
  },
  {
    n: 3,
    title: 'Обновление формы',
    image: '/promo/IMG_8823.JPG',
  },
  {
    n: 4,
    title: 'Стоп-сечение',
    image: '/promo/IMG_8825.JPG',
  },
]

const REASONS = [
  'В составе комбо каждая услуга обходится значительно дешевле, чем по отдельности.',
  'Процедуры усиливают действие друг друга, решая проблемы волос комплексно.',
  'Вы получаете полноценное тотальное восстановление за один визит.',
]

const WORKS = [
  {
    src: '/promo/IMG_8830.JPG',
    alt: 'Пилинг, холодная реконструкция, ботокс в тёплой технике, стрижка каскад',
  },
  { src: '/promo/IMG_8831.JPG', alt: 'Стрижка, пилинг, СПА-уход' },
  { src: '/promo/IMG_8834.JPG', alt: 'Комбо 3в1: стрижка, пилинг, SPA-уход' },
  {
    src: '/promo/IMG_8837.JPG',
    alt: 'Однотонное окрашивание, холодная реконструкция, пилинг',
  },
  { src: '/promo/IMG_8838.JPG', alt: 'Стрижка, пилинг, СПА-уход' },
]

const VIDEOS = [
  '/promo/IMG_8850.mp4',
  '/promo/IMG_8851.mp4',
  '/promo/IMG_8852.mp4',
]

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px] text-brand-black font-forum bg-white">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="flex flex-col items-center justify-center text-center px-5 py-[80px] max-[640px]:py-[60px]">
          <span className="inline-block font-forum text-[11px] tracking-[4px] uppercase text-brand-red/70 border border-brand-red/25 px-4 py-[6px] rounded-full mb-7">
            1 — 10 июня 2026
          </span>

          <h1 className="font-forum font-normal leading-[1.1] mb-3 hero-title"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}>
            Лето в LariBrand
          </h1>

          <p className="font-forum font-normal tracking-[1px] uppercase text-[#C07008] mb-6"
            style={{ fontSize: 'clamp(16px, 2.2vw, 26px)' }}>
            10 дней тотального преображения
          </p>

          <p className="font-forum text-[16px] text-brand-black/55 mb-10 max-w-[480px] leading-[1.75] max-[480px]:text-[15px]">
            4 эксклюзивных комбо со скидкой{' '}
            <span className="text-brand-red">до 60%</span> — только для тех,
            кто хочет полного преображения за один визит
          </p>

          <div className="mb-10 flex flex-col items-center gap-4">
            <p className="font-forum text-[11px] tracking-[3px] uppercase text-brand-black/35">
              До конца акции осталось
            </p>
            <PromoCountdown />
          </div>

          <a
            href={content.sing_up_link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-forum text-[18px] text-white bg-brand-red py-[15px] px-[44px] rounded-[12px] no-underline uppercase tracking-[0.5px] transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
          >
            Записаться
          </a>
        </section>

        <div className="h-[1px] bg-gray-100 w-full" />

        {/* ── Combos ───────────────────────────────────────────── */}
        <section className="px-5 py-[80px] max-[640px]:py-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <h2
              className="font-forum font-normal text-center text-brand-black mb-2"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Выбери своё комбо
            </h2>
            <p className="font-forum text-center text-[12px] tracking-[3px] uppercase text-brand-black/35 mb-12">
              4 предложения · скидки до 60%
            </p>

            <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1 max-[560px]:max-w-[420px] max-[560px]:mx-auto">
              {COMBOS.map((combo) => (
                <div
                  key={combo.n}
                  className="relative overflow-hidden rounded-[16px]"
                >
                  <Image
                    src={combo.image}
                    alt={`Комбо №${combo.n} — ${combo.title}`}
                    width={540}
                    height={960}
                    className="w-full h-auto"
                    sizes="(max-width: 560px) 420px, (max-width: 1100px) 50vw, 540px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-gray-100 w-full" />

        {/* ── Why combo ────────────────────────────────────────── */}
        <section className="px-5 py-[80px] bg-[#f9f8f7] max-[640px]:py-[60px]">
          <div className="max-w-[680px] mx-auto">
            <h2
              className="font-forum font-normal text-center text-brand-black mb-12 leading-[1.25] max-[640px]:mb-8"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              Почему стоит выбрать именно комплекс процедур?
            </h2>

            <div className="flex flex-col gap-6">
              {REASONS.map((reason, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-brand-red/10 flex items-center justify-center mt-[3px]">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                      <path
                        d="M1 4L3.8 6.8L10 1"
                        stroke="#891D1A"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font-forum text-[17px] leading-[1.65] text-brand-black/75 max-[480px]:text-[16px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-gray-100 w-full" />

        {/* ── Works gallery ────────────────────────────────────── */}
        <section className="px-5 py-[80px] max-[640px]:py-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <h2
              className="font-forum font-normal text-center text-brand-black mb-2"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Работы
            </h2>
            <p className="font-forum text-center text-[12px] tracking-[3px] uppercase text-brand-black/35 mb-12">
              Результаты комплексных процедур
            </p>

            <div className="columns-2 gap-4 max-[480px]:columns-1">
              {WORKS.map((work, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[12px] mb-4 break-inside-avoid"
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    width={540}
                    height={810}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 480px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-gray-100 w-full" />

        {/* ── Videos ───────────────────────────────────────────── */}
        <section className="px-5 py-[80px] bg-[#f9f8f7] max-[640px]:py-[60px]">
          <div className="max-w-[1100px] mx-auto">
            <h2
              className="font-forum font-normal text-center text-brand-black mb-2"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Видео-результаты
            </h2>
            <p className="font-forum text-center text-[12px] tracking-[3px] uppercase text-brand-black/35 mb-12">
              Процесс и итог в деталях
            </p>

            <div className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-1 max-[640px]:max-w-[420px] max-[640px]:mx-auto">
              {VIDEOS.map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[16px] bg-brand-black aspect-[9/16]"
                >
                  <video
                    src={src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-gray-100 w-full" />

        {/* ── Reviews ──────────────────────────────────────────── */}
        <section className="px-5 py-[80px] max-[640px]:py-[60px]">
          <div className="max-w-[700px] mx-auto">
            <h2
              className="font-forum font-normal text-center text-brand-black mb-12 max-[640px]:mb-8"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Обратная связь
            </h2>
            <div className="rounded-[16px] overflow-hidden">
              <Image
                src="/promo/IMG_8847.JPG"
                alt="Отзывы клиентов о комплексных процедурах LariBrand"
                width={700}
                height={1000}
                className="w-full h-auto"
                sizes="(max-width: 700px) 100vw, 700px"
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section className="px-5 py-[90px] bg-brand-black text-center max-[640px]:py-[70px]">
          <p className="font-forum text-[11px] tracking-[4px] uppercase text-white/35 mb-6">
            1 — 10 июня · только 10 дней
          </p>
          <h2
            className="font-forum font-normal text-white leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
          >
            Готова к преображению?
          </h2>
          <p className="font-forum text-[16px] text-white/55 mb-10 max-w-[460px] mx-auto leading-[1.75] max-[480px]:text-[15px]">
            Выбери своё комбо и запишись прямо сейчас — мест немного
          </p>
          <a
            href={content.sing_up_link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-forum text-[18px] text-white bg-brand-red py-[15px] px-[50px] rounded-[12px] no-underline uppercase tracking-[0.5px] transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_28px_rgba(137,29,26,0.45)] active:scale-95 inline-block"
          >
            Записаться
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
