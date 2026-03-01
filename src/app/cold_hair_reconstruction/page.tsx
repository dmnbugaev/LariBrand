import ColdHairReconstructionComponent from '@/components/services/ColdHairReconstruction/ColdHairReconstructionComponent'
import Header from '@/components/header'
import Footer from '@/components/footer'
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
