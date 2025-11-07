import Header from "@/components/header"
import Sing_Up from "@/components/home/sing_up"
import Footer from "@/components/footer"
import About_Us from "@/components/home/about_us"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Our_Team from "@/components/home/our_team"

import '../styles/global_styles/index.css'


export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <About_Us />
            <Services />
            <Sing_Up />
            <Our_Team />
            <Footer />
        </>
    )
}