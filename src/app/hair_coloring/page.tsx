import HairColoringComponent from '@/components/services/HairColoring/HairColoringComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function HairColoringPage() {
  return (
    <>
      <Header />
      <HairColoringComponent />
      <BeforeAfterGallery defaultCategory="Окрашивание" />
      <Reviews />
      <Footer />
    </>
  )
}
