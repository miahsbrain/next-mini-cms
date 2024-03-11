import Image from "next/image";
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio libero quasi nostrum inventore ratione iusto amet est numquam fugit dolores?</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={'/brands.png'} fill alt="brands" className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={'/hero.gif'} fill alt="brands" className={styles.heroImg} unoptimized/>
      </div>
    </main>
  );
}