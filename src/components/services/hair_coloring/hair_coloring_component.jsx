import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './hair_coloring_component.module.css'

export default function Hair_Coloring() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.hair_coloring.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.hair_coloring.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.hair_coloring.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.hair_coloring.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.hair_coloring.book.text}</p>
        <a href={content.sing_up_link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
