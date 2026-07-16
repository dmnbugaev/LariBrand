import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'

const TELEGRAM_LINK = 'https://t.me/Lari_Brand64'

const PROMO_VIDEOS = [
  {
    title: 'Сочный цвет',
    video: '/promo/IMG_4640.MOV',
    oldPrice: '10 500 ₽',
    price: '6 000 ₽',
    saving: '5 000 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Окрашивание в 1 тон или тонирование: обновление цвета и выравнивание тона - 7 500 ₽',
    ],
  },
  {
    title: 'Зеркальное полотно',
    video: '/promo/IMG_4641.MOV',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    saving: '3 400 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Ботокс в теплой технике: разглаживание и дисциплинирование волос без утяжеления - 5 900 ₽',
    ],
  },
  {
    title: 'Терапия глубокого восстановления',
    video: '/promo/IMG_4643.MOV',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    saving: '4 200 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Холодная реконструкция Dr. Sorbie: глубокое питание и восстановление - 6 700 ₽',
      'Визуальное завершение: премиальный пленочный состав-ревиталайзер Limba - 1 500 ₽',
    ],
  },
  {
    title: 'Обновление формы',
    video: '/promo/IMG_4644.MOV',
    oldPrice: 'от 5 500 ₽',
    price: 'от 2 900 ₽',
    saving: 'до 2 600 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Стрижка волос: смена образа, обновление формы или оформление ровного среза - 2 500-2 900 ₽',
    ],
    note: 'У ведущего мастера: 3 300 ₽ вместо 5 900 ₽',
  },
]

const REVIEWS = content.reviews.slice(0, 3)

export const metadata: Metadata = {
  title: 'Специальное предложение июля - LariBrand Саратов',
  description:
    'Новые комбо 3в1 в LariBrand: сочный цвет, зеркальное полотно, глубокое восстановление и обновление формы по специальной цене.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Специальное предложение июля LariBrand',
    description: 'Комбо 3в1 для волос: уход, цвет, восстановление и форма по специальной цене.',
    images: [{ url: '/upload/1762277381106-IMG_5217.JPG' }],
  },
}

const buttonClass =
  'inline-flex min-h-[54px] items-center justify-center rounded-[14px] bg-brand-red px-7 py-4 text-center font-forum text-[17px] uppercase text-white no-underline shadow-[0_12px_28px_rgba(137,29,26,0.22)] transition-transform duration-200 hover:scale-105 active:scale-95'

function PromoVideo({ src, title, className = '' }: { src: string; title: string; className?: string }) {
  return (
    <video
      className={`block h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={title}
    >
      <source src={src} type="video/quicktime" />
    </video>
  )
}

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white pt-[80px] font-forum text-brand-black">
        <section className="relative overflow-hidden border-b border-brand-black/10 px-5 py-[56px] max-[640px]:py-10">
          <div className="absolute inset-x-0 top-0 h-[10px] bg-brand-red" />
          <div className="mx-auto grid max-w-[1180px] grid-cols-[0.92fr_1.08fr] items-center gap-12 max-[920px]:grid-cols-1">
            <div className="promo-fade-1">
              <p className="mb-5 max-w-full w-fit border border-brand-red px-4 py-2 text-[12px] uppercase tracking-[4px] text-brand-red max-[560px]:mx-auto max-[560px]:text-center max-[560px]:tracking-[2px] max-[380px]:text-[10px]">
                LariBrand / специальное предложение
              </p>
              <h1 className="mb-6 max-w-[650px] font-forum text-[72px] font-normal uppercase leading-[0.95] text-brand-black max-[720px]:text-[52px] max-[560px]:mx-auto max-[560px]:max-w-[360px] max-[560px]:text-center max-[420px]:text-[38px]">
                Комбо 3в1 для волос
              </h1>
              <p className="mb-8 max-w-[580px] text-[25px] uppercase leading-[1.26] text-brand-black/78 max-[560px]:text-center max-[560px]:text-[20px]">
                Уход, цвет, восстановление и форма в готовых процедурах по специальной цене.
              </p>
              <div className="flex flex-wrap gap-3 max-[560px]:justify-center max-[380px]:gap-2">
                <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  Записаться
                </a>
                <a href={sanitizeHref(TELEGRAM_LINK)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  Telegram
                </a>
              </div>
            </div>

            <div className="promo-fade-2 relative mx-auto w-full max-w-[470px] overflow-hidden rounded-[8px] border border-brand-black bg-white shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <span className="absolute left-4 top-4 z-[1] bg-white/88 px-3 py-2 text-[10px] uppercase tracking-[2px] text-brand-red">
                видео акции
              </span>
              <div className="aspect-[9/16]">
                <PromoVideo src="/promo/IMG_4638.MOV" title="Специальное предложение июля LariBrand" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-[70px] max-[640px]:py-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex items-end justify-between gap-6 max-[760px]:block">
              <div>
                <p className="mb-4 text-[12px] uppercase tracking-[4px] text-brand-red">Выберите комбо</p>
                <h2 className="max-w-[760px] text-[54px] font-normal uppercase leading-[1] max-[640px]:text-[36px]">
                  Четыре предложения с понятной выгодой
                </h2>
              </div>
              <p className="max-w-[330px] text-[19px] uppercase leading-[1.35] text-brand-black/62 max-[760px]:mt-5">
                Видео проигрываются автоматически и показывают результат процедур.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-[920px]:grid-cols-1">
              {PROMO_VIDEOS.map((item, index) => (
                <article key={item.title} className="grid grid-cols-[0.82fr_1fr] overflow-hidden rounded-[8px] border border-brand-black/18 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.09)] max-[640px]:grid-cols-1">
                  <div className="relative aspect-[9/16] bg-brand-black">
                    <span className="absolute left-3 top-3 z-[1] bg-white/88 px-3 py-2 text-[10px] uppercase tracking-[2px] text-brand-red">
                      видео
                    </span>
                    <PromoVideo src={item.video} title={`Комбо 3в1 ${item.title}`} />
                  </div>
                  <div className="flex flex-col justify-between p-7 max-[520px]:p-5">
                    <div>
                      <p className="mb-4 text-[12px] uppercase tracking-[3px] text-brand-red/80">Комбо 3в1 / 0{index + 1}</p>
                      <h3 className="mb-5 text-[34px] font-normal uppercase leading-[1.03] max-[520px]:text-[28px]">
                        {item.title}
                      </h3>
                      <ul className="mb-6 grid gap-3 p-0">
                        {item.services.map((service) => (
                          <li key={service} className="list-none border-b border-brand-black/10 pb-3 text-[18px] uppercase leading-[1.34] text-brand-black/76 last:border-b-0 max-[520px]:text-[16px]">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-5 border-t border-brand-black/14 pt-5">
                        <div className="mb-2 flex items-end justify-between gap-4">
                          <span className="text-[25px] text-brand-black/42 line-through">{item.oldPrice}</span>
                          <span className="text-[45px] leading-none text-brand-red max-[520px]:text-[38px]">{item.price}</span>
                        </div>
                        <p className="m-0 text-[15px] uppercase tracking-[1.5px] text-brand-black/58">Ваша выгода - {item.saving}</p>
                        {item.note ? <p className="mt-3 text-[15px] uppercase leading-[1.3] text-brand-red">{item.note}</p> : null}
                      </div>
                      <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                        Записаться
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-black px-5 py-[70px] text-white max-[640px]:py-12">
          <div className="mx-auto max-w-[1180px]">
            <p className="mb-4 text-[12px] uppercase tracking-[4px] text-white/58">Отзывы</p>
            <h2 className="mb-9 max-w-[760px] text-[54px] font-normal uppercase leading-[1] max-[640px]:text-[36px]">
              Гости возвращаются за качеством волос
            </h2>
            <div className="grid grid-cols-3 gap-5 max-[920px]:grid-cols-1">
              {REVIEWS.map((review) => (
                <article key={review.author} className="rounded-[8px] border border-white/16 bg-white/[0.06] p-6">
                  <p className="mb-4 text-[20px] uppercase text-white">{review.author}</p>
                  <p className="m-0 text-[17px] leading-[1.55] text-white/72">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-[70px] text-center max-[640px]:py-12">
          <div className="mx-auto max-w-[820px]">
            <p className="mb-5 text-[12px] uppercase tracking-[4px] text-brand-red">Запись</p>
            <h2 className="mb-6 text-[54px] font-normal uppercase leading-[1] max-[640px]:text-[36px]">
              Забронируйте специальное предложение
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[21px] uppercase leading-[1.4] text-brand-black/68 max-[520px]:text-[17px]">
              Администратор поможет выбрать комбо и подберет свободное окно в расписании.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                Записаться
              </a>
              <a href={sanitizeHref(TELEGRAM_LINK)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
