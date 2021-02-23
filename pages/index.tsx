import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
// import styled from 'styled-components';
import { Layout } from '../Layout/Layout';
import { fetchPosts } from '../redux/actions/actionCreator';
import { IPost } from '../redux/types'
 
const Home = (): JSX.Element => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const posts = useSelector((state: IPost[]) => state)

  console.log(posts);
  
  return <Layout title="Home"> 
    <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    {/* {posts.map(item => (
      <Div key={item.id}>
        <span>{item.title}</span> 
        <span>{item.body}</span>
      </Div>
    ))} */}
  </Layout>
};


// const Div = styled.div`
//   border: 1px solid grey;
//   display: flex;
//   justify-content: space-between;
// `;

export default Home