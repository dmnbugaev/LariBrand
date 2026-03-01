import type { Metadata } from 'next'
import AdditionalServicesComponent from '@/components/services/AdditionalServices/AdditionalServicesComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Дополнительные услуги для волос в Саратове | LariBrand',
  description:
    'Дополнительные услуги LariBrand в Саратове: ботокс на кончики, экспресс-уход, пилинг головы, полировка волос, хелатное мытьё, чистка полотна, экспресс-смывка. Цены от 1000 ₽.',
  keywords: [
    'экспресс-уход волос Саратов',
    'пилинг головы Саратов',
    'хелатное мытьё Саратов',
    'ботокс кончики волос Саратов',
    'полировка волос Саратов',
    'чистка полотна волос Саратов',
    'экспресс-смывка Саратов',
    'уход за волосами Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/additional_services',
  },
  openGraph: {
    title: 'Дополнительные услуги для волос в Саратове — LariBrand',
    description: 'Ботокс на кончики, экспресс-уход, пилинг, полировка, хелатное мытьё в Саратове. Цены от 1000 ₽.',
    url: 'https://laribrand.ru/additional_services',
  },
}

export default function AdditionalServicesPage() {
  return (
    <>
      <ServiceSchema
        name="Дополнительные услуги для волос"
        description="Дополнительные процедуры по уходу за волосами: ботокс на кончики, экспресс-уход, пилинг, полировка, хелатное мытьё, чистка полотна, экспресс-смывка, прикорневой объём."
        url="https://laribrand.ru/additional_services"
        priceFrom="1000"
      />
      <Header />
      <AdditionalServicesComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
