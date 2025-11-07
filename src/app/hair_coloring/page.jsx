import Hair_Coloring from "@/components/services/hair_coloring/hair_coloring_component"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "../../styles/global_styles/index.css"
import Reviews from "@/components/services/reviews"

export default function Hair_Coloring_Page() {
    return (
        <>
            <Header />
            <Hair_Coloring />
            <Reviews />
            <Footer />
        </>
    )
}