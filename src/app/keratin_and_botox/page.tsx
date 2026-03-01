import KeratinAndBotoxComponent from '@/components/services/KeratinAndBotox/KeratinAndBotoxComponent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import Reviews from '@/components/services/reviews'

export default function KeratinAndBotoxPage() {
  return (
    <>
      <Header />
      <KeratinAndBotoxComponent />
      <BeforeAfterGallery defaultCategory="Кератин и ботокс" />
      <Reviews />
      <Footer />
    </>
  )
}
