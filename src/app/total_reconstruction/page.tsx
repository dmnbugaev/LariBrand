import TotalReconstructionComponent from '@/components/services/TotalReconstruction/TotalReconstructionComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function TotalReconstructionPage() {
  return (
    <>
      <Header />
      <TotalReconstructionComponent />
      <BeforeAfterGallery defaultCategory="Тотальная реконструкция" />
      <Reviews />
      <Footer />
    </>
  )
}
