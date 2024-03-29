import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='post 1' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{ post.body }</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>Read more</Link>
      </div>
    </div>
  )
}
