import AfroWeavingComponent from '@/components/services/AfroWeaving/AfroWeavingComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function AfroWeavingPage() {
  return (
    <>
      <Header />
      <AfroWeavingComponent />
      <BeforeAfterGallery />
      <Reviews />
      <Footer />
    </>
  )
}
