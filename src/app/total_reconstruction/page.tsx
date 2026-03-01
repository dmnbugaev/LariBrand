import TotalReconstructionComponent from '@/components/services/TotalReconstruction/TotalReconstructionComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
