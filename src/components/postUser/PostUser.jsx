import styles from './postuser.module.css'
import { getUser } from '@/lib/data'

// FETCH DATA WITH API
// const getData = async (user) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`, { next: { revalidate: 3600 } })
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }

export default async function PostUser({ user }) {

    // const data = await getData( user )
    const data = await getUser( user )

  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.detail}>{data.username}</span>
    </div>
  )
}
