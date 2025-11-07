import Hair_Styling from "@/components/services/hair_styling/hair_styling_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"

export default function Hair_Styling_Page() {
    return (
        <>
            <Header />
            <Hair_Styling />
            <Reviews />
            <Footer />
        </>
    )
}