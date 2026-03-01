import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/hero'
import About_Us from '@/components/home/about_us'
import Services from '@/components/home/services'
import Our_Team from '@/components/home/our_team'
import Sing_Up from '@/components/home/sing_up'

export const metadata: Metadata = {
  title: 'LariBrand Саратов — Салон красоты | Кератин и ботокс для волос',
  description:
    'Салон красоты LariBrand в Саратове: кератиновое выпрямление волос, ботокс для волос, парикмахерские услуги, стрижки, окрашивание. Запись онлайн.',
  keywords:
    'кератин саратов, ботокс для волос саратов, парикмахерские саратов, стрижки саратов, окрашивание волос саратов, салон красоты саратов',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About_Us />
      <Services />
      <Sing_Up />
      <Our_Team />
      <Footer />
    </>
  )
}
