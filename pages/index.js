import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Tienda.module.css'
export default function Home() {
  return (
    <Layout
      page='Inicio'
    >
      <main className={`contenedor ${styles.contenedor2}`}>
        <a href='https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/29963882739591922624539360890442999687194626454638703259683535423299133636609/' target='_blank' rel="noopener noreferrer">
          <Image className={styles.img} layout='responsive' width={380} height={529} src='/img/marco.webp' alt='pokemon nft'/>
        </a>
      </main>
    </Layout>
  )
}
