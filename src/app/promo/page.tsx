import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '@/components/promo/VideoPlayer'
import content from '../../../content/content.json'

export const metadata: Metadata = {
  title: 'Акция — специальные предложения | LariBrand Саратов',
  description:
    'Акция LariBrand: стрижка + SPA-уход от 2 900 ₽, биозавивка от 5 500 ₽, окрашивание + реконструкция + Dyson от 5 500 ₽, пилинг + ботокс от 4 500 ₽. Запись онлайн.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Акция LariBrand — специальные предложения',
    description: 'Комплексы услуг со скидкой до 50%. Стрижка + SPA, биозавивка, окрашивание, ботокс. Записывайтесь в LariBrand Саратов!',
    url: 'https://laribrand.ru/promo',
  },
}

const OFFERS = [
  {
    emoji: '🌸',
    title: 'Стрижка + Пилинг + SPA-уход',
    newPrice: '2 900 ₽',
    oldPrice: '5 200 ₽',
    desc: 'обновление и лёгкость для кожи головы',
    savings: '2 300 ₽',
  },
  {
    emoji: '🌀',
    title: 'Биозавивка классическая',
    newPrice: '5 500 ₽',
    oldPrice: '9 000 ₽',
    desc: 'идеальные локоны, которые не боятся погоды',
    savings: '3 500 ₽',
  },
  {
    emoji: '🎨',
    title: 'Окрашивание + Холодная реконструкция + Укладка Dyson',
    newPrice: '5 500 ₽',
    oldPrice: '10 500 ₽',
    desc: 'глубокий цвет и премиальный уход в одной процедуре',
    savings: '5 000 ₽',
  },
  {
    emoji: '🌿',
    title: 'Пилинг + Холодная реконструкция + Ботокс (тёплая техника)',
    newPrice: '4 500 ₽',
    oldPrice: '8 900 ₽',
    desc: 'максимальное преображение и зеркальный блеск',
    savings: '4 400 ₽',
  },
]

const GALLERY = [
  '/images/images_window/IMG_2147.JPG',
  '/images/images_window/IMG_2148.JPG',
  '/images/images_window/IMG_2149.JPG',
  '/images/images_window/IMG_2150.JPG',
  '/images/images_window/IMG_2151.JPG',
]

export default function PromoPage() {
  return (
    <>
      <Header />

      <main className="pt-[80px]">
        {/* Hero */}
        <section className="bg-brand-red text-white text-center px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <p className="font-forum text-[13px] text-white/70 uppercase tracking-widest mb-3 m-0">
            Специальное предложение
          </p>
          <h1 className="font-forum text-[54px] leading-[1.1] mb-5 m-0 max-[600px]:text-[36px]">
            Ваше время сиять ✨
          </h1>
          <p className="font-forum text-[18px] text-white/85 max-w-[580px] mx-auto leading-relaxed m-0 max-[600px]:text-[16px]">
            Любовь к себе начинается не с обещаний, а с конкретных действий. С того самого часа, который ты посвящаешь только своей красоте и внутреннему спокойствию.
          </p>
        </section>

        {/* Offers */}
        <section className="bg-[#F9F7F5] px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[50px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8">
              Акционные комплексы
            </h2>

            <div className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
              {OFFERS.map((offer, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[18px] p-6 border border-[#E1DCD8] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[42px] leading-none shrink-0">{offer.emoji}</span>
                    <div>
                      <h3 className="font-forum text-[18px] text-brand-black m-0 leading-snug">{offer.title}</h3>
                      <p className="font-forum text-[14px] text-brand-black/55 mt-1 m-0 italic">({offer.desc})</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-[#E1DCD8]">
                    <div>
                      <div className="font-forum text-[34px] text-brand-red leading-none">{offer.newPrice}</div>
                      <div className="font-forum text-[15px] text-brand-black/40 line-through mt-1">
                        вместо {offer.oldPrice}
                      </div>
                    </div>
                    <div className="bg-brand-red/10 rounded-[10px] px-3 py-2 text-right">
                      <div className="font-forum text-[11px] text-brand-red/70 uppercase tracking-wider">экономия</div>
                      <div className="font-forum text-[20px] text-brand-red">{offer.savings}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href={content.sing_up_link}
                className="inline-flex items-center justify-center py-[16px] px-[52px] bg-brand-red text-white text-[20px] font-forum rounded-[12px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
              >
                Записаться со скидкой
              </Link>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="px-[60px] py-[70px] bg-white max-[600px]:px-5 max-[600px]:py-[50px]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[40px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8">
              Взгляните на результат
            </h2>
            <div className="shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <VideoPlayer src="/images/images_window/video_promo.mp4" />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-brand-bg px-[60px] py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-forum text-[38px] text-brand-black text-center mb-[40px] m-0 max-[600px]:text-[28px] max-[600px]:mb-8">
              Работы нашего салона
            </h2>

            {/* First row — 3 images */}
            <div className="grid grid-cols-3 gap-4 mb-4 max-[600px]:grid-cols-1">
              {GALLERY.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className="relative rounded-[14px] overflow-hidden border border-brand-black/10"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={src}
                    alt={`Работы LariBrand ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Second row — 2 images, centered */}
            <div className="grid grid-cols-2 gap-4 max-w-[740px] mx-auto max-[600px]:grid-cols-1 max-[600px]:max-w-full">
              {GALLERY.slice(3).map((src, i) => (
                <div
                  key={i}
                  className="relative rounded-[14px] overflow-hidden border border-brand-black/10"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={src}
                    alt={`Работы LariBrand ${i + 4}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 370px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-red text-white text-center px-[60px] py-[60px] max-[600px]:px-5 max-[600px]:py-[50px]">
          <h2 className="font-forum text-[38px] mb-4 m-0 max-[600px]:text-[28px]">
            Забота о себе — лучшая инвестиция
          </h2>
          <p className="font-forum text-[18px] text-white/85 max-w-[520px] mx-auto mb-8 m-0 leading-relaxed max-[600px]:text-[16px]">
            Позволь себе расслабиться в руках профи и выйти из студии с ощущением абсолютной уверенности.
          </p>
          <Link
            href={content.sing_up_link}
            className="inline-flex items-center justify-center py-[16px] px-[52px] bg-white text-brand-red text-[20px] font-forum rounded-[12px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] active:scale-95"
          >
            Записаться
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
