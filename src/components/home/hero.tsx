import Image from 'next/image'
import Link from 'next/link'
import content from '../../../content/content.json'

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-[60px] bg-white pt-[80px] pb-[60px] max-[720px]:px-5 max-[600px]:min-h-0 max-[600px]:pt-[100px] max-[600px]:pb-[50px]">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-[60px] flex-wrap max-[1302px]:justify-center max-[600px]:flex-col max-[600px]:gap-[36px]">

        {/* Text block */}
        <div className="hero-animate-1 w-[540px] font-forum max-[600px]:w-full">

          {/* Logo + Title row */}
          <div className="flex gap-[40px] items-center mb-6 max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-4">
            <div className="hero-animate-2">
              <Image
                src="/icons/logo_hero.svg"
                width={160}
                height={160}
                alt="LariBrand Saratov"
              />
            </div>
            <div className="max-[600px]:text-center">
              <h1 className="hero-title text-[66px] font-canelope uppercase m-0 leading-[1] max-[500px]:text-[48px] max-[350px]:text-[40px]">
                {content.hero_title}
              </h1>
              <h2 className="text-[32px] font-forum font-normal m-0 text-brand-red max-[500px]:text-[24px]">
                {content.hero_subtitle}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="hero-animate-3">
            <p className="text-[22px] text-justify leading-[1.6] mb-8 max-[600px]:text-[18px] max-[600px]:text-center">
              {content.hero_p}
            </p>
          </div>

          {/* CTA */}
          <div className="hero-animate-4 max-[600px]:flex max-[600px]:justify-center">
            <Link
              href={content.sing_up_link}
              className="inline-flex items-center justify-center py-[16px] px-[48px] bg-brand-red text-white text-[20px] font-forum rounded-[12px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
            >
              аписаться
            </Link>
          </div>
        </div>

        {/* Image block */}
        <div className="hero-animate-5 relative w-[500px] h-[440px] rounded-[14px] border border-brand-black overflow-hidden max-[600px]:w-full max-[600px]:h-[300px] max-[420px]:h-[250px]">
          <Image
            src={content.hero_image}
            alt="LariBrand — дом эстетики волос"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
