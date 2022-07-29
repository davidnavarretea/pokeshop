import { useRouter } from 'next/router'
const BlogEntry = (entry) => {
    const entr = entry.entry
    console.log(entr)
    const router = useRouter()
  return (
    <div>
    </div>
  )
}
export async function getStaticPaths() {
    const url = 'http://localhost:1337/blogs'
    const request = await fetch(url)
    const entries = await request.json()
    const paths = entries.map(entry => ({
        params: { id: entry.id }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params: { id }}) {
    const url = `http://localhost:1337/blogs/${id}`
    const request = await fetch(url)
    const entry = await request.json()
    return {
        props: {
            entry
        }
    }
}
export default BlogEntry