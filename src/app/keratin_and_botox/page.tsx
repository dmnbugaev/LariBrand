import type { Metadata } from 'next'
import KeratinAndBotoxComponent from '@/components/services/KeratinAndBotox/KeratinAndBotoxComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Кератин и ботокс для волос в Саратове | Цены — LariBrand',
  description:
    'Кератиновое выпрямление и ботокс для волос в Саратове. Прямые, гладкие, блестящие волосы после одной процедуры. Цены от 3400 ₽. Запись в салон LariBrand онлайн.',
  keywords: [
    'кератин Саратов',
    'кератиновое выпрямление Саратов',
    'ботокс для волос Саратов',
    'ботокс волос Саратов',
    'выпрямление волос Саратов',
    'кератин цена Саратов',
    'кератиновое выпрямление цена',
    'выпрямление кератином Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/keratin_and_botox',
  },
  openGraph: {
    title: 'Кератин и ботокс для волос в Саратове — LariBrand',
    description: 'Кератиновое выпрямление и ботокс для волос в Саратове. Прямые, гладкие, блестящие волосы. Цены от 3400 ₽.',
    url: 'https://laribrand.ru/keratin_and_botox',
    images: [{ url: '/upload/1762285489176-IMG_5231.JPG', width: 1200, height: 630, alt: 'Кератиновое выпрямление волос — LariBrand Саратов' }],
  },
}

export default function KeratinAndBotoxPage() {
  return (
    <>
      <ServiceSchema
        name="Кератин и ботокс для волос"
        description="Кератиновое выпрямление и ботокс для волос в горячей технике. Результат: прямые, гладкие, плотные и блестящие волосы."
        url="https://laribrand.ru/keratin_and_botox"
        image="/upload/1762285489176-IMG_5231.JPG"
        priceFrom="3400"
      />
      <Header />
      <KeratinAndBotoxComponent />
      <BeforeAfterGallery defaultCategory="Кератин и ботокс" />
      <Reviews />
      <Footer />
    </>
  )
}
