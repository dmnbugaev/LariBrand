import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import content from '../../../content/content.json'
import ScrollAnimation from '../ui/ScrollAnimation'

interface ServiceItem {
  title: string
  img: string
  link: string
}

export default function Services() {
  const services: ServiceItem[] = useMemo(() => [
    { title: 'КЕРАТИН | БОТОКС', img: content.grid_1, link: '/keratin_and_botox' },
    { title: 'БЕЗОПАСНОЕ ВЫПРЯМЛЕНИЕ', img: content.grid_2, link: '/safe_hair_straightening' },
    { title: 'ХОЛОДНАЯ РЕКОНСТРУКЦИЯ', img: content.grid_3, link: '/cold_hair_reconstruction' },
    { title: 'БИОЗАВИВКА', img: content.grid_4, link: '/bioavailability' },
    { title: 'ОКРАШИВАНИЕ', img: content.grid_5, link: '/hair_coloring' },
    { title: 'СТРИЖКА ВОЛОС', img: content.grid_6, link: '/hair_cutting' },
    { title: 'АФРО-ПЛЕТЕНИЕ', img: content.grid_7, link: '/afro_weaving' },
    { title: 'УКЛАДКА', img: content.grid_8, link: '/hair_styling' },
  ], [])

  return (
    <section className="py-[60px] px-[60px] text-center flex flex-col justify-center items-center max-[720px]:px-5 max-[720px]:pt-0 max-[720px]:pb-[60px]">
      <ScrollAnimation />
      <h2 className="text-[36px] font-medium mb-[50px] tracking-[2px] max-[720px]:text-[28px] max-[720px]:mb-[30px]">
        УСЛУГИ
      </h2>
      <div className="flex flex-wrap gap-[30px] justify-center items-center w-full max-w-[1400px] mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="no-underline text-inherit w-[285px] flex justify-center"
          >
            <div className="service-card relative w-full aspect-[3/4] min-h-[380px] overflow-hidden rounded-[14px] border border-brand-black cursor-pointer transition-[transform,box-shadow] duration-[0.4s] ease-in-out hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_12px_25px_rgba(0,0,0,.1)]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="service-image object-cover transition-transform duration-[0.4s] ease-in-out"
              />
              <div className="services-overlay-gradient absolute inset-0 flex items-end justify-center pb-5">
                <p className="text-white text-[22px] font-normal uppercase tracking-[1px] m-0 max-[720px]:text-lg">
                  {service.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
