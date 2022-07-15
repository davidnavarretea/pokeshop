import Head from "next/head"
const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
            <title>PokeShop - {page}</title>
            <meta name="description" content="Pokemon Shop - Tienda Pokemon" />
            <link rel="icon" href="/public/favicon.ico" />
        </Head>
        {children}
    </div>
  )
}

export default Layout