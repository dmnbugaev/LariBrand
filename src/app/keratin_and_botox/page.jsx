import Keratin_And_Botox_Component from "@/components/services/keratin_and_botox/keratin_and_botox_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import BeautySalonGallery from "@/components/services/BeautySalonGallery"
import Reviews from "@/components/services/reviews"

export default function Keratin_And_Botox_Page() {
    return (
        <>
            <Header />
            <Keratin_And_Botox_Component />
            <BeautySalonGallery />
            <Reviews />
            <Footer />
        </>
    )
}