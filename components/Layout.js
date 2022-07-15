import Head from "next/head"
import Header from "./Header"
const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
            <title>PokeShop - {page}</title>
            <meta name="description" content="Pokemon Shop - Tienda Pokemon" />
            <link rel="icon" href="/img/favicon.ico" />
        </Head>
        <Header/>
        {children}
    </div>
  )
}

export default Layout