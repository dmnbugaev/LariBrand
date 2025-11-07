import content from "../../../content/content.json"
import '../../styles/components_styles/sing_up.css'
import Image from 'next/image'
import UI_kit_link_sing_up from '../UI_kit/UI_kit_sing_up/Link_sing_up'

export default function Sing_Up() {
    return (
        <section className='sing-up'>
            <div className='sing-up-img'>
                <Image 
                    src={content.sing_up_img}
                    alt="Lari brand записаться"
                    fill
                    className="sing-up-img-img"
                    priority
                    sizes="(max-width: 460px) 100vw, 420px"
                />
            </div>
            <UI_kit_link_sing_up href={content.sing_up_link}>
                записаться
            </UI_kit_link_sing_up>
        </section>
    )
}