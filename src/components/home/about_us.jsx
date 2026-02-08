import '../../styles/components_styles/about_us.css'
import UI_kit_link_about_us from '../UI_kit/UI_kit_about_us/Link_about_us'
import Image from 'next/image'
import content from "../../../content/content.json"


export default function About_Us() {
    return (
        <section className="about-us">
            <div className="about-us-txt">
                <p>{content.about_text_1}</p>
                <p>{content.about_text_2}</p>
                <p>{content.about_text_3}</p>
                <p>{content.about_text_4}</p>
            </div>
            <div className="about-us-link">
                <UI_kit_link_about_us href={content.phone_number_1_link}>
                    <Image
                        src="/icons/about-us-icon/ph.svg"
                        width={37}
                        height={37}
                        className='about-us-phone-icon'
                        alt='LariBrand номер телефона'
                    >
                    </Image>
                </UI_kit_link_about_us>
                <UI_kit_link_about_us href={content.telegram_link}>
                    <Image
                        src="/icons/about-us-icon/tg.svg"
                        width={37}
                        height={37}
                        className='about-us-phone-icon'
                        alt='Ларибренд саратов записаться'
                    >
                    </Image>
                </UI_kit_link_about_us>
            </div>
        </section>
    )
}