import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <Layout
        page='Nosotros'
    >
        <main className="contenedor">
          <h2 className={styles.heading}>
            ¿Qué es PokeShop?
          </h2>
          <div className={styles.contenido}>
            <div className={styles.texton}>
              <Image className={styles.img} layout="fixed" width={200} height={200} src='/img/pokemon1.webp' alt="pokemon nft"/>;
              <p className={styles.colortext}>NFTs de Pokemon, invierte directamente en OpenSea, sin intermediarios</p>
              <Image className={styles.img} layout="fixed" width={200} height={200} src='/img/pokemon2.webp' alt="nft pokemon"/>;
              <p className={styles.colortext}>Si en 1 año, no le sacas rendimiento al NFT, te lo recompramos por el valor adquirido, porque creemos en nuestros Pokemon</p>
            </div>
            <div className={styles.texton}>
            <Image className={styles.img} layout="fixed" width={200} height={200} src='/img/pokemon4.webp' alt="nfts pokemon"/>;
            <p className={styles.colortext}>Top 9% de los diseñadores freelancers, este marketplace de NFTs de Pokemon es para ti</p>
            <Image className={styles.img} layout="fixed" width={200} height={200} src='/img/pokemon3.webp' alt="pokemon nfts"/>;
            <p className={styles.colortext}>Si eres coleccionista, solo se postean los mejores NFTs, de los mejores diseñadores de NFTs de Pokemon</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros