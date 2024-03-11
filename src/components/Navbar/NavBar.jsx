import Link from 'next/link'
import Links from './Links/Links'
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </header>
  )
}
