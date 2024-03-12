import PostUser from '@/components/postUser/PostUser'
import styles from './singlepage.module.css'
import Image from 'next/image'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'


// FETCH DATA WITH API
// const getData = async ( id ) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 3600 } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function page({ params }) {
  const slug = params.slug
  const data = await getPost(slug)

  console.log(data);
  
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={data.img} fill alt="image 1" className={styles.heroImg} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.detail}>
          {data.img && <Image src={data.img} width={50} height={50} alt="avatar" className={styles.avatar} />}
          
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser user={data.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{data.createdAt}</span>
          </div>
        </div>
        <div className={styles.content}>
          {data.desc}
        </div>
      </div>
    </div>
  )
}
