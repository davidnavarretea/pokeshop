import Image from 'next/image'
import Link from 'next/link'
import {formatDate} from '../helpers/index'
import styles from '../styles/Entry.module.css'
const Entry = entry => {
  const { titulo, resumen, imagen, published_at, id } = entry.entry
  return (
    <article className={styles.article}>
        <Image layout='responsive' width={640} height={400} src={`http://localhost:1337${imagen.url}`} alt={`pokemon nft ${titulo}`}/>
        <div className={styles.content}>
            <h3>{titulo}</h3>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.resume}>{resumen}</p>
            <Link href={`/blog/${id}`}>
              <a className={styles.archor}>
                Leer Post
              </a>
            </Link>
        </div>
    </article>
  )
}

export default Entry