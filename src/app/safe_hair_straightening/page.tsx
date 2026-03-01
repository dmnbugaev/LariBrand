import SafeHairStraighteningComponent from '@/components/services/SafeHairStraightening/SafeHairStraighteningComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function SafeHairStraighteningPage() {
  return (
    <>
      <Header />
      <SafeHairStraighteningComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
