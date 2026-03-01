import type { Metadata } from 'next'
import HairStylingComponent from '@/components/services/HairStyling/HairStylingComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Укладки волос в Саратове | Голливудские волны — LariBrand',
  description:
    'Профессиональные укладки волос в Саратове: голливудские волны, прикорневой объём, собранные причёски, выпрямление утюжком, укладка на DYSON. Цены от 500 ₽. Салон LariBrand.',
  keywords: [
    'укладка волос Саратов',
    'голливудская укладка Саратов',
    'собранные причёски Саратов',
    'причёска Саратов',
    'укладка на DYSON Саратов',
    'объём волос Саратов',
    'укладка для съёмки Саратов',
    'выпрямление утюжком Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/hair_styling',
  },
  openGraph: {
    title: 'Укладки волос в Саратове — LariBrand',
    description: 'Голливудские волны, объём, собранные причёски в Саратове. Цены от 500 ₽.',
    url: 'https://laribrand.ru/hair_styling',
    images: [{ url: '/upload/1762285725336-IMG_5287.JPG', width: 1200, height: 630, alt: 'Укладка волос — LariBrand Саратов' }],
  },
}

export default function HairStylingPage() {
  return (
    <>
      <ServiceSchema
        name="Укладки волос"
        description="Профессиональные укладки волос: голливудские волны, прикорневой объём, собранные причёски, выпрямление утюжком, укладка на DYSON. Результат держится весь день."
        url="https://laribrand.ru/hair_styling"
        image="/upload/1762285725336-IMG_5287.JPG"
        priceFrom="500"
      />
      <Header />
      <HairStylingComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
