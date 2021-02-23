import { useSelector } from 'react-redux';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import { Layout } from '../../Layout/Layout';
import { IPost } from '../../redux/types';
import { getPost } from '../../api';
 
const Post = (): JSX.Element => {
  
  const router = useRouter();
  const id = +router.query.id;
  const posts = useSelector((state: IPost[]) => state );
  
  const post = posts.filter(item => item.id === id)[0] || {title: '', body: ''};

  return <Layout title="Post"> 
    <Div>
      <h4>{post.title}</h4>
      <p>{post.body}</p> 
    </Div>   
  </Layout>
};

Post.getInitialProps = async ({query}) => {
  const id = query.id
  const response = await getPost(id);
  const post: IPost = await response.data;
  
  return {
    post
  }
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