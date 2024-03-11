import Image from 'next/image'
import styles from './about.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>Create digital ideas that are bigger, bolder, braver and better. We believe in good ideas, flexibility and precision. Our world's best special team offers the best consulting and finance solution provider. We also offer wide range of web and software development services</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/about.png'} fill alt='About' className={styles.img} />
      </div>
    </div>
  )
}
