import Bioavailability from "@/components/services/bioavailability/bioavailability_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"

export default function Bioavailability_Page() {
    return (
        <>
            <Header />
            <Bioavailability />
            <Reviews />
            <Footer />
        </>
    )
}