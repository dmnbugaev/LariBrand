import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './bioavailability_component.module.css'

export default function Bioavailability() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.bioavailability.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.bioavailability.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.bioavailability.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.bioavailability.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.bioavailability.book.text}</p>
        <a href={content.sing_up_link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
