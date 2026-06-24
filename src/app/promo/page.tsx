import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'

const PROMO_BASE = '/images/images_window'

const COMBOS = [
  {
    title: 'Терапия глубокого восстановления',
    image: `${PROMO_BASE}/photo_2026-06-22_22-25-45.jpg`,
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    services: [
      'Пилинг - 1 500 ₽ (очищение кожи головы)',
      'Холодная реконструкция Dr. Sorbie - 6 700 ₽ (ударный коктейль на глубокое восстановление волос)',
      'Визуальное завершение - 1 500 ₽ (визуальный эффект без утяжеления)',
    ],
  },
  {
    title: 'Обновление формы',
    image: `${PROMO_BASE}/photo_2026-06-22_22-25-49.jpg`,
    oldPrice: '5 500 ₽',
    price: '2 900 ₽',
    services: [
      'Пилинг - 1 500 ₽ (очищение кожи головы)',
      'SPA-уход - 1 500 ₽ (восстановление и питание волос)',
      'Стрижка - 2 500 ₽',
    ],
  },
  {
    title: 'Сочный цвет',
    image: `${PROMO_BASE}/photo_2026-06-22_22-25-50.jpg`,
    oldPrice: '10 500 ₽',
    price: '5 500 ₽',
    services: [
      'SPA-уход - 1 500 ₽ (восстановление и питание волос)',
      'Однотонное окрашивание и тонирование - 7 500 ₽',
      'Укладка на Dyson - 1 500 ₽',
    ],
  },
  {
    title: 'Зеркальное полотно',
    image: `${PROMO_BASE}/photo_2026-06-22_22-25-51.jpg`,
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    services: [
      'SPA-уход - 1 500 ₽ (восстановление и питание волос)',
      'Пилинг - 1 500 ₽ (очищение кожи головы)',
      'Ботокс/кератин - 5 900 ₽ (блеск, гладкость и шелковистость)',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Комбо 3в1 для волос - акция LariBrand',
  description:
    'Актуальная акция LariBrand: четыре комбо 3в1 для восстановления, цвета, формы и гладкости волос.',
  openGraph: {
    title: 'Комбо 3в1 для волос - акция LariBrand',
    description:
      'Терапия глубокого восстановления, обновление формы, сочный цвет и зеркальное полотно в LariBrand.',
    images: [{ url: COMBOS[0].image }],
  },
}

const promoButton =
  'inline-flex min-h-[56px] items-center justify-center bg-[#5A0004] px-8 py-4 text-center font-forum text-[17px] font-normal uppercase tracking-[1.5px] text-[#F6EFE5] no-underline shadow-[0_18px_38px_rgba(50,0,4,0.24)] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

const promoButtonLight =
  'inline-flex min-h-[56px] items-center justify-center border border-[#5A0004]/20 bg-[#F6EFE5] px-8 py-4 text-center font-forum text-[17px] font-normal uppercase tracking-[1.5px] text-[#5A0004] no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="bg-[#530005] pt-[80px] font-forum text-[#F6EFE5]">
        <section className="relative overflow-hidden border-b border-[#F6EFE5]/16 px-5 py-[74px] max-[640px]:py-[46px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(246,239,229,0.12),transparent_28%),linear-gradient(135deg,#410003_0%,#650007_58%,#320002_100%)]" />
          <div className="relative mx-auto grid max-w-[1180px] grid-cols-[0.9fr_1.1fr] items-center gap-12 max-[920px]:grid-cols-1">
            <div className="promo-fade-1 max-w-[570px] max-[920px]:max-w-none">
              <p className="mb-5 w-fit border border-[#F6EFE5]/28 px-4 py-2 text-[12px] uppercase tracking-[4px] text-[#F6EFE5]/72 max-[520px]:mx-auto">
                Акция LariBrand
              </p>
              <h1
                className="mb-5 font-forum font-normal uppercase leading-[0.96] tracking-0 text-[#F6EFE5] max-[520px]:text-center"
                style={{ fontSize: 'clamp(44px, 7vw, 86px)' }}
              >
                Комбо 3в1
              </h1>
              <p className="mb-8 max-w-[520px] text-[24px] uppercase leading-[1.25] text-[#F6EFE5]/86 max-[520px]:text-center max-[520px]:text-[20px]">
                Восстановление, цвет, форма и зеркальная гладкость в готовых сценариях ухода.
              </p>
              <div className="mb-9 grid max-w-[540px] grid-cols-2 border-y border-[#F6EFE5]/18 max-[520px]:grid-cols-1">
                {['4 предложения', 'от 2 900 ₽', 'комбо 3в1', 'запись онлайн'].map((item) => (
                  <span
                    key={item}
                    className="border-r border-[#F6EFE5]/18 px-4 py-4 text-[14px] uppercase tracking-[2px] text-[#F6EFE5]/68 even:border-r-0 max-[520px]:border-b max-[520px]:border-r-0 max-[520px]:text-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 max-[520px]:justify-center">
                <a
                  href={sanitizeHref(content.sing_up_link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={promoButton}
                >
                  Записаться
                </a>
                <a href="#combos" className={promoButtonLight}>
                  Смотреть комбо
                </a>
              </div>
            </div>

            <div className="promo-fade-2 grid grid-cols-2 gap-4 max-[520px]:gap-3">
              {COMBOS.map((combo, index) => (
                <div
                  key={combo.image}
                  className={`overflow-hidden border border-[#F6EFE5]/16 bg-[#2D0003] shadow-[0_22px_50px_rgba(0,0,0,0.22)] ${
                    index % 2 === 1 ? 'mt-10 max-[520px]:mt-5' : ''
                  }`}
                >
                  <Image
                    src={combo.image}
                    alt={`Комбо 3в1 ${combo.title} - акция LariBrand`}
                    width={720}
                    height={1280}
                    className="h-auto w-full"
                    priority={index === 0}
                    sizes="(max-width: 920px) 45vw, 280px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="combos" className="bg-[#F6EFE5] px-5 py-[78px] text-[#4B0004] max-[640px]:py-[56px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-11 max-w-[780px]">
              <p className="mb-4 text-[12px] uppercase tracking-[4px] text-[#7A0008]/62">
                Меню акции
              </p>
              <h2
                className="font-forum font-normal uppercase leading-[1.02]"
                style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
              >
                Выберите задачу волос
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
              {COMBOS.map((combo, index) => (
                <article
                  key={combo.title}
                  className="grid grid-cols-[190px_1fr] overflow-hidden border border-[#5A0004]/18 bg-[#FFF9EF] shadow-[0_18px_45px_rgba(72,0,6,0.08)] max-[620px]:grid-cols-1"
                >
                  <div className="relative min-h-[290px] bg-[#530005] max-[620px]:min-h-[420px]">
                    <Image
                      src={combo.image}
                      alt={`Афиша акции ${combo.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 620px) 100vw, 190px"
                    />
                  </div>
                  <div className="p-6 max-[520px]:p-5">
                    <p className="mb-4 text-[12px] uppercase tracking-[3px] text-[#4B0004]/42">
                      Комбо 3в1 / 0{index + 1}
                    </p>
                    <h3 className="mb-5 text-[30px] uppercase leading-[1.02] text-[#5A0004] max-[520px]:text-[25px]">
                      {combo.title}
                    </h3>
                    <ol className="mb-7 grid gap-3">
                      {combo.services.map((service) => (
                        <li
                          key={service}
                          className="text-[17px] uppercase leading-[1.35] text-[#4B0004]/78 max-[520px]:text-[15px]"
                        >
                          {service}
                        </li>
                      ))}
                    </ol>
                    <div className="flex items-end justify-between gap-5 border-t border-[#5A0004]/16 pt-5">
                      <span className="text-[20px] text-[#4B0004]/42 line-through">
                        {combo.oldPrice}
                      </span>
                      <span className="text-[36px] leading-none text-[#5A0004]">
                        {combo.price}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#530005] px-5 py-[76px] max-[640px]:py-[56px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr] items-center gap-12 max-[900px]:grid-cols-1">
            <div>
              <p className="mb-4 text-[12px] uppercase tracking-[4px] text-[#F6EFE5]/48">
                Формат 3в1
              </p>
              <h2
                className="mb-6 font-forum font-normal uppercase leading-[1.02]"
                style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
              >
                Один визит - три действия
              </h2>
              <p className="max-w-[560px] text-[20px] leading-[1.65] text-[#F6EFE5]/72 max-[520px]:text-[17px]">
                В каждом комбо собраны процедуры, которые дополняют друг друга: очищение кожи головы,
                уход за полотном волос и финальный визуальный результат. Вы выбираете цель, мастер
                уточняет детали перед процедурой.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Глубокое восстановление для плотности и ухоженного полотна.',
                'Обновление формы для аккуратной стрижки и легкости у корней.',
                'Сочный цвет для свежего оттенка, питания и укладки.',
                'Зеркальное полотно для блеска, гладкости и шелковистости.',
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[58px_1fr] border border-[#F6EFE5]/16 bg-[#F6EFE5]/6 p-5 max-[520px]:grid-cols-1 max-[520px]:gap-3"
                >
                  <span className="text-[13px] uppercase tracking-[3px] text-[#F6EFE5]/42">
                    0{index + 1}
                  </span>
                  <p className="text-[20px] uppercase leading-[1.35] text-[#F6EFE5]/78 max-[520px]:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F6EFE5] px-5 py-[78px] text-center text-[#4B0004] max-[640px]:py-[56px]">
          <p className="mb-5 text-[12px] uppercase tracking-[4px] text-[#7A0008]/52">
            Запись на комбо
          </p>
          <h2
            className="mx-auto mb-6 max-w-[760px] font-forum font-normal uppercase leading-[1.02]"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
          >
            Заберите свое предложение в LariBrand
          </h2>
          <p className="mx-auto mb-9 max-w-[560px] text-[19px] leading-[1.65] text-[#4B0004]/68 max-[520px]:text-[16px]">
            Кнопка откроет онлайн-запись. Нужное комбо можно указать администратору или мастеру
            перед визитом.
          </p>
          <a
            href={sanitizeHref(content.sing_up_link)}
            target="_blank"
            rel="noopener noreferrer"
            className={promoButton}
          >
            Записаться
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
