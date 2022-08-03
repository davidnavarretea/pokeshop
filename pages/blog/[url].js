import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatDate } from '../../helpers'
import styles from '../../styles/Entry.module.css'
const BlogEntry = (entry) => {
    const entr = entry.entry
    const {contenido, imagen, published_at, titulo} = entr
    const router = useRouter()
    console.log(imagen.url)
  return (
    <Layout
        page={titulo}
    >
        <main className='contenedor'>
            <h1 className='heading'>{titulo}</h1>
            <article className={styles.article}>
                <Image layout='responsive' width={640} height={400} src={`http://localhost:1337${imagen.url}`} alt={ `Imagen entrada ${titulo}` }/>
                <div className={styles.content}>
                    <p className={styles.date}>{formatDate(published_at)}</p>
                    <p className={styles.text}>{contenido}</p>
                </div>
            </article>
        </main>
    </Layout>
  )
}
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const request = await fetch(url)
    const entries = await request.json()
    const paths = entries.map(entry => ({
        params: { url: entry.url }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params: { url  }}) {
    const url2 = `${process.env.API_URL}/blogs?url=${url}`
    const request = await fetch(url2)
    const entry = await request.json()
    return {
        props: {
            entry: entry[0]
        }
    }
}
export default BlogEntry