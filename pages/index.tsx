import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import Link from 'next/link';
 import styled from 'styled-components';
import { Layout } from '../Layout/Layout';
import { getPosts } from '../api'
import { fetchPosts } from '../redux/actions/actionCreator';
import { IPost } from '../redux/types';
 
const PostsList = (): JSX.Element => {

  const dispatch = useDispatch();

  const store = useStore();
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  const posts = useSelector((state: IPost[]) => state);

  return <Layout title="Post List"> 
    <h4>Posts List</h4>
      <Ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </Ul>
  </Layout>
};

PostsList.getInitialProps = async () => {
  const response = await getPosts();
  const posts: IPost[] = await response.data;
  
  return {
    posts
  }
};


const Ul = styled.ul`
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
  
`;

export default PostsList