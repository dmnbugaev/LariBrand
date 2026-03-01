import HairStylingComponent from '@/components/services/HairStyling/HairStylingComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
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
