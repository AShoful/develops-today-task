import { useSelector } from 'react-redux';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import { Layout } from '../../Layout/Layout';
import { IPost } from '../../redux/types';
 
const Post = (): JSX.Element => {

  const router = useRouter();
  const id = +router.query.id;
  const posts = useSelector((state: IPost[]) => state ) 
  
  const post = posts.filter(item => item.id === id)[0];

  return <Layout title="Post"> 
    <Div>
      <h4>{post.title}</h4>
      <p>{post.body}</p> 
    </Div>   
  </Layout>
};

const Div = styled.div`
  {
    padding: 20px;
  }

  h4 {
    text-align: center;
  } 
`

export default Post;