import type { Metadata } from 'next'
import HairCuttingComponent from '@/components/services/HairCutting/HairCuttingComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'
import ServiceSchema from '@/components/ServiceSchema'

export const metadata: Metadata = {
  title: 'Стрижка волос в Саратове | Каскад, каре, боб-каре — LariBrand',
  description:
    'Профессиональные стрижки в Саратове: каскад, каре, боб-каре, лесенка, слои, ровный срез, женская и мужская стрижка, стрижка чёлки, текстурная стрижка. Цены от 400 ₽.',
  keywords: [
    'стрижка волос Саратов',
    'стрижка каскад Саратов',
    'стрижка каре Саратов',
    'мужская стрижка Саратов',
    'женская стрижка Саратов',
    'стрижка боб-каре Саратов',
    'стрижка лесенка Саратов',
    'стрижка слои Саратов',
    'текстурная стрижка Саратов',
    'стрижка челки Саратов',
    'ровный срез Саратов',
  ],
  alternates: {
    canonical: 'https://laribrand.ru/hair_cutting',
  },
  openGraph: {
    title: 'Стрижка волос в Саратове — LariBrand',
    description: 'Каскад, каре, боб-каре, лесенка, мужская стрижка в Саратове. Цены от 400 ₽.',
    url: 'https://laribrand.ru/hair_cutting',
    images: [{ url: '/upload/1763929243995-IMG_8434.JPG', width: 1200, height: 630, alt: 'Стрижка волос — LariBrand Саратов' }],
  },
}

export default function HairCuttingPage() {
  return (
    <>
      <ServiceSchema
        name="Стрижка волос"
        description="Профессиональные стрижки: каскад, каре, боб-каре, лесенка, слои, ровный срез, женская и мужская стрижка, стрижка чёлки, текстурная стрижка. Форма под тип волос."
        url="https://laribrand.ru/hair_cutting"
        image="/upload/1763929243995-IMG_8434.JPG"
        priceFrom="400"
      />
      <Header />
      <HairCuttingComponent />
      <BeforeAfterGallery defaultCategory="Стрижка волос" />
      <Reviews />
      <Footer />
    </>
  )
}
