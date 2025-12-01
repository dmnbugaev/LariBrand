import Safe_Hair_Straightenung from "@/components/services/safe_hair_straightening/safe_hair_straightening_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"

export default function () {
    return (
        <>
            <Header />
            <Safe_Hair_Straightenung />
            <BeforeAfterGallery />
            <Reviews />
            <Footer />
        </>
    )
}