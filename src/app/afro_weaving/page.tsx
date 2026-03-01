import type { Metadata } from 'next'
import AfroWeavingComponent from '@/components/services/AfroWeaving/AfroWeavingComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Афроплетение в Саратове | Брейды, боксёрские косы — LariBrand',
  description:
    'Афроплетение в Саратове: афрокосы, боксёрские косы, брейды, афрохвост, водопад, афрокудри. Аккуратно, без лишнего натяжения — сохраняем здоровье волос. Цены от 2000 ₽.',
  keywords: [
    'афроплетение Саратов',
    'брейды Саратов',
    'боксёрские косы Саратов',
    'афрокосы Саратов',
    'афрокудри Саратов',
    'плетение кос Саратов',
    'афрохвост Саратов',
    'афрокосички Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/afro_weaving',
  },
  openGraph: {
    title: 'Афроплетение в Саратове — LariBrand',
    description: 'Афрокосы, брейды, боксёрские косы, афрокудри в Саратове. Цены от 2000 ₽.',
    url: 'https://laribrand.ru/afro_weaving',
    images: [{ url: '/upload/1762286099188-IMG_5269.jpg', width: 1200, height: 630, alt: 'Афроплетение брейды — LariBrand Саратов' }],
  },
}

export default function AfroWeavingPage() {
  return (
    <>
      <ServiceSchema
        name="Афроплетение"
        description="Афроплетение: афрокосы, боксёрские косы, брейды, афрохвост, водопад, афрокудри. Аккуратно и бережно, без лишнего натяжения — сохраняем комфорт и здоровье волос."
        url="https://laribrand.ru/afro_weaving"
        image="/upload/1762286099188-IMG_5269.jpg"
        priceFrom="2000"
      />
      <Header />
      <AfroWeavingComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
