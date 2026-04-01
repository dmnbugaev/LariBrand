import Link from 'next/link'

export default function PromoBanner() {
  return (
    <section className="bg-brand-black text-white px-[60px] py-[36px] flex items-center justify-between gap-6 max-[780px]:flex-col max-[780px]:text-center max-[600px]:px-5 max-[600px]:py-[28px]">
      <div>
        <p className="font-forum text-[12px] text-white/50 uppercase tracking-widest mb-1 m-0">
          Специальное предложение
        </p>
        <h2 className="font-forum text-[28px] text-white m-0 leading-tight max-[600px]:text-[22px]">
          Комплексы услуг со скидкой до 50% ✨
        </h2>
      </div>
      <Link
        href="/promo"
        className="shrink-0 inline-flex items-center justify-center py-[14px] px-[36px] bg-brand-red text-white font-forum text-[17px] rounded-[12px] no-underline hover:scale-105 transition-transform active:scale-95 whitespace-nowrap"
      >
        Узнать подробнее
      </Link>
    </section>
  )
}
