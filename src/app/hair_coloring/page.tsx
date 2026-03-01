import type { Metadata } from 'next'
import HairColoringComponent from '@/components/services/HairColoring/HairColoringComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Окрашивание волос в Саратове | Балаяж, омбре, AirTouch — LariBrand',
  description:
    'Профессиональное окрашивание волос в Саратове: балаяж, омбре, AirTouch, брондирование, однотонное окрашивание, тонирование, контуринг, скрытое окрашивание. Цены от 4000 ₽.',
  keywords: [
    'окрашивание волос Саратов',
    'балаяж Саратов',
    'омбре Саратов',
    'AirTouch Саратов',
    'брондирование Саратов',
    'тонирование волос Саратов',
    'контуринг волос Саратов',
    'скрытое окрашивание Саратов',
    'однотонное окрашивание Саратов',
    'окрашивание в яркие цвета Саратов',
    'насыщение кончиков Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/hair_coloring',
  },
  openGraph: {
    title: 'Окрашивание волос в Саратове — LariBrand',
    description: 'Балаяж, омбре, AirTouch, брондирование в Саратове. Премиальные красители. Цены от 4000 ₽.',
    url: 'https://laribrand.ru/hair_coloring',
    images: [{ url: '/upload/1762876574232-IMG_4353.jpg', width: 1200, height: 630, alt: 'Окрашивание волос балаяж омбре — LariBrand Саратов' }],
  },
}

export default function HairColoringPage() {
  return (
    <>
      <ServiceSchema
        name="Окрашивание волос"
        description="Профессиональное окрашивание волос: балаяж, омбре, AirTouch, брондирование, однотонное окрашивание, тонирование, контуринг. Премиальные красители, подбор оттенка стилистом."
        url="https://laribrand.ru/hair_coloring"
        image="/upload/1762876574232-IMG_4353.jpg"
        priceFrom="4000"
      />
      <Header />
      <HairColoringComponent />
      <BeforeAfterGallery defaultCategory="Окрашивание" />
      <Reviews />
      <Footer />
    </>
  )
}
