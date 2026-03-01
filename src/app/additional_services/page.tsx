import AdditionalServicesComponent from '@/components/services/AdditionalServices/AdditionalServicesComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function AdditionalServicesPage() {
  return (
    <>
      <Header />
      <AdditionalServicesComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
