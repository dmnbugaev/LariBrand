import ColdHairReconstructionComponent from '@/components/services/ColdHairReconstruction/ColdHairReconstructionComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function ColdHairReconstructionPage() {
  return (
    <>
      <Header />
      <ColdHairReconstructionComponent />
      <BeforeAfterGallery defaultCategory="Холодная реконструкция" />
      <Reviews />
      <Footer />
    </>
  )
}
