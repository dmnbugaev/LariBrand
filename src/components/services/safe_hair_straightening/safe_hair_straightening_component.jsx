import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './safe_hair_straightening_component.module.css'

export default function Safe_Hair_Straightenung() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.safe_hair_straightening.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.safe_hair_straightening.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.safe_hair_straightening.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.safe_hair_straightening.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.safe_hair_straightening.book.text}</p>
        <a href={content.keratin_and_botox.book.link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
