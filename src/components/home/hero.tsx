import Image from 'next/image'
import content from '../../../content/content.json'

export default function Hero() {
  return (
    <section className="flex justify-center items-center gap-[60px] flex-wrap px-[60px] bg-white pt-[140px] pb-[60px] text-[36px] font-forum font-normal max-[1440px]:justify-between max-[1302px]:justify-center max-[720px]:px-5 max-[600px]:gap-0 max-[500px]:pt-[130px] max-[420px]:pt-[120px] max-[400px]:pt-[105px] max-[375px]:pt-[105px] max-[360px]:pt-[100px]">
      <div className="pt-10 w-[560px] max-[600px]:pt-0 max-[600px]:w-full max-[600px]:text-[22px]">
        <div className="flex justify-center gap-[60px] max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-0">
          <div>
            <Image
              src="/icons/logo_hero.svg"
              width={180}
              height={180}
              alt="LariBrand Saratov"
            />
          </div>
          <div className="flex justify-center flex-col gap-[10px] max-[500px]:h-[185px] max-[420px]:h-[165px] max-[400px]:h-[120px] max-[375px]:h-[200px] max-[360px]:h-[100px]">
            <h1 className="text-[58px] font-canelope uppercase m-0 max-[350px]:text-[52px] max-[350px]:text-center">
              {content.hero_title}
            </h1>
            <h2 className="text-[36px] font-forum font-normal m-0 -mt-[30px] max-[400px]:-mt-[50px] max-[350px]:text-[30px] max-[350px]:text-center">
              {content.hero_subtitle}
            </h2>
          </div>
        </div>
        <div className="-mt-5 text-justify max-[600px]:max-w-[304px] max-[600px]:mx-auto max-[400px]:pt-[10px] max-[375px]:pb-[30px] max-[360px]:pt-5">
          <p>{content.hero_p}</p>
        </div>
      </div>

      <div className="relative w-[560px] h-[420px] rounded-[10px] border border-brand-black overflow-hidden max-[600px]:w-full max-[600px]:max-h-[420px] max-[600px]:h-[300px] max-[420px]:-mb-[15px] max-[400px]:-mb-[35px] max-[375px]:h-[200px]">
        <Image
          src={content.hero_image}
          alt="hero"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
