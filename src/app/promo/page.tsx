import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PromoCampaignAvailability from '@/components/PromoCampaignAvailability'
import PromoCountdown from '@/components/PromoCountdown'
import PromoLoopVideo from '@/components/PromoLoopVideo'
import PromoMediaPlayer from '@/components/PromoMediaPlayer'
import content from '../../../content/content.json'
import { sanitizeHref } from '@/lib/security'
import {
  getPromoStatus,
  PROMO_END,
  PROMO_MEDIA,
  PROMO_OFFERS,
  PROMO_PERIOD_LABEL,
} from '@/lib/promo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Восстановление волос после лета — акция 1–10 сентября',
  description:
    'Процедуры для восстановления волос после лета с выгодой до 60% в LariBrand Саратов. Кератин, пилинг, холодная реконструкция, SPA-уход и стрижка с 1 по 10 сентября 2026 года.',
  alternates: {
    canonical: 'https://laribrand.ru/promo',
  },
  openGraph: {
    title: 'Восстанавливаем волосы после лета — LariBrand',
    description: 'Пять специальных предложений с 1 по 10 сентября и выгода до 60%.',
    images: [{ url: PROMO_MEDIA.campaignCover }],
  },
}

const buttonClass =
  'inline-flex min-h-[54px] items-center justify-center rounded-[14px] bg-[#a90016] px-7 py-4 text-center text-[17px] uppercase leading-none text-white no-underline shadow-[0_14px_35px_rgba(112,0,15,0.24)] transition-transform hover:scale-[1.03] active:scale-95 max-[440px]:w-full'

function InactivePromo({ scheduled = false }: { scheduled?: boolean }) {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-[#f6efe3] px-5 pb-20 pt-[150px] font-forum text-[#76000e]">
      <div className="mx-auto w-full max-w-[820px] border border-[#9d0011]/25 bg-[#fffaf1] px-8 py-16 text-center shadow-[0_25px_80px_rgba(96,0,12,0.12)] max-[560px]:px-5 max-[560px]:py-12">
        <p className="mb-5 text-[12px] uppercase tracking-[4px] text-[#9d0011]/65">LariBrand / специальное предложение</p>
        <h1 className="mb-6 text-[64px] font-normal uppercase leading-[0.95] max-[640px]:text-[38px]">
          {scheduled ? 'Акция начнётся 1 сентября' : 'Акция завершена'}
        </h1>
        <p className="mx-auto max-w-[590px] text-[21px] uppercase leading-[1.45] text-[#4d171c]/70 max-[560px]:text-[17px]">
          {scheduled
            ? 'Специальные цены будут доступны с 1 по 10 сентября по времени Саратова.'
            : 'Спасибо всем, кто воспользовался специальными предложениями LariBrand с 1 по 10 сентября.'}
        </p>
      </div>
    </main>
  )
}

function ActivePromo() {
  return (
    <main className="overflow-x-hidden bg-[#f6efe3] pt-[80px] font-forum text-[#4a1117]">
      <section className="relative overflow-hidden border-b border-[#8f0012]/15 px-5 py-14 max-[640px]:py-9">
        <div className="absolute inset-x-0 top-0 h-[10px] bg-[#a90016]" />
        <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#a90016]/8 blur-3xl" />
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] items-center gap-14 max-[900px]:grid-cols-1 max-[560px]:gap-8">
          <div className="promo-fade-1 min-w-0">
            <p className="mb-5 w-fit border border-[#a90016] px-4 py-2 text-[12px] uppercase tracking-[4px] text-[#a90016] max-[560px]:mx-auto max-[560px]:text-[10px] max-[560px]:tracking-[2px]">
              LariBrand / 1–10 сентября
            </p>
            <h1 className="mb-6 max-w-[690px] break-words text-[76px] font-normal uppercase leading-[0.9] text-[#970012] [overflow-wrap:anywhere] max-[720px]:text-[54px] max-[560px]:text-center max-[560px]:text-[32px]">
              Восстанавливаем волосы после лета
            </h1>
            <p className="mb-4 max-w-[620px] text-[30px] uppercase leading-[1.12] text-[#4a1117] max-[560px]:text-center max-[560px]:text-[21px]">
              Процедуры с выгодой до 60%
            </p>
            <p className="mb-7 max-w-[590px] text-[19px] uppercase leading-[1.45] text-[#4a1117]/68 max-[560px]:text-center max-[560px]:text-[15px]">
              Перезагрузка для волос без крайних мер: гладкость, объём, восстановление и изменение образа. {PROMO_PERIOD_LABEL}.
            </p>
            <div className="mb-7 max-w-[590px]">
              <PromoCountdown deadline={PROMO_END} deadlineLabel="до 10 сентября включительно" />
            </div>
            <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              Записаться
            </a>
          </div>

          <div className="promo-fade-2 relative mx-auto aspect-[4/5] w-full max-w-[450px] overflow-hidden rounded-[10px] border border-[#8f0012]/25 bg-[#fffaf1] shadow-[0_28px_80px_rgba(96,0,12,0.22)]">
            <Image
              src={PROMO_MEDIA.campaignCover}
              alt="Процедуры LariBrand с выгодой до 60 процентов с 1 по 10 сентября"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 450px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 max-[640px]:py-12">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-12 grid grid-cols-[1fr_0.6fr] items-end gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-4">
            <div>
              <p className="mb-4 text-[12px] uppercase tracking-[4px] text-[#a90016]">Специальные цены</p>
              <h2 className="max-w-[800px] break-words text-[58px] font-normal uppercase leading-[0.94] text-[#76000e] [overflow-wrap:anywhere] max-[640px]:text-[32px]">
                Три комбо и две холодные реконструкции
              </h2>
            </div>
            <p className="text-[18px] uppercase leading-[1.45] text-[#4a1117]/64 max-[640px]:text-[15px]">
              Короткие видео показывают процедуру и результат. Они воспроизводятся без звука и повторяются автоматически.
            </p>
          </div>

          <div className="grid gap-7">
            {PROMO_OFFERS.map((offer, index) => (
              <article
                key={offer.id}
                className={`grid min-w-0 overflow-hidden rounded-[10px] border border-[#8f0012]/16 bg-[#fffaf1] shadow-[0_18px_52px_rgba(96,0,12,0.09)] md:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="flex items-center justify-center bg-[#eadfd1] p-5 max-[520px]:p-3">
                  <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[8px] bg-[#f6efe3] shadow-[0_16px_46px_rgba(65,0,8,0.16)]">
                    {offer.mediaType === 'video' ? (
                      <PromoLoopVideo src={offer.media} title={offer.title} startAt={0} className="object-cover" />
                    ) : (
                      <Image src={offer.media} alt={offer.title} fill sizes="(max-width: 768px) 86vw, 320px" className="object-cover" />
                    )}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-between p-9 max-[640px]:p-6 max-[420px]:p-5">
                  <div>
                    <p className="mb-4 text-[12px] uppercase tracking-[3px] text-[#a90016]/70">Предложение / {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mb-3 break-words text-[43px] font-normal uppercase leading-[0.98] text-[#850010] [overflow-wrap:anywhere] max-[640px]:text-[29px]">{offer.title}</h3>
                    {'subtitle' in offer && offer.subtitle ? <p className="mb-6 text-[18px] uppercase leading-[1.35] text-[#4a1117]/68 max-[520px]:text-[15px]">{offer.subtitle}</p> : null}
                    <ul className="mb-7 grid gap-3 p-0">
                      {offer.benefits.map((benefit) => (
                        <li key={benefit} className="list-none border-b border-[#8f0012]/10 pb-3 text-[17px] uppercase leading-[1.4] text-[#4a1117]/76 last:border-b-0 max-[520px]:text-[14px]">
                          <span className="mr-2 text-[#a90016]">{'//'}</span>{benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#8f0012]/18 pt-6">
                    <p className="mb-5 text-[17px] uppercase tracking-[1.5px] text-[#4a1117]/65">Время процедуры: {offer.duration}</p>
                    <div className="mb-6 flex flex-wrap items-end gap-x-6 gap-y-2">
                      <span className="text-[28px] text-[#4a1117]/40 line-through">{offer.oldPrice}</span>
                      <span className="text-[54px] leading-none text-[#a90016] max-[520px]:text-[43px]">{offer.price}</span>
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

      <section className="bg-[#8f0012] px-5 py-20 text-[#fff6e8] max-[640px]:py-12">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-[minmax(0,0.8fr)_minmax(320px,0.52fr)] items-center gap-16 max-[860px]:grid-cols-1 max-[560px]:gap-9">
          <div>
            <p className="mb-5 text-[12px] uppercase tracking-[4px] text-[#fff6e8]/60">LariBrand изнутри</p>
            <h2 className="mb-7 max-w-[670px] text-[63px] font-normal uppercase leading-[0.92] max-[640px]:text-[37px]">
              Место, где ваши волосы преображаются до неузнаваемости
            </h2>
            <p className="mb-6 max-w-[620px] text-[20px] uppercase leading-[1.5] text-[#fff6e8]/74 max-[520px]:text-[16px]">
              Посмотрите минутный ролик о салоне, процедурах и результатах. Видео запускается только по нажатию и воспроизводится со звуком.
            </p>
            <p className="text-[13px] uppercase tracking-[2px] text-[#fff6e8]/50">Пробел — пауза · ← → — перемотка · M — звук · F — полный экран</p>
          </div>
          <div className="mx-auto w-full max-w-[390px]">
            <PromoMediaPlayer src={PROMO_MEDIA.brandVideo} poster={PROMO_MEDIA.campaignStory} title="LariBrand — место преображения волос" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center max-[640px]:py-12">
        <div className="mx-auto max-w-[820px]">
          <p className="mb-5 text-[12px] uppercase tracking-[4px] text-[#a90016]">1–10 сентября</p>
          <h2 className="mb-6 text-[60px] font-normal uppercase leading-[0.95] text-[#76000e] max-[640px]:text-[36px]">Восстановите волосы после лета</h2>
          <p className="mx-auto mb-8 max-w-[600px] text-[20px] uppercase leading-[1.45] text-[#4a1117]/68 max-[520px]:text-[16px]">
            Выберите подходящее предложение и забронируйте удобное время у администратора LariBrand.
          </p>
          <a href={sanitizeHref(content.sing_up_link)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
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
