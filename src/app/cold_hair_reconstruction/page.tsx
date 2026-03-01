import type { Metadata } from 'next'
import ColdHairReconstructionComponent from '@/components/services/ColdHairReconstruction/ColdHairReconstructionComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Холодная реконструкция волос в Саратове | Холодный уход — LariBrand',
  description:
    'Холодная реконструкция волос в Саратове: восстановление, укрепление, блеск без нагрева. Холодный уход, холодное восстановление. Подбор под тип повреждения. Цены от 3900 ₽.',
  keywords: [
    'холодная реконструкция волос Саратов',
    'холодный уход Саратов',
    'холодное восстановление волос Саратов',
    'восстановление волос без нагрева Саратов',
    'реконструкция волос Саратов',
    'холодная реконструкция цена',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/cold_hair_reconstruction',
  },
  openGraph: {
    title: 'Холодная реконструкция волос в Саратове — LariBrand',
    description: 'Холодный уход и холодное восстановление волос в Саратове. Восстановление без нагрева. Цены от 3900 ₽.',
    url: 'https://laribrand.ru/cold_hair_reconstruction',
    images: [{ url: '/upload/1762876982434-IMG_0863.jpg', width: 1200, height: 630, alt: 'Холодная реконструкция волос — LariBrand Саратов' }],
  },
}

export default function ColdHairReconstructionPage() {
  return (
    <>
      <ServiceSchema
        name="Холодная реконструкция волос"
        description="Восстановление волос без нагрева: холодная реконструкция, холодный уход, холодное восстановление. Укрепляет, уплотняет, придаёт блеск и эластичность."
        url="https://laribrand.ru/cold_hair_reconstruction"
        image="/upload/1762876982434-IMG_0863.jpg"
        priceFrom="3900"
      />
      <Header />
      <ColdHairReconstructionComponent />
      <BeforeAfterGallery defaultCategory="Холодная реконструкция" />
      <Reviews />
      <Footer />
    </>
  )
}
