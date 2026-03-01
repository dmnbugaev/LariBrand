import HairCuttingComponent from '@/components/services/HairCutting/HairCuttingComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function HairCuttingPage() {
  return (
    <>
      <Header />
      <HairCuttingComponent />
      <BeforeAfterGallery defaultCategory="Стрижка волос" />
      <Reviews />
      <Footer />
    </>
  )
}
