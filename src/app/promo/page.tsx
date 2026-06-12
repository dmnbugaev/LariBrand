import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCountdown from '@/components/promo/PromoCountdown'
import content from '../../../content/content.json'

export const metadata: Metadata = {
  title: 'Акция LariBrand - скидки до 60%',
  description:
    'Акция LariBrand до 20 июня: 4 эксклюзивных комбо для волос со скидкой до 60%.',
  openGraph: {
    title: 'Акция LariBrand - скидки до 60%',
    description:
      'До 20 июня в LariBrand действуют 4 эксклюзивных комбо со скидкой до 60%.',
    images: [{ url: '/promo/IMG_0091.JPG' }],
  },
}

const PROMO_IMAGES = [
  {
    src: '/promo/IMG_0091.JPG',
    alt: 'Акция LariBrand до 20 июня: 4 эксклюзивных комбо со скидкой до 60%',
  },
  {
    src: '/promo/IMG_0075.JPG',
    alt: 'Комбо LariBrand: зеркальное полотно, сочный цвет, обновление формы и стоп-сечение',
  },
]

const COMBOS = [
  {
    title: 'Зеркальное полотно',
    services: 'Кератин/ботокс + SPA-уход + пилинг кожи головы',
    oldPrice: '10 900 ₽',
    price: '5 500 ₽',
    result: 'Для плотности, блеска и визуально гладкого полотна.',
  },
  {
    title: 'Сочный цвет',
    services: 'Окрашивание в 1 тон/тонирование + SPA-уход + пилинг',
    oldPrice: '10 500 ₽',
    price: '5 500 ₽',
    result: 'Для свежего оттенка, мягкости и ухоженного финиша.',
  },
  {
    title: 'Обновление формы',
    services: 'Стрижка + SPA-уход + пилинг',
    oldPrice: '7 000 ₽',
    price: '2 900 ₽',
    result: 'Для легкости, аккуратной формы и чистого объема у корней.',
  },
  {
    title: 'Стоп-сечение',
    services: 'Ботокс кончиков + SPA-уход + пилинг',
    oldPrice: '7 000 ₽',
    price: '3 500 ₽',
    result: 'Для кончиков, которые выглядят собраннее и мягче.',
  },
]

const RITUAL_STEPS = [
  'Пилинг кожи головы подготавливает корни и помогает уходу работать чище.',
  'SPA-уход добавляет мягкость, блеск и ощущение салонной свежести.',
  'Мастер подбирает комбо под текущее состояние волос и желаемый результат.',
]

const promoButton =
  'inline-flex min-h-[56px] items-center justify-center rounded-[14px] bg-brand-red px-8 py-4 font-forum text-[17px] font-normal uppercase tracking-[1px] text-white no-underline shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

const promoButtonLight =
  'inline-flex min-h-[56px] items-center justify-center rounded-[14px] border border-brand-black/12 bg-white px-8 py-4 font-forum text-[17px] font-normal uppercase tracking-[1px] text-brand-black no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px] bg-[#f8f5f1] text-brand-black font-forum">
        <section className="min-h-[calc(100svh-80px)] border-b border-brand-black bg-white px-[60px] py-[70px] max-[720px]:px-5 max-[640px]:min-h-0 max-[640px]:py-[48px]">
          <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-[60px] max-[980px]:flex-col max-[980px]:items-stretch max-[640px]:gap-9">
            <div className="promo-fade-1 w-[540px] max-[980px]:w-full">
              <div className="mb-6 flex flex-wrap items-center gap-3 max-[560px]:justify-center">
                <span className="rounded-full border border-brand-red/25 px-4 py-[7px] text-[11px] uppercase tracking-[3px] text-brand-red">
                  До 20 июня
                </span>
                <span className="rounded-full bg-brand-red px-4 py-2 text-[11px] uppercase tracking-[3px] text-white">
                  скидка до 60%
                </span>
              </div>

              <div className="mb-6 max-[560px]:text-center">
                <p className="mb-2 text-[18px] uppercase tracking-[3px] text-brand-red max-[480px]:text-[15px]">
                  сезонная подборка ухода
                </p>
                <h1
                  className="hero-title m-0 font-canelope font-normal uppercase leading-[0.95]"
                  style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
                >
                  LariBrand
                </h1>
                <h2 className="m-0 mt-2 font-forum text-[36px] font-normal leading-[1.1] text-brand-black max-[560px]:text-[28px]">
                  Акция для волос
                </h2>
              </div>

              <p className="promo-fade-2 mb-8 max-w-[560px] text-[21px] leading-[1.6] text-brand-black/68 max-[560px]:text-center max-[560px]:text-[18px]">
                Четыре готовых комбо для блеска, цвета, формы и восстановления кончиков.
                Мастер подберет уход под состояние волос, а скидка действует до 20 июня.
              </p>

              <div className="promo-fade-3 mb-8 max-w-[500px] rounded-[14px] border border-brand-black/10 bg-[#f8f5f1] p-5 max-[560px]:mx-auto max-[560px]:overflow-x-auto">
                <p className="mb-3 text-[11px] uppercase tracking-[3px] text-brand-black/40">
                  До конца акции осталось
                </p>
                <PromoCountdown />
              </div>

              <div className="promo-fade-4 mb-8 flex flex-wrap items-center gap-4 max-[560px]:justify-center">
                <a
                  href={content.sing_up_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={promoButton}
                >
                  Получить скидку
                </a>
                <a href="#combos" className={promoButtonLight}>
                  Смотреть комбо
                </a>
              </div>

              <div className="promo-fade-4 grid max-w-[520px] grid-cols-3 border-y border-brand-black/10 text-center max-[560px]:mx-auto max-[420px]:grid-cols-1 max-[420px]:border-b-0">
                {['4 комбо', 'до 60%', 'до 20.06'].map((item) => (
                  <p
                    key={item}
                    className="border-r border-brand-black/10 py-3 text-[14px] uppercase tracking-[2px] text-brand-black/58 last:border-r-0 max-[420px]:border-b max-[420px]:border-r-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="promo-fade-2 w-[500px] max-[980px]:mx-auto max-[980px]:w-full max-[980px]:max-w-[520px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-brand-black bg-[#f8f5f1] shadow-[0_12px_25px_rgba(0,0,0,.1)] max-[560px]:aspect-[3/4]">
                <Image
                  src="/promo/IMG_0091.JPG"
                  alt="Акция LariBrand: комбо для волос со скидкой до 60%"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 980px) 520px, 500px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-[78px] max-[640px]:py-[58px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[0.9fr_1.1fr] gap-12 max-[900px]:grid-cols-1">
            <div className="max-w-[470px] max-[900px]:max-w-none">
              <p className="mb-4 text-[12px] uppercase tracking-[4px] text-brand-red/75">
                Почему это удобно
              </p>
              <h2
                className="mb-5 font-forum font-normal leading-[1.08]"
                style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
              >
                Не отдельная услуга, а готовый сценарий ухода
              </h2>
              <p className="text-[18px] leading-[1.75] text-brand-black/62 max-[560px]:text-[16px]">
                В каждом комбо соединены базовый результат и салонный уход: мастер работает не
                только с длиной, но и с ощущением чистоты, мягкости и завершенности образа.
              </p>
            </div>

            <div className="grid gap-3">
              {RITUAL_STEPS.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[56px_1fr] items-start border border-brand-black/10 bg-[#fbfaf8] p-5 max-[520px]:grid-cols-1 max-[520px]:gap-3"
                >
                  <span className="text-[13px] uppercase tracking-[2px] text-brand-red/75">
                    0{index + 1}
                  </span>
                  <p className="text-[20px] leading-[1.45] text-brand-black/72 max-[560px]:text-[17px]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="combos" className="bg-[#f8f5f1] px-5 py-[78px] max-[640px]:py-[58px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex items-end justify-between gap-6 max-[760px]:flex-col max-[760px]:items-start">
              <div className="max-w-[640px]">
                <p className="mb-4 text-[12px] uppercase tracking-[4px] text-brand-red/75">
                  Меню акции
                </p>
                <h2
                  className="font-forum font-normal leading-[1.08]"
                  style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
                >
                  Выберите комбо под задачу волос
                </h2>
              </div>
              <a
                href={content.sing_up_link}
                target="_blank"
                rel="noopener noreferrer"
                className={promoButton}
              >
                Получить скидку
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
              {COMBOS.map((combo, index) => (
                <article
                  key={combo.title}
                  className="group border border-brand-black/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-red/28 hover:shadow-[0_18px_45px_rgba(34,34,34,0.08)] max-[520px]:p-5"
                >
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <p className="text-[12px] uppercase tracking-[3px] text-brand-black/36">
                      Комбо 0{index + 1}
                    </p>
                    <span className="border border-brand-black/10 px-3 py-1 text-[11px] uppercase tracking-[2px] text-brand-black/42">
                      до 20.06
                    </span>
                  </div>
                  <h3 className="mb-4 text-[28px] uppercase leading-[1.08] text-brand-red max-[560px]:text-[24px]">
                    {combo.title}
                  </h3>
                  <p className="mb-4 text-[17px] uppercase leading-[1.45] text-brand-black/72">
                    {combo.services}
                  </p>
                  <p className="mb-8 text-[17px] leading-[1.55] text-brand-black/56">
                    {combo.result}
                  </p>
                  <div className="flex items-end justify-between gap-4 border-t border-brand-black/10 pt-5">
                    <span className="text-[18px] text-brand-black/36 line-through">
                      {combo.oldPrice}
                    </span>
                    <span className="text-[34px] leading-none text-[#C07008]">
                      {combo.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-[78px] max-[640px]:py-[58px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 grid grid-cols-[0.9fr_1.1fr] items-end gap-10 max-[820px]:grid-cols-1">
              <div>
                <p className="mb-4 text-[12px] uppercase tracking-[4px] text-brand-red/75">
                  Актуальное промо
                </p>
                <h2
                  className="font-forum font-normal leading-[1.08]"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                >
                  Два кадра с условиями акции
                </h2>
              </div>
              <p className="text-[18px] leading-[1.7] text-brand-black/58">
                Оставили оригинальные промо-изображения: на них можно быстро сверить дату,
                состав предложений и скидку. Основной прайс собран выше, чтобы страница не
                дублировала одно и то же несколько раз.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
              {PROMO_IMAGES.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden border border-brand-black/10 bg-brand-black shadow-[0_18px_45px_rgba(34,34,34,0.08)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1080}
                    height={1920}
                    className="h-auto w-full"
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-black px-5 py-[84px] text-center text-white max-[640px]:py-[64px]">
          <p className="mb-5 text-[12px] uppercase tracking-[4px] text-white/38">
            Только до 20 июня
          </p>
          <h2
            className="mx-auto mb-5 max-w-[760px] font-forum font-normal leading-[1.12]"
            style={{ fontSize: 'clamp(34px, 5vw, 66px)' }}
          >
            Заберите свое предложение, пока акция активна
          </h2>
          <p className="mx-auto mb-9 max-w-[540px] text-[17px] leading-[1.7] text-white/62">
            Кнопка откроет запись в YClients. Выберите удобное время, а комбо можно уточнить
            с мастером перед визитом.
          </p>
          <a
            href={content.sing_up_link}
            target="_blank"
            rel="noopener noreferrer"
            className={promoButton}
          >
            Получить скидку
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
