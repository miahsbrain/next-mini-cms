import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CThoughts</div>
      <div className={styles.text}>
        Creative thoughts agency &copy; All rights reserved.
      </div>
    </div>
  )
}
