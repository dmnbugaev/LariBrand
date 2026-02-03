import Image from 'next/image'
import content from "../../../../content/content.json"
import styles from './total_reconstruction_component.module.css'

export default function Total_Reconstruction() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src={content.total_reconstruction.hero.image} alt="hero" fill className={styles.heroImg} />
        <h1 className={styles.heroTitle}>{content.total_reconstruction.hero.title}</h1>
      </section>

      {/* INFORM */}
      <section className={styles.inform}>
        <p>{content.total_reconstruction.info.text}</p>
      </section>

      {/* PRICE */}
      <section className={styles.prices}>
        {content.total_reconstruction.price.map((item, i) => (
          <div key={i} className={styles.priceRow}>
            <span className={styles.priceTitle}>{item.title}</span>
            <span className={styles.dots}></span>
            <span className={styles.priceTitle}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className={styles.book}>
        <p>{content.total_reconstruction.book.text}</p>
        <a href={content.sing_up_link} className={styles.btn} target="_blank">Записаться</a>
      </section>
    </main>
  )
}
