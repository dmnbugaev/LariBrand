import Header from "@/components/header"
import Sing_Up from "@/components/home/sing_up"
import Footer from "@/components/footer"
import About_Us from "@/components/home/about_us"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Our_Team from "@/components/home/our_team"
import SEO from '../components/SEO'

import '../styles/global_styles/index.css'


export default function HomePage() {
    return (
        <>  
            <SEO 
                title="LariBrand Саратов - Салон красоты | Кератин и ботокс для волос Саратов"
                description="Салон красоты LariBrand в Саратове: кератиновое выпрямление волос, ботокс для волос, парикмахерские услуги, стрижки, окрашивание. Запись онлайн."
                keywords="кератин саратов, ботокс для волос саратов, парикмахерские саратов, стрижки саратов, окрашивание волос саратов, салон красоты саратов"
            />
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