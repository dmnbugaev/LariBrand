import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCampaignAvailability from '@/components/PromoCampaignAvailability'
import PromoCountdown from '@/components/PromoCountdown'
import PromoOfferMedia from '@/components/PromoOfferMedia'
import BookingButton from '@/components/analytics/BookingButton'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'
import {
  getPromoStatus,
  PROMO_DEADLINE_LABEL,
  PROMO_END,
  PROMO_HEADLINE,
  PROMO_MEDIA,
  PROMO_OFFERS,
  PROMO_PERIOD_LABEL,
} from '@/lib/promo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Акция 1–8 ноября | LariBrand',
  description: 'Пять специальных предложений для волос в LariBrand: комбо-уходы, окрашивание и реконструкция. С 1 по 8 ноября 2026 года.',
  alternates: { canonical: 'https://laribrand.ru/promo' },
  openGraph: {
    title: 'Специальное предложение 1–8 ноября | LariBrand',
    description: 'Пять процедур для волос по специальной цене. Выберите свою в LariBrand.',
    images: [{ url: PROMO_MEDIA.campaignCover, width: 1080, height: 1920 }],
  },
}

const bookingHref = sanitizeHref(content.sing_up_link)
const primaryButton = 'inline-flex min-h-14 items-center justify-center rounded-full bg-[#3D2418] px-8 py-3 text-center font-forum text-[18px] text-[#FFF9ED] no-underline transition hover:bg-[#65402B] focus-visible:outline-[#EAB93F] max-[480px]:w-full'

function InactivePromo({ scheduled = false }: { scheduled?: boolean }) {
  return (
    <main className="relative flex min-h-[calc(100dvh-80px)] items-center bg-[#F8F3E7] px-5 pb-20 pt-[150px] text-[#3D2418]">
      <div className="mx-auto grid w-full max-w-[1050px] items-center gap-10 overflow-hidden rounded-[28px] bg-[#F2E9D7] p-6 shadow-[0_30px_80px_rgba(61,36,24,.12)] md:grid-cols-2 md:p-10">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[.28em] text-[#855F42]">LariBrand · 1–8 ноября</p>
          <h1 className="mb-5 font-forum text-[clamp(38px,5vw,68px)] leading-[1.02]">
            {scheduled ? 'Скоро особенное предложение' : 'Акция завершена'}
          </h1>
          <p className="max-w-[490px] text-lg leading-relaxed text-[#654B3B]">
            {scheduled
              ? 'Пять предложений для ваших волос будут доступны с 1 по 8 ноября по саратовскому времени.'
              : 'Спасибо, что провели эти дни с LariBrand. Будем рады видеть вас снова.'}
          </p>
        </div>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-[20px]">
          <Image src={PROMO_MEDIA.campaignCover} alt="Обложка акции LariBrand 1–8 ноября" fill priority sizes="(max-width: 768px) 80vw, 330px" className="object-cover" />
        </div>
      </div>
    </main>
  )
}

function ActivePromo() {
  return (
    <main className="overflow-hidden bg-[#F8F3E7] pt-[80px] text-[#3D2418]">
      <section className="relative px-5 py-12 md:py-20" aria-labelledby="promo-title">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#D9B78B]/25 blur-3xl" />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div className="promo-fade-1 relative">
            <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#B59573] px-5 py-2.5 text-[12px] uppercase tracking-[.22em]">
              <span className="h-2 w-2 rounded-full bg-[#D6A535]" />
              LariBrand · 1–8 ноября
            </p>
            <p className="mb-4 font-forum text-[clamp(22px,3vw,34px)] italic text-[#986B46]">Приглашение к красоте</p>
            <h1 id="promo-title" className="mb-7 max-w-[690px] font-forum text-[clamp(48px,6.5vw,92px)] leading-[.96] tracking-[-.035em]">
              {PROMO_HEADLINE}
            </h1>
            <p className="mb-7 max-w-[540px] text-[clamp(17px,2vw,21px)] leading-[1.55] text-[#604633]">
              Пять вариантов заботы о волосах: от свежей стрижки до глубокого восстановления и цвета. Выберите своё предложение {PROMO_PERIOD_LABEL}.
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <BookingButton href={bookingHref} placement="promo" className={primaryButton}>Записаться</BookingButton>
              <a href="#offers" className="inline-flex min-h-14 items-center border-b border-[#8F6648] px-1 text-[17px] text-[#3D2418] no-underline transition hover:text-[#986B46]">Смотреть предложения ↗</a>
            </div>
            <div className="max-w-[510px]"><PromoCountdown deadline={PROMO_END} deadlineLabel={PROMO_DEADLINE_LABEL} /></div>
          </div>
          <div className="promo-fade-2 relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-4 rotate-[3deg] rounded-[24px] border border-[#B8936C]/50" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] bg-[#EEE4D1] shadow-[0_36px_80px_rgba(61,36,24,.22)]">
              <Image src={PROMO_MEDIA.campaignCover} alt="Специальное предложение LariBrand 1–8 ноября" fill priority sizes="(max-width: 1024px) 85vw, 480px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="relative bg-[#EEE3D0] px-5 py-16 md:py-24" aria-labelledby="offers-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 flex flex-col gap-5 border-b border-[#9B765B]/30 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[12px] uppercase tracking-[.28em] text-[#906644]">Выберите своё</p>
              <h2 id="offers-title" className="font-forum text-[clamp(40px,5vw,68px)] leading-none">Пять поводов сиять</h2>
            </div>
            <p className="max-w-[320px] text-[16px] leading-relaxed text-[#6F5340]">Каждая процедура — маленькое событие для ваших волос.</p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {PROMO_OFFERS.map((offer, index) => (
              <article key={offer.id} className="grid overflow-hidden rounded-[24px] bg-[#FBF7EF] shadow-[0_22px_65px_rgba(72,42,28,.11)] md:grid-cols-[minmax(280px,.88fr)_minmax(0,1.12fr)]" aria-labelledby={`offer-${offer.id}`}>
                <div className={`relative flex items-center justify-center bg-[#B48C6C] p-4 sm:p-7 ${index % 2 ? 'md:order-2' : ''}`}>
                  <div className="w-full max-w-[380px] overflow-hidden rounded-[12px]"><PromoOfferMedia offer={offer} sizes="(max-width: 768px) 90vw, 380px" /></div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                  <p className="mb-5 text-[12px] uppercase tracking-[.25em] text-[#986B46]">Предложение {String(index + 1).padStart(2, '0')} / 05</p>
                  <h3 id={`offer-${offer.id}`} className="mb-4 font-forum text-[clamp(32px,3.4vw,52px)] leading-[1.04]">{offer.title}</h3>
                  <p className="mb-5 text-[17px] leading-snug text-[#8B5E3D]">{offer.subtitle}</p>
                  <p className="mb-6 max-w-[530px] text-[16px] leading-relaxed text-[#6A4D39]">{offer.description}</p>
                  <ul className="mb-7 grid gap-2.5 text-[15px] leading-snug text-[#4E392B]">
                    {offer.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><span className="text-[#C99422]" aria-hidden="true">✦</span>{benefit}</li>)}
                  </ul>
                  <p className="mb-5 text-sm text-[#83634C]">Время процедуры: {offer.duration}</p>
                  <div className="flex flex-wrap items-end gap-x-5 gap-y-2 border-t border-[#B59573]/40 pt-5">
                    <span className="font-forum text-[clamp(40px,4vw,56px)] leading-none text-[#A46D12]">{offer.price}</span>
                    <span className="pb-1 text-[19px] text-[#927C69] line-through">{offer.oldPrice}</span>
                  </div>
                  <p className="mb-7 mt-2 text-[13px] uppercase tracking-[.16em] text-[#8B5E3D]">{offer.benefitLabel}</p>
                  <BookingButton href={bookingHref} placement="promo" className={`${primaryButton} self-start`}>Записаться на процедуру</BookingButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-4 text-[12px] uppercase tracking-[.28em] text-[#986B46]">LariBrand · дом эстетики волос</p>
          <h2 className="mb-6 font-forum text-[clamp(38px,5vw,64px)] leading-[1.06]">Подарите волосам время для себя</h2>
          <p className="mx-auto mb-8 max-w-[650px] text-[17px] leading-relaxed text-[#6A4D39]">Предложение действует {PROMO_PERIOD_LABEL}. Администратор поможет выбрать процедуру и удобное время. Итоговую стоимость уточним на консультации.</p>
          <BookingButton href={bookingHref} placement="promo" className={primaryButton}>Выбрать время</BookingButton>
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
        <PromoCampaignAvailability expired={<InactivePromo />}><ActivePromo /></PromoCampaignAvailability>
      ) : <InactivePromo scheduled={status === 'scheduled'} />}
      <Footer />
    </>
  )
}
