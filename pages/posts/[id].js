import {Layout} from '../../Layout/Layout'

export default function Post({post: serverPost}) {
  return <Layout>
    <h1>post.title</h1>
      <hr />
      <p>post.body</p>
  </Layout> 
} 

