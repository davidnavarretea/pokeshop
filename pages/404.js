import Link from "next/link"
import styles from '../styles/Error.module.css'
const error = () => {
  return (
    <div className={styles.error}>
        <h1 className={`heading ${styles.heading}`}>Error</h1>
        <Link href='/'>Inicio</Link>
    </div>
  )
}

export default error