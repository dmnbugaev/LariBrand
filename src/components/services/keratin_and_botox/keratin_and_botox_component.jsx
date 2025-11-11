import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './keratin_and_botox_component.module.css'

export default function Keratin_And_Botox_Component() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.keratin_and_botox.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.keratin_and_botox.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.keratin_and_botox.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.keratin_and_botox.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.keratin_and_botox.book.text}</p>
        <a href={content.sing_up_link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
