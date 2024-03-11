import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={'https://images.pexels.com/photos/17158016/pexels-photo-17158016/free-photo-of-japanese-zen-garden-at-the-gardens-of-the-world-marzahn-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='post 1' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi reprehenderit fuga atque deleniti asperiores. Libero vitae officia cum eaque!</p>
        <Link href={'/blog/id'} className={styles.link}>Read more</Link>
      </div>
    </div>
  )
}
