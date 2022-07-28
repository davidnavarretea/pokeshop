import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.bar}`}>
            {/* Logo */}
            <Link href='/'>
              <a>
               <Image className={styles.logo} src='/img/l.webp' width={200} height={200} alt='pokeshop'/>
              </a>
            </Link>
            {/* Nav */}
            <nav className={styles.nav}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/tienda'>Tienda</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header