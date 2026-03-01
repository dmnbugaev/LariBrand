import Image from 'next/image'
import content from '../../../content/content.json'
import LinkAboutUs from '../ui/LinkAboutUs'

export default function About_Us() {
  return (
    <section className="pt-5 pb-[50px] bg-brand-bg">
      <div className="px-[60px] text-center font-forum text-[22px] max-[720px]:px-5">
        <p>{content.about_text_1}</p>
        <p>{content.about_text_2}</p>
        <p>{content.about_text_3}</p>
        <p>{content.about_text_4}</p>
      </div>
      <div className="flex justify-center items-center gap-[60px] mt-10 max-[620px]:flex-wrap max-[620px]:gap-10 max-[620px]:px-[100px] max-[425px]:px-[60px]">
        <LinkAboutUs href={content.phone_number_1_link}>
          <Image
            src="/icons/about-us-icon/ph.svg"
            width={37}
            height={37}
            alt="LariBrand номер телефона"
          />
        </LinkAboutUs>
        <LinkAboutUs href={content.telegram_link}>
          <Image
            src="/icons/about-us-icon/tg.svg"
            width={37}
            height={37}
            alt="Ларибренд саратов записаться"
          />
        </LinkAboutUs>
      </div>
    </section>
  )
}
