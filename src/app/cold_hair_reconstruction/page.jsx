import Cold_Hair_Reconstruction from "@/components/services/cold_hair_reconstruction/cold_hair_reconstruction_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"
import Reviews from "@/components/services/reviews"

export default function Cold_Hair_Reconstruction_Page() {
    return (
        <>
            <Header />
            <Cold_Hair_Reconstruction />
            <BeforeAfterGallery defaultCategory="Холодная реконструкция" />
            <Reviews />
            <Footer />
        </>
    )
}