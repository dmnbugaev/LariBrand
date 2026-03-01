import BioavailabilityComponent from '@/components/services/Bioavailability/BioavailabilityComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function BioavailabilityPage() {
  return (
    <>
      <Header />
      <BioavailabilityComponent />
      <BeforeAfterGallery defaultCategory="Биозавивка" />
      <Reviews />
      <Footer />
    </>
  )
}
