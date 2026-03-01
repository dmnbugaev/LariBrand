import type { Metadata } from 'next'
import TotalReconstructionComponent from '@/components/services/TotalReconstruction/TotalReconstructionComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Тотальная реконструкция волос в Саратове | LariBrand',
  description:
    'Тотальная реконструкция волос в Саратове: индивидуальный протокол восстановления, лечение и укрепление структуры волос. Пролонгированный эффект. Цены от 7400 ₽. Салон LariBrand.',
  keywords: [
    'тотальная реконструкция волос Саратов',
    'восстановление волос Саратов',
    'лечение волос Саратов',
    'реконструкция волос Саратов',
    'тотальная реконструкция цена',
    'глубокое восстановление волос Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/total_reconstruction',
  },
  openGraph: {
    title: 'Тотальная реконструкция волос в Саратове — LariBrand',
    description: 'Индивидуальный протокол восстановления волос. Лечение, укрепление, защита. Цены от 7400 ₽.',
    url: 'https://laribrand.ru/total_reconstruction',
    images: [{ url: '/images/IMG_3664.jpg', width: 1200, height: 630, alt: 'Тотальная реконструкция волос — LariBrand Саратов' }],
  },
}

export default function TotalReconstructionPage() {
  return (
    <>
      <ServiceSchema
        name="Тотальная реконструкция волос"
        description="Тотальная реконструкция волос: индивидуальный протокол на основе степени повреждения, пористости и дефицитов. Лечение и визуальный эффект в одной процедуре. Пролонгированный результат."
        url="https://laribrand.ru/total_reconstruction"
        image="/images/IMG_3664.jpg"
        priceFrom="7400"
      />
      <Header />
      <TotalReconstructionComponent />
      <BeforeAfterGallery defaultCategory="Тотальная реконструкция" />
      <Reviews />
      <Footer />
    </>
  )
}
