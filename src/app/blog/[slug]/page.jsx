import styles from './singlepage.module.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={'https://images.pexels.com/photos/17158016/pexels-photo-17158016/free-photo-of-japanese-zen-garden-at-the-gardens-of-the-world-marzahn-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} fill alt="image 1" className={styles.heroImg} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src={'https://images.pexels.com/photos/17158016/pexels-photo-17158016/free-photo-of-japanese-zen-garden-at-the-gardens-of-the-world-marzahn-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={50} height={50} alt="avatar" className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jeremiah Agware</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis dolorum incidunt, voluptas, possimus eos quos placeat distinctio, maiores explicabo tempore nam exercitationem et consequuntur adipisci. Enim, commodi ipsam dolores ipsa ducimus aliquid hic ullam sed vitae impedit consequatur! Iste nam deserunt architecto corrupti eveniet itaque. Iure adipisci explicabo deserunt!
        </div>
      </div>
    </div>
  )
}
