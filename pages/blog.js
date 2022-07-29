import Layout from "../components/Layout"
import Entry from "../components/Entry"
import styles from '../styles/Blog.module.css'
const Blog = (entries) => {
  const entriesArray = entries.entries
  return (
    <Layout
        page='Blog'
    >
      <main className="contenedor">
        <div className={styles.blog}>
          {entriesArray.map( entry => (
            <Entry
              key={entry.id}
              entry={entry}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`
  const request = await fetch(url)
  const entries = await request.json()
  return {
    props: {
      entries
    }
  }
}
export default Blog