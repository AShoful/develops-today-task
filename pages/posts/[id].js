import Link from 'next/link'
import {Layout} from '../../Layout/Layout'
// import Posts from '../posts'


export default function Post({post: serverPost}) {
  return <Layout>
    <h1>post.title</h1>
      <hr />
      <p>post.body</p>
      <Link href={'/'}><a>Back to Home</a></Link>
  </Layout> 
} 

