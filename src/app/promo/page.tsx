import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCampaignAvailability from '@/components/PromoCampaignAvailability'
import PromoCountdown from '@/components/PromoCountdown'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'
import {
  getPromoStatus,
  PROMO_END,
  PROMO_MEDIA,
  PROMO_OFFERS,
  PROMO_PERIOD_LABEL,
  type PromoOffer,
} from '@/lib/promo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Процедуры для волос с выгодой до 60% — акция 14–18 сентября',
  description:
    'Шесть специальных предложений LariBrand в Саратове с 14 по 18 сентября 2026 года: восстановление, выпрямление, окрашивание, стрижка и биозавивка.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Процедуры с выгодой до 60% — LariBrand',
    description: 'Шесть комплексов для волос по специальным условиям с 14 по 18 сентября.',
    images: [{ url: PROMO_MEDIA.campaignCover, width: 1080, height: 1920 }],
  },
}

const bookingButtonClass =
  'inline-flex min-h-[54px] items-center justify-center rounded-[12px] bg-[#a30f16] px-7 py-4 text-center text-[15px] font-bold uppercase tracking-[0.12em] text-white no-underline shadow-[0_16px_34px_rgba(103,17,23,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#8f0d13] active:translate-y-0 max-[460px]:w-full'

const promoOffers: readonly PromoOffer[] = PROMO_OFFERS

function InactivePromo({ scheduled = false }: { scheduled?: boolean }) {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#f5f0e5] px-5 pb-20 pt-[150px] text-[#642427]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] overflow-hidden opacity-45">
        <Image
          src={PROMO_MEDIA.campaignCover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e5]/10 via-[#f5f0e5]/45 to-[#f5f0e5]" />
      </div>
      <div className="relative mx-auto w-full max-w-[860px] border border-[#9d151b]/20 bg-[#fffdf7]/90 px-8 py-16 text-center shadow-[0_28px_80px_rgba(87,39,27,0.14)] backdrop-blur-sm max-[560px]:px-5 max-[560px]:py-12">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#a30f16]/70">
          LariBrand / специальное предложение
        </p>
        <h1 className="mb-6 font-sans text-[62px] font-black uppercase leading-[0.94] text-[#a30f16] max-[640px]:text-[36px]">
          {scheduled ? 'Акция начнётся 14 сентября' : 'Акция завершена'}
        </h1>
        <p className="mx-auto max-w-[620px] text-[20px] leading-[1.5] text-[#642427]/75 max-[560px]:text-[17px]">
          {scheduled
            ? 'Шесть специальных предложений будут доступны с 14 по 18 сентября по саратовскому времени.'
            : 'Спасибо всем, кто воспользовался специальными предложениями LariBrand с 14 по 18 сентября.'}
        </p>
      </div>
    </main>
  )
}

function OfferPrice({ offer }: { offer: PromoOffer }) {
  if (offer.gift) {
    return (
      <p className="border-y border-[#a30f16]/20 py-5 font-sans text-[26px] font-black uppercase leading-tight text-[#a30f16] max-[520px]:text-[22px]">
        <span aria-hidden="true" className="mr-2 text-[#d89c16]">
          ◆
        </span>
        {offer.gift}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-end gap-x-5 gap-y-2 border-y border-[#a30f16]/20 py-5">
      <span className="text-[25px] text-[#642427]/45 line-through">{offer.oldPrice}</span>
      <span className="font-sans text-[48px] font-black leading-none text-[#a30f16] max-[520px]:text-[40px]">
        {offer.price}
      </span>
    </div>
  )
}

function ActivePromo() {
  return (
    <main className="overflow-x-hidden bg-[#f5f0e5] pt-[80px] text-[#642427]">
      <section className="relative overflow-hidden border-b border-[#a30f16]/15 px-5 py-16 max-[700px]:py-10">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] items-center gap-14 max-[920px]:grid-cols-1 max-[560px]:gap-9">
          <div className="promo-fade-1 min-w-0 pt-10 max-[920px]:pt-4">
            <p className="mb-5 w-fit border border-[#a30f16] bg-[#f5f0e5]/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#a30f16] backdrop-blur-sm max-[560px]:mx-auto max-[560px]:tracking-[0.18em]">
              LariBrand / 14–18 сентября
            </p>
            <h1 className="mb-6 max-w-[720px] break-words font-sans text-[72px] font-black uppercase leading-[0.92] text-[#a30f16] [overflow-wrap:anywhere] max-[720px]:text-[50px] max-[560px]:text-center max-[560px]:text-[36px]">
              Процедуры с выгодой до 60%
            </h1>
            <p className="mb-4 max-w-[640px] text-[26px] leading-[1.18] text-[#642427] max-[560px]:text-center max-[560px]:text-[21px]">
              Перезагрузка для ваших волос без крайних мер
            </p>
            <p className="mb-7 max-w-[620px] text-[18px] leading-[1.55] text-[#642427]/75 max-[560px]:text-center max-[560px]:text-[16px]">
              Собрали шесть комплексов для гладкости, объёма, восстановления и смены образа. {PROMO_PERIOD_LABEL}.
            </p>
            <div className="mb-7 max-w-[620px]">
              <PromoCountdown deadline={PROMO_END} deadlineLabel="до 18 сентября включительно" />
            </div>
            <a
              href={sanitizeHref(content.sing_up_link)}
              target="_blank"
              rel="noopener noreferrer"
              className={bookingButtonClass}
            >
              Записаться
            </a>
          </div>

          <div className="promo-fade-2 relative mx-auto aspect-[9/16] w-full max-w-[440px] overflow-hidden border border-[#a30f16]/20 bg-[#eee6d7] shadow-[0_30px_90px_rgba(81,42,25,0.25)]">
            <Image
              src={PROMO_MEDIA.campaignCover}
              alt="Постер акции LariBrand: процедуры с выгодой до 60 процентов с 14 по 18 сентября"
              fill
              priority
              sizes="(max-width: 920px) 88vw, 440px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 max-[640px]:py-12">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-12 grid grid-cols-[1fr_0.62fr] items-end gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-4">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#a30f16]">
                Шесть специальных предложений
              </p>
              <h2 className="max-w-[820px] font-sans text-[56px] font-black uppercase leading-[0.95] text-[#a30f16] max-[640px]:text-[34px]">
                Выберите свою перезагрузку
              </h2>
            </div>
            <p className="text-[17px] leading-[1.55] text-[#642427]/70 max-[640px]:text-[15px]">
              Откройте постер, сравните условия и забронируйте удобное время у администратора LariBrand.
            </p>
          </div>

          <div className="grid gap-10">
            {promoOffers.map((offer, index) => (
              <article
                key={offer.id}
                className="grid min-w-0 overflow-hidden border border-[#a30f16]/16 bg-[#fffdf7] shadow-[0_22px_60px_rgba(91,52,28,0.1)] md:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]"
                aria-labelledby={`promo-offer-${offer.id}`}
              >
                <div
                  className={`flex items-center justify-center bg-[#e9e2d4] p-5 max-[520px]:p-3 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[9/16] w-full max-w-[430px] overflow-hidden bg-[#f5f0e5] shadow-[0_18px_48px_rgba(72,42,28,0.16)]">
                    <Image
                      src={offer.media}
                      alt={`Постер предложения «${offer.title}»`}
                      fill
                      sizes="(max-width: 768px) 90vw, 430px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-center p-10 max-[640px]:p-7 max-[420px]:p-5">
                  <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#a30f16]/65">
                    Предложение / {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3
                    id={`promo-offer-${offer.id}`}
                    className="mb-4 break-words font-sans text-[42px] font-black uppercase leading-[0.98] text-[#a30f16] [overflow-wrap:anywhere] max-[640px]:text-[30px]"
                  >
                    {offer.title}
                  </h3>
                  <p className="mb-6 text-[20px] font-semibold leading-[1.35] text-[#642427] max-[520px]:text-[17px]">
                    {offer.subtitle}
                  </p>
                  <p className="mb-7 text-[18px] leading-[1.55] text-[#642427]/75 max-[520px]:text-[16px]">
                    {offer.description}
                  </p>

                  {offer.benefits.length > 0 ? (
                    <ul className="sr-only">
                      {offer.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  ) : null}

                  <p className="mb-5 flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.08em] text-[#642427]/70">
                    <span aria-hidden="true" className="text-[22px] text-[#d89c16]">
                      ◷
                    </span>
                    Время процедуры: {offer.duration}
                  </p>
                  <OfferPrice offer={offer} />
                  <a
                    href={sanitizeHref(content.sing_up_link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bookingButtonClass} mt-7 w-fit max-[460px]:w-full`}
                  >
                    Записаться
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#771018] px-5 py-20 text-[#fffaf0] max-[640px]:py-12">
        <Image
          src="/promo/IMG_0384.JPG"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#651018] via-[#771018]/95 to-[#771018]/72" />
        <div className="mx-auto max-w-[880px] text-center">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#f1c456]">
            Только 14–18 сентября
          </p>
          <h2 className="mb-6 font-sans text-[58px] font-black uppercase leading-[0.95] max-[640px]:text-[35px]">
            Время для нового образа
          </h2>
          <p className="mx-auto mb-8 max-w-[650px] text-[19px] leading-[1.55] text-[#fffaf0]/80 max-[520px]:text-[16px]">
            Выберите подходящий комплекс и забронируйте время. Администратор поможет уточнить состав процедуры и подобрать мастера.
          </p>
          <a
            href={sanitizeHref(content.sing_up_link)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[54px] items-center justify-center rounded-[12px] bg-[#fff7e8] px-8 py-4 text-[15px] font-bold uppercase tracking-[0.12em] text-[#8f0d13] no-underline shadow-[0_16px_36px_rgba(36,0,5,0.25)] transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0 max-[460px]:w-full"
          >
            Записаться
          </a>
        </div>
      </section>
    </main>
  )
}

export default function PromoPage() {
  const status = getPromoStatus()

  return (
    <>
      <Header />
      {status === 'active' ? (
        <PromoCampaignAvailability expired={<InactivePromo />}>
          <ActivePromo />
        </PromoCampaignAvailability>
      ) : (
        <InactivePromo scheduled={status === 'scheduled'} />
      )}
      <Footer />
    </>
  )
}
