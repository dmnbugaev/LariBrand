import Afro_Weaving from "@/components/services/afro_weaving/afro_weaving_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"

export default function Afro_Weaving_Page() {
    return (
        <>
            <Header />
            <Afro_Weaving />
            <BeforeAfterGallery />
            <Reviews />
            <Footer />
        </>
    )
}