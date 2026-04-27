import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/hero'
import About_Us from '@/components/home/about_us'
import Services from '@/components/home/services'
import Sing_Up from '@/components/home/sing_up'
import PromoBanner from '@/components/home/PromoBanner'
import PromoModal from '@/components/PromoModal'

export const metadata: Metadata = {
  title: 'LariBrand Саратов — Салон красоты | Кератин, ботокс, стрижки, окрашивание',
  description:
    'Салон красоты LariBrand в Саратове — дом эстетики волос. Кератиновое выпрямление, ботокс для волос, биозавивка, окрашивание балаяж, стрижки, тотальная реконструкция. Запись онлайн.',
  keywords: [
    'салон красоты Саратов',
    'кератин Саратов',
    'ботокс волос Саратов',
    'биозавивка Саратов',
    'окрашивание волос Саратов',
    'балаяж Саратов',
    'стрижка волос Саратов',
    'LariBrand',
    'дом эстетики волос Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru',
  },
  openGraph: {
    title: 'LariBrand — Дом эстетики волос в Саратове',
    description: 'Салон красоты LariBrand в Саратове. Кератин, ботокс, биозавивка, окрашивание, стрижки. Запись онлайн.',
    url: 'https://laribrand.ru',
    images: [
      {
        url: '/upload/1762277381106-IMG_5217.JPG',
        width: 1200,
        height: 630,
        alt: 'Салон красоты LariBrand — Саратов',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <PromoModal />
      <Hero />
      <PromoBanner />
      <About_Us />
      <Services />
      <Sing_Up />
      <Footer />
    </>
  )
}
