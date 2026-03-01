import Image from 'next/image'
import { memo } from 'react'
import type { ServiceData } from '../../types'
import content from '../../../content/content.json'

interface ServicePageProps {
  data: ServiceData
  htmlTitles?: boolean
}

const ServicePage = memo(function ServicePage({ data, htmlTitles = false }: ServicePageProps) {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center text-center text-brand-black gap-[60px] max-[1200px]:gap-[80px]">
      {/* HERO */}
      <section className="service-hero relative bg-brand-black w-full h-[60vh] min-h-[400px] flex justify-center items-center uppercase overflow-hidden font-forum max-[1200px]:h-screen max-[1200px]:max-h-[1200px] max-[1200px]:min-h-[600px] max-[1199px]:h-[80vh] max-[1199px]:min-h-[500px] max-[768px]:h-[60vh] max-[540px]:h-[50vh] max-[480px]:h-[45vh] max-[420px]:h-[40vh] max-[350px]:h-[35vh]">
        {data.hero.image && (
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            className="object-cover object-center service-hero-image"
            priority
          />
        )}
        <h1 className="service-hero-title absolute text-white z-[2] font-normal px-[25px] py-[15px] leading-[1.2] tracking-[0.5px] font-forum">
          {data.hero.title}
        </h1>
      </section>

      {/* INFORM */}
      {data.info.text && (
        <section className="px-4">
          <p className="font-forum max-w-[800px] text-[24px] leading-[1.6] m-0 max-[1024px]:max-w-[600px] max-[680px]:max-w-[500px] max-[540px]:max-w-[400px] max-[540px]:text-[22px] max-[480px]:max-w-[350px] max-[420px]:max-w-[310px] max-[420px]:text-[20px]">
            {data.info.text}
          </p>
        </section>
      )}

      {/* PRICES */}
      <section className="text-[20px] font-forum flex flex-wrap justify-center gap-5 -mb-10 px-4">
        {data.price.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="flex items-center w-[800px] max-[1024px]:w-[600px] max-[680px]:w-[500px] max-[540px]:w-[400px] max-[480px]:w-[350px] max-[420px]:w-[330px] max-[350px]:w-[300px]"
          >
            {htmlTitles ? (
              <span
                className="text-left"
                dangerouslySetInnerHTML={{ __html: item.title.replace(/<\/br>/g, '<br/>') }}
              />
            ) : (
              <span className="text-left">{item.title}</span>
            )}
            <span className="price-dots" />
            <span className="text-right whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className="pb-[60px] px-4">
        {data.book.text && (
          <p className="font-forum text-[1.2rem] mb-10 max-[540px]:w-[400px] max-[480px]:w-[350px] max-[420px]:w-[330px] max-[350px]:w-[300px]">
            {data.book.text}
          </p>
        )}
        <a
          href={content.sing_up_link}
          className="font-forum text-[20px] inline-block py-[15px] px-[30px] bg-brand-red text-white rounded-[10px] no-underline uppercase font-normal transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          Записаться
        </a>
      </section>
    </main>
  )
})

export default ServicePage
