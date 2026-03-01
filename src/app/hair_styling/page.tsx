import HairStylingComponent from '@/components/services/HairStyling/HairStylingComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function HairStylingPage() {
  return (
    <>
      <Header />
      <HairStylingComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
