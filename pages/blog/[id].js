import { useRouter } from 'next/router'
const BlogEntry = (entry) => {
    const entr = entry.entry
    const router = useRouter()
    console.log(entr)
  return (
    <div>
    </div>
  )
}
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
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
    const url = `${process.env.API_URL}/blogs/${id}`
    const request = await fetch(url)
    const entry = await request.json()
    return {
        props: {
            entry
        }
    }
}
export default BlogEntry