import BioavailabilityComponent from '@/components/services/Bioavailability/BioavailabilityComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
