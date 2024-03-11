'use client'

import { useState } from 'react'
import NavLink from './NavLink/NavLink'
import styles from './links.module.css'

export default function Links() {

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
    ]

    const [open, setOpen] = useState(false);

    // TEMPORARY
    const session = true
    const isAdmin = true

  return (
    <>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {
          session ? (
            <>
              {isAdmin && (<NavLink item = {{ title:'Admin', path:'/admin'}} />)}
              <button className={styles.logout}>Logout</button>
            </>
          ) :
          (<NavLink item={{title:'login', path:'/login'}} />)
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>Menu</button>
      {
        open && <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      }
    </>
  )
}
