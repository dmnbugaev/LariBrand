import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '@/components/promo/VideoPlayer'
import content from '../../../content/content.json'

export const metadata: Metadata = {
  title: 'Акции апреля — специальные предложения | LariBrand Саратов',
  description:
    'Весенние акции LariBrand 13–30 апреля: стрижка + пилинг + СПА от 2 900 ₽, биозавивка от 5 500 ₽, окрашивание + реконструкция + Dyson от 5 500 ₽, пилинг + ботокс от 4 500 ₽. Запись онлайн.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Акции апреля — LariBrand Саратов',
    description: 'Весенние комплексы со скидкой до 50%. Стрижка + СПА, биозавивка, окрашивание, ботокс. 13–30 апреля в LariBrand!',
    url: 'https://laribrand.ru/promo',
  },
}

const OFFERS = [
  {
    title: 'Стрижка + Пилинг + СПА-уход',
    newPrice: '2 900 ₽',
    oldPrice: '5 200 ₽',
    savings: '2 300 ₽',
    desc: 'Обновление, лёгкость и здоровое сияние от корней до кончиков',
    breakdown: [
      { name: 'Стрижка', price: '2 500 ₽' },
      { name: 'Пилинг кожи головы', price: '1 500 ₽' },
      { name: 'СПА-уход', price: '1 200 ₽' },
    ],
    photo: '/images/images_window/IMG_3129.JPG',
  },
  {
    title: 'Биозавивка классическая',
    newPrice: '5 500 ₽',
    oldPrice: '9 000 ₽',
    savings: '3 500 ₽',
    desc: 'Упругие локоны с долговременным результатом, которые выглядят живо в любую погоду',
    breakdown: [],
    photo: '/images/images_window/IMG_3131.JPG',
  },
  {
    title: 'Однотонное окрашивание + Холодная реконструкция + Укладка Dyson',
    newPrice: '5 500 ₽',
    oldPrice: '10 500 ₽',
    savings: '5 000 ₽',
    desc: 'Глубокий насыщенный цвет, восстановленная структура волоса и профессиональная укладка',
    breakdown: [
      { name: 'Однотонное окрашивание', price: '6 500 ₽' },
      { name: 'Холодная реконструкция', price: '3 300 ₽' },
      { name: 'Укладка на Dyson', price: '700 ₽' },
    ],
    photo: '/images/images_window/IMG_3132.JPG',
  },
  {
    title: 'Пилинг + Холодная реконструкция + Ботокс (тёплая техника)',
    newPrice: '4 500 ₽',
    oldPrice: '8 900 ₽',
    savings: '4 400 ₽',
    desc: 'Максимальное восстановление и зеркальный блеск — три процедуры в одном визите',
    breakdown: [
      { name: 'Пилинг кожи головы', price: '1 500 ₽' },
      { name: 'Холодная реконструкция', price: '4 400 ₽' },
      { name: 'Ботокс (тёплая техника)', price: '3 000 ₽' },
    ],
    photo: '/images/images_window/IMG_3134.JPG',
  },
]

const GALLERY = [
  { src: '/images/images_window/IMG_3128.JPG', alt: 'Все акции апреля LariBrand' },
  { src: '/images/images_window/IMG_3129.JPG', alt: 'Стрижка + Пилинг + СПА-уход' },
  { src: '/images/images_window/IMG_3131.JPG', alt: 'Биозавивка классическая' },
  { src: '/images/images_window/IMG_3132.JPG', alt: 'Окрашивание + Реконструкция + Dyson' },
  { src: '/images/images_window/IMG_3134.JPG', alt: 'Пилинг + Реконструкция + Ботокс' },
  { src: '/images/images_window/IMG_3135.JPG', alt: 'Студия LariBrand — ждём вас' },
]

export default function PromoPage() {
  return (
    <>
      <Header />

      <main className="pt-[80px]">

        {/* Hero */}
        <section className="bg-brand-red text-white text-center px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <p className="font-forum text-[13px] text-white/70 uppercase tracking-widest mb-3 m-0">
            13 — 30 апреля
          </p>
          <h1 className="font-forum text-[54px] leading-[1.1] mb-5 m-0 max-[600px]:text-[36px]">
            Весна — время сиять
          </h1>
          <p className="font-forum text-[18px] text-white/85 max-w-[600px] mx-auto leading-relaxed m-0 max-[600px]:text-[16px]">
            Специально для вас мы собрали четыре комплекса, которые подарят вашим волосам обновление, силу и тот самый зеркальный блеск, который невозможно не заметить.
          </p>
        </section>

        {/* Offers */}
        <section className="bg-[#F9F7F5] px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <div className="max-w-[1100px] mx-auto">
            <p className="font-forum text-[13px] text-brand-black/50 uppercase tracking-widest text-center mb-3 m-0">
              Акционные комплексы
            </p>
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[50px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8">
              Четыре повода прийти в LariBrand
            </h2>

            <div className="grid grid-cols-2 gap-6 max-[750px]:grid-cols-1">
              {OFFERS.map((offer, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[18px] border border-[#E1DCD8] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
                    <Image
                      src={offer.photo}
                      alt={offer.title}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 750px) 100vw, 50vw"
                    />
                    {/* Savings badge */}
                    <div className="absolute top-3 right-3 bg-brand-red text-white rounded-[10px] px-3 py-1.5 text-right">
                      <div className="font-forum text-[10px] text-white/75 uppercase tracking-wider leading-none">экономия</div>
                      <div className="font-forum text-[18px] leading-tight">{offer.savings}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="font-forum text-[18px] text-brand-black m-0 leading-snug">{offer.title}</h3>
                    <p className="font-forum text-[14px] text-brand-black/55 m-0 italic leading-snug">{offer.desc}</p>

                    {offer.breakdown.length > 0 && (
                      <div className="flex flex-col gap-1 pt-1">
                        {offer.breakdown.map((item, j) => (
                          <div key={j} className="flex justify-between items-baseline">
                            <span className="font-forum text-[13px] text-brand-black/60">{item.name}</span>
                            <span className="font-forum text-[13px] text-brand-black/40 line-through">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-end justify-between pt-3 mt-auto border-t border-[#E1DCD8]">
                      <div>
                        <div className="font-forum text-[36px] text-brand-red leading-none">{offer.newPrice}</div>
                        <div className="font-forum text-[14px] text-brand-black/40 line-through mt-0.5">
                          вместо {offer.oldPrice}
                        </div>
                      </div>
                      <Link
                        href={content.sing_up_link}
                        className="inline-flex items-center justify-center py-[10px] px-[22px] bg-brand-red text-white font-forum text-[15px] rounded-[10px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(137,29,26,0.3)] active:scale-95"
                      >
                        Записаться
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="px-[60px] py-[70px] bg-white max-[600px]:px-0 max-[600px]:py-[50px]">
          <div className="max-w-[900px] mx-auto">
            <p className="font-forum text-[13px] text-brand-black/50 uppercase tracking-widest text-center mb-3 m-0 max-[600px]:px-5">
              Смотрите сами
            </p>
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[40px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8 max-[600px]:px-5">
              Результат говорит сам за себя
            </h2>
            <div className="shadow-[0_8px_40px_rgba(0,0,0,0.12)] max-[600px]:shadow-none">
              <VideoPlayer src="/images/images_window/video_promo_2.mp4" />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-[#F9F7F5] px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <div className="max-w-[1100px] mx-auto">
            <p className="font-forum text-[13px] text-brand-black/50 uppercase tracking-widest text-center mb-3 m-0">
              Апрельская акция
            </p>
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[40px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8">
              Все предложения в деталях
            </h2>

            {/* Row 1 — 3 photos */}
            <div className="grid grid-cols-3 gap-4 mb-4 max-[600px]:grid-cols-1">
              {GALLERY.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-[14px] overflow-hidden border border-brand-black/10"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 — 3 photos */}
            <div className="grid grid-cols-3 gap-4 max-[600px]:grid-cols-1">
              {GALLERY.slice(3).map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-[14px] overflow-hidden border border-brand-black/10"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-red text-white text-center px-[60px] py-[60px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <p className="font-forum text-[13px] text-white/70 uppercase tracking-widest mb-3 m-0">
            Акция действует до 30 апреля
          </p>
          <h2 className="font-forum text-[38px] mb-4 m-0 max-[600px]:text-[28px]">
            Выберите свой комплекс и начните сиять
          </h2>
          <p className="font-forum text-[18px] text-white/85 max-w-[520px] mx-auto mb-8 m-0 leading-relaxed max-[600px]:text-[16px]">
            Наши мастера ждут вас по адресу ул. Чернышевского, 145. В первый же солнечный день ваши волосы будут ослеплять своей красотой.
          </p>
          <Link
            href={content.sing_up_link}
            className="inline-flex items-center justify-center py-[16px] px-[52px] bg-white text-brand-red text-[20px] font-forum rounded-[12px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] active:scale-95"
          >
            Записаться на акцию
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}
