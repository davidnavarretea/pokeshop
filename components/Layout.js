import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
const Layout = ({children, page}) => {
  return (
    <>
        <Head>
            <title>PokeShop - {page}</title>
            <meta name="description" content="Pokemon Shop - Tienda Pokemon" />
            <link rel="icon" href="/img/favicon.ico" />
        </Head>
        <Header/>
        {children}
          <Footer/>
    </>
  )
}

export default Layout