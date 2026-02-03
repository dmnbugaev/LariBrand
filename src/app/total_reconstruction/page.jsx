import Total_Reconstruction from "@/components/services/total_reconstruction/total_reconstruction_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"
import Reviews from "@/components/services/reviews"

export default function Total_Reconstruction_Page() {
    return (
        <>
            <Header />
            <Total_Reconstruction />
            <BeforeAfterGallery defaultCategory="Тотальная реконструкция" />
            <Reviews />
            <Footer />
        </>
    )
}