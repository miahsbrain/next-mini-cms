import styles from './contact.module.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/contact.png'} fill className={styles.img} alt='contact' />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form} >
          <input type='text' placeholder='Name and surname'></input>
          <input type='text' placeholder='Email address'></input>
          <input type='text' placeholder='Phone number (optional)'></input>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}