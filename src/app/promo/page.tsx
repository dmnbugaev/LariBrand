import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoLoopVideo from '@/components/PromoLoopVideo'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'

const TELEGRAM_LINK = 'https://t.me/Lari_Brand64'

const PROMO_VIDEOS = [
  {
    title: 'Сочный цвет',
    video: '/promo/IMG_4640.MOV',
    poster: '/promo/poster-4640.png',
    oldPrice: '10 500 ₽',
    price: '6 000 ₽',
    saving: '5 000 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Окрашивание в 1 тон / тонирование - 7 500 ₽',
    ],
  },
  {
    title: 'Зеркальное полотно',
    video: '/promo/IMG_4641.MOV',
    poster: '/promo/poster-4641.png',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    saving: '3 400 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Ботокс в теплой технике - 5 900 ₽',
    ],
  },
  {
    title: 'Терапия глубокого восстановления',
    video: '/promo/IMG_4643.MOV',
    poster: '/promo/poster-4643.png',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    saving: '4 200 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Холодная реконструкция Dr. Sorbie - 6 700 ₽',
      'Визуальное завершение Limba - 1 500 ₽',
    ],
  },
  {
    title: 'Обновление формы',
    video: '/promo/IMG_4644.MOV',
    poster: '/promo/poster-4644.png',
    oldPrice: 'от 5 500 ₽',
    price: 'от 2 900 ₽',
    saving: 'до 2 600 ₽',
    services: [
      'Пилинг кожи головы, очищение - 1 500 ₽',
      'Spa-уход: питание и увлажнение - 1 500 ₽',
      'Стрижка волос: форма или ровный срез - 2 500-2 900 ₽',
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
  'inline-flex min-h-[54px] w-fit max-w-full items-center justify-center rounded-[14px] bg-brand-red px-7 py-4 text-center font-forum text-[17px] uppercase leading-none text-white no-underline shadow-[0_12px_28px_rgba(137,29,26,0.22)] transition-transform duration-200 hover:scale-105 active:scale-95 max-[420px]:min-h-[50px] max-[420px]:w-full max-[420px]:px-5 max-[420px]:text-[15px]'

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white pt-[80px] font-forum text-brand-black">
        <section className="relative overflow-hidden border-b border-brand-black/10 px-5 py-[56px] max-[640px]:py-10">
          <div className="absolute inset-x-0 top-0 h-[10px] bg-brand-red" />
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,0.92fr)_minmax(300px,1.08fr)] items-center gap-12 max-[920px]:grid-cols-1 max-[560px]:gap-8">
            <div className="promo-fade-1 min-w-0">
              <p className="mb-5 max-w-full w-fit border border-brand-red px-4 py-2 text-[12px] uppercase tracking-[4px] text-brand-red max-[560px]:mx-auto max-[560px]:w-full max-[560px]:max-w-[310px] max-[560px]:text-center max-[560px]:text-[10px] max-[560px]:tracking-[1.6px]">
                LariBrand / специальное предложение
              </p>
              <h1 className="mb-6 max-w-[650px] font-forum text-[72px] font-normal uppercase leading-[0.95] text-brand-black max-[720px]:text-[52px] max-[560px]:mx-auto max-[560px]:max-w-[315px] max-[560px]:text-center max-[560px]:text-[36px] max-[380px]:text-[33px]">
                Комбо 3в1 для волос
              </h1>
              <p className="mb-8 max-w-[580px] text-[25px] uppercase leading-[1.26] text-brand-black/78 max-[560px]:mx-auto max-[560px]:max-w-[290px] max-[560px]:text-center max-[560px]:text-[16px]">
                Уход, цвет, восстановление и форма в готовых процедурах по специальной цене.
              </p>
              <div className="flex max-w-full flex-wrap gap-3 max-[560px]:justify-center max-[420px]:mx-auto max-[420px]:w-full max-[420px]:max-w-[250px] max-[420px]:flex-col max-[380px]:gap-2">
                <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  Записаться
                </a>
                <a href={sanitizeHref(TELEGRAM_LINK)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  Telegram
                </a>
              </div>
            </div>

            <div className="promo-fade-2 relative mx-auto w-full max-w-[470px] overflow-hidden rounded-[8px] border border-brand-black bg-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] max-[520px]:max-w-[300px]">
              <div className="aspect-[9/16]">
                <PromoLoopVideo
                  src="/promo/IMG_4638.MOV"
                  poster="/promo/poster-4638.png"
                  title="Специальное предложение июля LariBrand"
                  startAt={1.15}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-[70px] max-[640px]:py-12">
          <div className="mx-auto w-full max-w-[1180px]">
            <div className="mb-10 flex items-end justify-between gap-6 max-[760px]:block">
              <div className="min-w-0">
                <p className="mb-4 text-[12px] uppercase tracking-[4px] text-brand-red max-[520px]:tracking-[2px]">Выберите комбо</p>
                <h2 className="max-w-[760px] break-words text-[54px] font-normal uppercase leading-[1] max-[640px]:max-w-[300px] max-[640px]:text-[24px]">
                  Четыре предложения с понятной выгодой
                </h2>
              </div>
              <p className="max-w-[330px] text-[19px] uppercase leading-[1.35] text-brand-black/62 max-[760px]:mt-5 max-[640px]:max-w-[300px] max-[640px]:text-[15px]">
                Видео проигрываются автоматически и показывают результат процедур.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 max-[920px]:grid-cols-1">
              {PROMO_VIDEOS.map((item, index) => (
                <article key={item.title} className="grid min-w-0 grid-cols-[minmax(190px,0.68fr)_minmax(0,1fr)] items-stretch overflow-hidden rounded-[8px] border border-brand-black/18 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.09)] max-[1180px]:grid-cols-1">
                  <div className="flex min-w-0 items-start justify-center bg-[#f7f4f1] p-4 pt-10 max-[1180px]:p-6 max-[1180px]:pt-6 max-[520px]:p-4">
                    <div className="relative aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[6px] border border-brand-black/12 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] max-[1180px]:max-w-[250px] max-[520px]:max-w-[210px]">
                      <PromoLoopVideo
                        src={item.video}
                        poster={item.poster}
                        title={`Комбо 3в1 ${item.title}`}
                        startAt={1.05}
                      />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-col justify-between p-7 max-[520px]:p-5">
                    <div>
                      <p className="mb-4 text-[12px] uppercase tracking-[3px] text-brand-red/80 max-[420px]:tracking-[1.5px]">Комбо 3в1 / 0{index + 1}</p>
                      <h3 className="mb-5 max-w-full text-[34px] font-normal uppercase leading-[1.03] max-[520px]:text-[28px] max-[380px]:text-[25px]">
                        {item.title}
                      </h3>
                      <ul className="mb-6 grid gap-3 p-0">
                        {item.services.map((service) => (
                          <li key={service} className="list-none break-words border-b border-brand-black/10 pb-3 text-[18px] uppercase leading-[1.34] text-brand-black/76 [overflow-wrap:anywhere] last:border-b-0 max-[640px]:text-[14px]">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-5 border-t border-brand-black/14 pt-5">
                        <div className="mb-2 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 max-[640px]:grid max-[640px]:justify-start">
                          <span className="text-[25px] text-brand-black/42 line-through max-[640px]:text-[21px]">{item.oldPrice}</span>
                          <span className="text-[45px] leading-none text-brand-red max-[640px]:text-[34px]">{item.price}</span>
                        </div>
                        <p className="m-0 break-words text-[15px] uppercase tracking-[1.5px] text-brand-black/58 max-[380px]:tracking-[0.8px]">Ваша выгода - {item.saving}</p>
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
          <div className="mx-auto w-full max-w-[1180px]">
            <p className="mb-4 text-[12px] uppercase tracking-[4px] text-white/58">Отзывы</p>
            <h2 className="mb-9 max-w-[760px] break-words text-[54px] font-normal uppercase leading-[1] max-[640px]:max-w-[300px] max-[640px]:text-[24px]">
              Гости возвращаются за качеством волос
            </h2>
            <div className="grid w-full grid-cols-3 gap-5 max-[920px]:grid-cols-1">
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
            <h2 className="mb-6 break-words text-[54px] font-normal uppercase leading-[1] max-[640px]:mx-auto max-[640px]:max-w-[300px] max-[640px]:text-[24px]">
              Забронируйте специальное предложение
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[21px] uppercase leading-[1.4] text-brand-black/68 max-[520px]:text-[17px]">
              Администратор поможет выбрать комбо и подберет свободное окно в расписании.
            </p>
            <div className="mx-auto flex max-w-full flex-wrap justify-center gap-3 max-[420px]:max-w-[250px] max-[420px]:flex-col">
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
