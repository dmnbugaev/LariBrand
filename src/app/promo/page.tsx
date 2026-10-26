import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCampaignAvailability from '@/components/PromoCampaignAvailability'
import PromoCountdown from '@/components/PromoCountdown'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'
import BookingButton from '@/components/analytics/BookingButton'
import {
  getPromoStatus,
  PROMO_BENEFIT_LABEL,
  PROMO_DEADLINE_LABEL,
  PROMO_END,
  PROMO_HEADLINE,
  PROMO_MEDIA,
  PROMO_OFFERS,
  PROMO_PERIOD_LABEL,
  type PromoOffer,
} from '@/lib/promo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Акции и специальные предложения | LariBrand',
  description:
    'Акции и комбо-предложения салона красоты LariBrand в Саратове: специальные цены на процедуры для волос. Актуальные условия и сроки — на странице акций.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Акции LariBrand — салон красоты в Саратове',
    description: 'Специальные предложения и комбо-процедуры для волос в LariBrand. Условия и сроки — на странице акций.',
    images: [{ url: PROMO_MEDIA.campaignCover, width: 1080, height: 1920 }],
  },
}

const bookingButtonClass =
  'inline-flex min-h-[54px] items-center justify-center rounded-[12px] bg-brand-red px-9 py-4 text-center font-forum text-[17px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95 max-[460px]:w-full'

const bookingButtonInverseClass =
  'inline-flex min-h-[54px] items-center justify-center rounded-[12px] bg-white px-9 py-4 text-center font-forum text-[17px] text-brand-red no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-95 max-[460px]:w-full'

const promoOffers: readonly PromoOffer[] = PROMO_OFFERS

function InactivePromo({ scheduled = false }: { scheduled?: boolean }) {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-brand-bg px-5 pb-20 pt-[150px] text-brand-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] overflow-hidden opacity-40">
        <Image
          src={PROMO_MEDIA.campaignCover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E1DCD8]/10 via-[#E1DCD8]/45 to-[#E1DCD8]" />
      </div>
      <div className="relative mx-auto w-full max-w-[860px] border border-brand-red/25 bg-white/92 px-8 py-16 text-center shadow-[0_28px_80px_rgba(34,34,34,0.12)] max-[560px]:px-5 max-[560px]:py-12">
        <p className="mb-5 font-forum text-[12px] uppercase tracking-[0.3em] text-brand-red/80">
          LariBrand / специальное предложение
        </p>
        <h1 className="mb-6 font-forum text-[54px] leading-[1.05] text-brand-red max-[640px]:text-[34px]">
          {scheduled ? 'Акция начнётся 26 октября' : 'Акция завершена'}
        </h1>
        <p className="mx-auto max-w-[620px] text-[19px] leading-[1.55] text-brand-black/75 max-[560px]:text-[16px]">
          {scheduled
            ? 'Четыре комбо-предложения будут доступны с 26 по 31 октября по саратовскому времени.'
            : 'Спасибо всем, кто воспользовался специальными предложениями LariBrand с 26 по 31 октября.'}
        </p>
      </div>
    </main>
  )
}

function OfferPrice({ offer }: { offer: PromoOffer }) {
  if (offer.gift) {
    return (
      <p className="border-y border-brand-red/20 py-5 font-forum text-[24px] leading-tight text-brand-red max-[520px]:text-[20px]">
        {offer.gift}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-end gap-x-6 gap-y-2 border-y border-brand-red/20 py-5">
      <span className="text-[22px] text-brand-black/45 line-through">{offer.oldPrice}</span>
      <span className="font-forum text-[46px] leading-none text-brand-red max-[520px]:text-[38px]">
        {offer.price}
      </span>
      {offer.benefitLabel ? (
        <span className="mb-2 border border-brand-red/35 bg-brand-bg px-3 py-1.5 font-forum text-[13px] uppercase tracking-[0.08em] text-brand-red max-[520px]:mb-0">
          {offer.benefitLabel}
        </span>
      ) : null}
    </div>
  )
}

function SummarySection() {
  return (
    <section className="bg-brand-bg px-5 py-20 max-[640px]:py-12" aria-labelledby="promo-summary-title">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-12 md:grid-cols-[minmax(260px,0.5fr)_minmax(0,1.5fr)] max-[640px]:gap-9">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden border border-brand-black/15 bg-white shadow-[0_22px_60px_rgba(34,34,34,0.14)]">
          <Image
            src={PROMO_MEDIA.summaryPoster}
            alt="Сводный постер акции: четыре комбо-предложения LariBrand со специальными ценами октября"
            fill
            sizes="(max-width: 768px) 80vw, 340px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="mb-4 font-forum text-[12px] uppercase tracking-[0.28em] text-brand-red">
            Вся акция — на одном постере
          </p>
          <h2
            id="promo-summary-title"
            className="mb-6 max-w-[640px] font-forum text-[42px] leading-[1.08] text-brand-black max-[640px]:text-[30px]"
          >
            Все предложения октября — коротко
          </h2>

          <div className="mb-7 grid gap-3 text-[18px] font-medium leading-[1.4] text-brand-black max-[520px]:text-[16px]">
            {promoOffers.map((offer) => (
              <p key={offer.id} className="flex items-baseline justify-between gap-4 border-b border-brand-black/10 pb-3">
                <span className="min-w-0">{offer.title}</span>
                <span className="shrink-0 font-forum text-[22px] text-brand-red max-[520px]:text-[19px]">
                  {offer.price}
                </span>
              </p>
            ))}
          </div>

          <p className="mb-7 max-w-[560px] text-[14px] leading-[1.55] text-brand-black/65 max-[520px]:text-[13px]">
            Предложение действует по 31 октября 2026 года включительно. Подбор процедуры и итоговую
            стоимость уточнит мастер на консультации.
          </p>
          <BookingButton
            href={sanitizeHref(content.sing_up_link)}
            placement="promo"
            className={`${bookingButtonClass} w-fit max-[460px]:w-full`}
          >
            Записаться
          </BookingButton>
        </div>
      </div>
    </section>
  )
}

function ActivePromo() {
  return (
    <main className="overflow-x-hidden bg-white pt-[80px] text-brand-black">
      <section className="relative overflow-hidden border-b border-brand-black/10 bg-brand-bg px-5 py-12 max-[700px]:py-10">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] items-center gap-14 max-[920px]:grid-cols-1 max-[560px]:gap-9">
          <div className="promo-fade-1 min-w-0 pt-4 max-[920px]:pt-2">
            <p className="mb-5 w-fit border border-brand-red bg-white/70 px-4 py-2 font-forum text-[12px] uppercase tracking-[0.28em] text-brand-red max-[560px]:mx-auto max-[560px]:tracking-[0.18em]">
              LariBrand / 26–31 октября
            </p>
            <h1 className="mb-6 max-w-[720px] font-forum text-[64px] leading-[1.02] text-brand-red [overflow-wrap:anywhere] max-[720px]:text-[46px] max-[560px]:text-center max-[560px]:text-[34px]">
              {PROMO_HEADLINE}
            </h1>
            <p className="mb-4 max-w-[640px] text-[25px] leading-[1.25] text-brand-black max-[560px]:text-center max-[560px]:text-[20px]">
              Четыре комбо-процедуры для волос — {PROMO_BENEFIT_LABEL}
            </p>
            <p className="mb-7 max-w-[620px] text-[18px] leading-[1.55] text-brand-black/75 max-[560px]:text-center max-[560px]:text-[16px]">
              Собрали четыре эффективных комбо для гладкости, объёма, восстановления и изменения
              образа. {PROMO_PERIOD_LABEL}.
            </p>
            <div className="mb-7 max-w-[620px]">
              <PromoCountdown deadline={PROMO_END} deadlineLabel={PROMO_DEADLINE_LABEL} />
            </div>
            <BookingButton
              href={sanitizeHref(content.sing_up_link)}
              placement="promo"
              className={bookingButtonClass}
            >
              Записаться
            </BookingButton>
          </div>

          <div className="promo-fade-2 relative mx-auto aspect-[9/16] w-full max-w-[400px] overflow-hidden border border-brand-black/15 bg-[#FCFAF6] shadow-[0_30px_90px_rgba(34,34,34,0.18)]">
            <Image
              src={PROMO_MEDIA.campaignCover}
              alt="Постер акции LariBrand: специальное предложение октября для волос"
              fill
              priority
              sizes="(max-width: 920px) 88vw, 440px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 max-[640px]:py-12">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-12 grid grid-cols-[1fr_0.62fr] items-end gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-4">
            <div>
              <p className="mb-4 font-forum text-[12px] uppercase tracking-[0.3em] text-brand-red">
                Четыре комбо-предложения
              </p>
              <h2 className="max-w-[820px] font-forum text-[48px] leading-[1.05] text-brand-black max-[640px]:text-[32px]">
                Выберите своё комбо
              </h2>
            </div>
            <p className="text-[17px] leading-[1.55] text-brand-black/70 max-[640px]:text-[15px]">
              Сравните состав и условия процедур и забронируйте удобное время у администратора
              LariBrand.
            </p>
          </div>

          <div className="grid gap-10">
            {promoOffers.map((offer, index) => (
              <article
                key={offer.id}
                className="grid min-w-0 overflow-hidden border border-brand-black/12 bg-white shadow-[0_22px_60px_rgba(34,34,34,0.09)] md:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]"
                aria-labelledby={`promo-offer-${offer.id}`}
              >
                <div
                  className={`flex items-center justify-center bg-brand-bg p-5 max-[520px]:p-3 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden">
                    {offer.poster ? (
                      <Image
                        src={offer.poster}
                        alt={`Постер предложения «${offer.title}» — состав и специальные цены октября`}
                        fill
                        sizes="(max-width: 768px) 90vw, 430px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-center p-10 max-[640px]:p-7 max-[420px]:p-5">
                  <p className="mb-5 font-forum text-[12px] uppercase tracking-[0.28em] text-brand-red/85">
                    Предложение / {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3
                    id={`promo-offer-${offer.id}`}
                    className="mb-4 break-words font-forum text-[38px] leading-[1.08] text-brand-black [overflow-wrap:anywhere] max-[640px]:text-[28px]"
                  >
                    {offer.title}
                  </h3>
                  <p className="mb-6 text-[19px] font-semibold leading-[1.35] text-brand-red max-[520px]:text-[16px]">
                    {offer.subtitle}
                  </p>
                  <p className="mb-6 text-[17px] leading-[1.55] text-brand-black/75 max-[520px]:text-[15px]">
                    {offer.description}
                  </p>

                  {offer.benefits.length > 0 ? (
                    <ul className="mb-7 grid gap-2.5 text-[16px] leading-[1.45] text-brand-black max-[520px]:text-[14px]">
                      {offer.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3">
                          <span aria-hidden="true" className="shrink-0 font-forum text-brand-red">
                            {'//'}
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {offer.duration ? (
                    <p className="mb-5 flex items-center gap-3 font-forum text-[15px] uppercase tracking-[0.08em] text-brand-black/70 max-[520px]:text-[13px]">
                      <span aria-hidden="true">◷</span>
                      Время процедуры: {offer.duration}
                    </p>
                  ) : null}
                  <OfferPrice offer={offer} />
                  <BookingButton
                    href={sanitizeHref(content.sing_up_link)}
                    placement="promo"
                    className={`${bookingButtonClass} mt-7 w-fit max-[460px]:w-full`}
                  >
                    Записаться
                  </BookingButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SummarySection />

      <section className="bg-brand-red px-5 py-20 text-white max-[640px]:py-12">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="mb-5 font-forum text-[12px] uppercase tracking-[0.3em] text-white/80">
            Только 26–31 октября
          </p>
          <h2 className="mb-6 font-forum text-[52px] leading-[1.05] max-[640px]:text-[32px]">
            Время для нового образа
          </h2>
          <p className="mx-auto mb-8 max-w-[650px] text-[18px] leading-[1.55] text-white/85 max-[520px]:text-[16px]">
            Выберите подходящий комплекс и забронируйте время. Администратор поможет уточнить состав
            процедуры и подобрать мастера.
          </p>
          <BookingButton
            href={sanitizeHref(content.sing_up_link)}
            placement="promo"
            className={bookingButtonInverseClass}
          >
            Записаться
          </BookingButton>
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
