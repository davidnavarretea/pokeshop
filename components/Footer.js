import Link from 'next/link'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.bar}`}>
            <nav className={styles.nav}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/tienda'>Tienda</Link>
            </nav>
            <a className={styles.dna} href='https://davidnavarretea.com' target='blank'>
              <p className={styles.dna}>DNA</p>
            </a>
        </div>
    </footer>
  )
}

export default Footer