import { Layout } from "../../../Layout/Layout";
import Router from 'next/router';

export default function AddPost (): JSX.Element{
  return <Layout title = "Home"> 
        <h1>AddPost</h1>
        <button onClick={() => Router.push('/')}>Go to home</button>
      </Layout>
}

