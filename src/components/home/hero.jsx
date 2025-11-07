import '../../styles/components_styles/hero.css'
import Image from 'next/image'
import content from "../../../content/content.json"


export default function Hero() {
    return(
        <section className="hero">
            <div className="hero-txt">
                <div className="logo-and-name">
                    <div className="logo">
                        <Image
                            src="/icons/logo_hero.svg"
                            width={180}
                            height={180}
                            alt='LariBrand Saratov'
                        >
                        </Image>
                    </div>
                    <div className='h1-and-h2-hero'>
                        <h1>{content.hero_title}</h1>
                        <h2>{content.hero_subtitle}</h2>
                    </div>
                </div>
                <div className="p-txt-hero">
                    <p>{content.hero_p}</p>
                </div>
            </div>
            <div className="hero-img">
                <Image
                    src={content.hero_image}
                    alt="hero"
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>
        </section>
    )
}