import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './cold_hair_reconstruction_component.module.css'

export default function Cold_Hair_Reconstruction() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.cold_hair_reconstruction.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.cold_hair_reconstruction.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.cold_hair_reconstruction.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.cold_hair_reconstruction.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.cold_hair_reconstruction.book.text}</p>
        <a href={content.cold_hair_reconstruction.book.link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
