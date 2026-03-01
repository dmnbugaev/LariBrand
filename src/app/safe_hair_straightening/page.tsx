import type { Metadata } from 'next'
import SafeHairStraighteningComponent from '@/components/services/SafeHairStraightening/SafeHairStraighteningComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Безопасное выпрямление волос в Саратове | Антихимия — LariBrand',
  description:
    'Безопасное выпрямление (антихимия, антизавивка) волос в Саратове. Комплексная процедура: холодная + горячая реконструкция. Самый безопасный метод. Цены от 6200 ₽.',
  keywords: [
    'безопасное выпрямление волос Саратов',
    'антихимия Саратов',
    'антизавивка Саратов',
    'атихимия волос Саратов',
    'выпрямление без химии Саратов',
    'безопасное выпрямление цена',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/safe_hair_straightening',
  },
  openGraph: {
    title: 'Безопасное выпрямление волос в Саратове — LariBrand',
    description: 'Антихимия, антизавивка — самое безопасное выпрямление волос в Саратове. Цены от 6200 ₽.',
    url: 'https://laribrand.ru/safe_hair_straightening',
    images: [{ url: '/upload/1762285562476-IMG_5760.JPG', width: 1200, height: 630, alt: 'Безопасное выпрямление волос — LariBrand Саратов' }],
  },
}

export default function SafeHairStraighteningPage() {
  return (
    <>
      <ServiceSchema
        name="Безопасное выпрямление волос (Антихимия)"
        description="Комплексная процедура выпрямления волос: сочетание холодной и горячей реконструкции. Самый безопасный метод для восстановления и выпрямления волос."
        url="https://laribrand.ru/safe_hair_straightening"
        image="/upload/1762285562476-IMG_5760.JPG"
        priceFrom="6200"
      />
      <Header />
      <SafeHairStraighteningComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
