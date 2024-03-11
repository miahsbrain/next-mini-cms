import Link from 'next/link'
import Links from './Links/Links'
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <header className={styles.container}>
      <Link href='/'><div className={styles.logo}>CThoughts</div></Link>
      <div>
        <Links />
      </div>
    </header>
  )
}
