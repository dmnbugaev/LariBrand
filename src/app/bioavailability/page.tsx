import type { Metadata } from 'next'
import BioavailabilityComponent from '@/components/services/Bioavailability/BioavailabilityComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceFaq from '@/components/services/ServiceFaq'
import RelatedServices from '@/components/services/RelatedServices'

export const metadata: Metadata = {
  title: 'Биозавивка волос в Саратове | Корейская завивка — LariBrand',
  description:
    'Биозавивка волос в Саратове: мягкие натуральные кудри без повреждения структуры. Классическая и корейская биозавивка. Щадящая технология с восстанавливающими компонентами. Цены от 6500 ₽.',
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
    description: 'Классическая и корейская биозавивка в Саратове. Мягкие кудри без повреждений. Цены от 6500 ₽.',
    url: 'https://laribrand.ru/bioavailability',
    images: [{ url: '/upload/1762876368682-IMG_1885.jpg', width: 2268, height: 4032, alt: 'Биозавивка волос — LariBrand Саратов' }],
  },
}

export default function BioavailabilityPage() {
  return (
    <>
      <ServiceSchema
        name="Биозавивка волос"
        description="Биозавивка волос — классическая и корейская. Мягкие натуральные кудри без повреждения структуры волос. Сочетает восстановительные компоненты и щадящую технологию."
        url="https://laribrand.ru/bioavailability"
        image="/upload/1762876368682-IMG_1885.jpg"
        priceFrom="6500"
      />
      <Header />
      <BioavailabilityComponent />
      <BeforeAfterGallery defaultCategory="Биозавивка" />
      <Reviews />
      <ServiceFaq slug="bioavailability" />
      <RelatedServices slug="bioavailability" />
      <Footer />
    </>
  )
}
