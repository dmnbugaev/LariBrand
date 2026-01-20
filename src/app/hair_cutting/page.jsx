import Hair_Cutting from "@/components/services/hair_cutting/hair_cutting_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"
import Reviews from "@/components/services/reviews"

export default function Hair_Cutting_Page() {
    return (
        <>
            <Header />
            <Hair_Cutting />
            <BeforeAfterGallery defaultCategory="Стрижка волос" />
            <Reviews />
            <Footer />
        </>
    )
}