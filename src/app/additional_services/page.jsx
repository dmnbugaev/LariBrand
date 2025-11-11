import Additional_Services from "@/components/services/additional_services/additional_services_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"

export default function Additional_Services_Page() {
    return (
        <>
            <Header />
            <Additional_Services />
            <Reviews />
            <Footer />
        </>
    )
}