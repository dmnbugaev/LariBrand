import type { Metadata } from 'next'
import BioavailabilityComponent from '@/components/services/Bioavailability/BioavailabilityComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Биозавивка волос в Саратове | Корейская завивка — LariBrand',
  description:
    'Биозавивка волос в Саратове: мягкие натуральные кудри без повреждения структуры. Обычная и корейская биозавивка. Щадящая технология с восстанавливающими компонентами. Цены от 4500 ₽.',
  keywords: [
    'биозавивка Саратов',
    'биозавивка волос Саратов',
    'корейская завивка Саратов',
    'кудри без повреждения Саратов',
    'завивка волос Саратов',
    'биозавивка цена Саратов',
    'мягкая завивка Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/bioavailability',
  },
  openGraph: {
    title: 'Биозавивка волос в Саратове — LariBrand',
    description: 'Обычная и корейская биозавивка в Саратове. Мягкие кудри без повреждений. Цены от 4500 ₽.',
    url: 'https://laribrand.ru/bioavailability',
    images: [{ url: '/upload/1762876368682-IMG_1885.DNG', width: 1200, height: 630, alt: 'Биозавивка волос — LariBrand Саратов' }],
  },
}

export default function BioavailabilityPage() {
  return (
    <>
      <ServiceSchema
        name="Биозавивка волос"
        description="Биозавивка волос — обычная и корейская. Мягкие натуральные кудри без повреждения структуры волос. Сочетает восстановительные компоненты и щадящую технологию."
        url="https://laribrand.ru/bioavailability"
        image="/upload/1762876368682-IMG_1885.DNG"
        priceFrom="4500"
      />
      <Header />
      <BioavailabilityComponent />
      <BeforeAfterGallery defaultCategory="Биозавивка" />
      <Reviews />
      <Footer />
    </>
  )
}
