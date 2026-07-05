import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCountdown from '@/components/PromoCountdown'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'

const PROMO_DEADLINE = '2026-07-15T23:59:59+04:00'
const TELEGRAM_LINK = 'https://t.me/Lari_Brand64'

const COMBOS = [
  {
    title: 'Терапия глубокого восстановления',
    image: '/promo/IMG_3201.gif',
    oldPrice: '9 700 ₽',
    price: '5 500 ₽',
    services: [
      'Пилинг кожи головы - 1 500 ₽',
      'Холодная реконструкция Dr. Sorbie - 6 700 ₽',
      'Визуальное завершение - 1 500 ₽',
    ],
  },
  {
    title: 'Зеркальное полотно',
    image: '/promo/IMG_3202.gif',
    oldPrice: '8 900 ₽',
    price: '5 500 ₽',
    services: [
      'Пилинг кожи головы - 1 500 ₽',
      'Spa-уход - 1 500 ₽',
      'Ботокс в теплой технике - 5 900 ₽',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Специальное предложение 1-15 июля - LariBrand',
  description:
    'Акция LariBrand с 1 по 15 июля: комбо 3в1 для глубокого восстановления и зеркального полотна за 5 500 ₽.',
  openGraph: {
    title: 'Специальное предложение LariBrand',
    description: 'Комбо 3в1 для волос по специальной цене с 1 по 15 июля.',
    images: [{ url: '/promo/IMG_3200.gif' }],
  },
}

const promoButton =
  'inline-flex min-h-[56px] items-center justify-center rounded-[14px] bg-brand-red px-7 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

const promoButtonLight =
  'inline-flex min-h-[56px] items-center justify-center rounded-[14px] bg-brand-red px-7 py-[18px] text-center font-forum text-[17px] font-normal uppercase text-white no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="bg-[#ffd2df] pt-[80px] font-forum text-[#3b0711]">
        <section className="relative overflow-hidden px-5 py-[54px] sm:py-[70px]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.58),rgba(255,177,204,0.42)),radial-gradient(circle_at_80%_10%,rgba(123,18,49,0.16),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.24] [background-image:linear-gradient(135deg,transparent_0_44%,rgba(123,18,49,0.35)_45%,transparent_47%)] [background-size:120px_120px]" />

          <div className="relative mx-auto grid max-w-[1200px] grid-cols-[0.9fr_1.1fr] items-center gap-10 lg:gap-14 max-[940px]:grid-cols-1">
            <div className="promo-fade-1">
              <p className="mb-5 w-fit bg-white/62 px-4 py-2 text-[12px] uppercase tracking-[4px] text-[#7b1231] shadow-[0_12px_30px_rgba(92,0,28,0.10)] max-[560px]:mx-auto">
                LariBrand / 1-15 июля
              </p>
              <h1
                className="mb-5 max-w-[620px] font-forum font-normal uppercase leading-[0.92] text-[#3b0711] max-[560px]:text-center"
                style={{ fontSize: 'clamp(42px, 7vw, 92px)' }}
              >
                Специальное предложение
              </h1>
              <p className="mb-7 max-w-[560px] text-[24px] uppercase leading-[1.25] text-[#5b1020] max-[560px]:text-center max-[560px]:text-[20px]">
                Комбо 3в1 для волос по цене 5 500 ₽. Выбирайте глубокое восстановление или зеркальное полотно.
              </p>
              <div className="mb-7 max-w-[560px]">
                <PromoCountdown deadline={PROMO_DEADLINE} />
              </div>
              <div className="flex flex-wrap gap-3 max-[560px]:justify-center">
                <a
                  href={sanitizeHref(content.sing_up_link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={promoButton}
                >
                  Записаться
                </a>
                <a
                  href={sanitizeHref(TELEGRAM_LINK)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={promoButtonLight}
                >
                  Telegram
                </a>
              </div>
            </div>

            <div className="promo-fade-2">
              <div className="mx-auto max-w-[430px] rotate-[1.5deg] bg-white p-3 shadow-[0_30px_80px_rgba(92,0,28,0.24)] max-[940px]:max-w-[360px] max-[520px]:max-w-[300px]">
                <Image
                  src="/promo/IMG_3200.gif"
                  alt="Специальное предложение LariBrand с 1 по 15 июля"
                  width={1080}
                  height={1920}
                  className="h-auto w-full"
                  priority
                  unoptimized
                  sizes="(max-width: 520px) 300px, (max-width: 940px) 360px, 430px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="combos" className="bg-[#fff7fa] px-5 py-[72px] text-[#3b0711] max-[640px]:py-[52px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex items-end justify-between gap-6 max-[760px]:block">
              <div className="max-w-[760px]">
                <p className="mb-4 text-[12px] uppercase tracking-[4px] text-[#7b1231]/62">
                  Комбо акции
                </p>
                <h2
                  className="font-forum font-normal uppercase leading-[1.02]"
                  style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
                >
                  Две процедуры 3в1
                </h2>
              </div>
              <p className="max-w-[320px] text-[18px] uppercase leading-[1.35] text-[#5b1020]/72 max-[760px]:mt-5">
                Цена действует только с 1 по 15 июля.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-[880px]:grid-cols-1">
              {COMBOS.map((combo, index) => (
                <article
                  key={combo.title}
                  className="grid grid-cols-[minmax(230px,0.82fr)_1fr] overflow-hidden border border-[#3b0711]/12 bg-white shadow-[0_18px_45px_rgba(92,0,28,0.10)] max-[640px]:grid-cols-1"
                >
                  <div className="relative bg-[#ffd2df]">
                    <Image
                      src={combo.image}
                      alt={`Комбо 3в1 ${combo.title} - акция LariBrand`}
                      width={1080}
                      height={1920}
                      className="h-full min-h-[520px] w-full object-cover max-[640px]:min-h-0"
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-7 max-[520px]:p-5">
                    <div>
                      <p className="mb-4 text-[12px] uppercase tracking-[3px] text-[#7b1231]/50">
                        Комбо 3в1 / 0{index + 1}
                      </p>
                      <h3 className="mb-6 text-[34px] uppercase leading-[1.02] text-[#3b0711] max-[520px]:text-[27px]">
                        {combo.title}
                      </h3>
                      <ol className="mb-7 grid gap-3">
                        {combo.services.map((service) => (
                          <li
                            key={service}
                            className="border-b border-[#3b0711]/10 pb-3 text-[19px] uppercase leading-[1.35] text-[#5b1020]/82 last:border-b-0 max-[520px]:text-[16px]"
                          >
                            {service}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <div className="mb-6 flex items-end justify-between gap-5 border-t border-[#3b0711]/16 pt-5">
                        <span className="text-[24px] text-[#7b1231]/46 line-through">
                          {combo.oldPrice}
                        </span>
                        <span className="text-[46px] leading-none text-[#3b0711] max-[520px]:text-[38px]">
                          {combo.price}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={sanitizeHref(content.sing_up_link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={promoButton}
                        >
                          Записаться
                        </a>
                        <a
                          href={sanitizeHref(TELEGRAM_LINK)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={promoButtonLight}
                        >
                          Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#3b0711] px-5 py-[72px] text-[#ffe5ef] max-[640px]:py-[52px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[0.95fr_1.05fr] items-center gap-10 max-[900px]:grid-cols-1">
            <div>
              <p className="mb-4 text-[12px] uppercase tracking-[4px] text-[#ffe5ef]/52">
                Условия
              </p>
              <h2
                className="mb-6 font-forum font-normal uppercase leading-[1.02]"
                style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
              >
                Забронируйте время до окончания акции
              </h2>
              <p className="max-w-[560px] text-[20px] uppercase leading-[1.45] text-[#ffe5ef]/74 max-[520px]:text-[17px]">
                Предложение действует с 1 по 15 июля. Записаться можно онлайн через YCLIENTS или написать нам в Telegram, чтобы уточнить свободные окна.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Стоимость каждого комбо по акции - 5 500 ₽.',
                'В комбо включены три услуги, указанные на афише.',
                'Финальный подбор процедуры мастер делает после диагностики волос.',
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[58px_1fr] border border-[#ffe5ef]/18 bg-[#ffe5ef]/7 p-5 max-[520px]:grid-cols-1 max-[520px]:gap-3"
                >
                  <span className="text-[13px] uppercase tracking-[3px] text-[#ffe5ef]/42">
                    0{index + 1}
                  </span>
                  <p className="text-[20px] uppercase leading-[1.35] text-[#ffe5ef]/82 max-[520px]:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ffd2df] px-5 py-[72px] text-center text-[#3b0711] max-[640px]:py-[52px]">
          <div className="mx-auto max-w-[820px]">
            <p className="mb-5 text-[12px] uppercase tracking-[4px] text-[#7b1231]/60">
              Запись
            </p>
            <h2
              className="mx-auto mb-6 font-forum font-normal uppercase leading-[1.02]"
              style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
            >
              Успейте забрать специальную цену
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[20px] uppercase leading-[1.45] text-[#5b1020]/74 max-[520px]:text-[16px]">
              Таймер идет до конца 15 июля. После записи администратор поможет выбрать нужное комбо.
            </p>
            <div className="mx-auto mb-8 max-w-[620px]">
              <PromoCountdown deadline={PROMO_DEADLINE} />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={sanitizeHref(content.sing_up_link)}
                target="_blank"
                rel="noopener noreferrer"
                className={promoButton}
              >
                Записаться в YCLIENTS
              </a>
              <a
                href={sanitizeHref(TELEGRAM_LINK)}
                target="_blank"
                rel="noopener noreferrer"
                className={promoButtonLight}
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
