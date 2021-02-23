import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Link from 'next/link'
import {useRouter} from 'next/router';
// import styled from 'styled-components';
import { Layout } from '../../Layout/Layout';
import { fetchPosts } from '../../redux/actions/actionCreator';
import { IPost } from '../../redux/types'
 
const Post = (): JSX.Element => {

  const dispatch = useDispatch()
  const router = useRouter();
  const id = +router.query.id;
  const posts = useSelector((state: IPost[]) => state ) 
  
  useEffect(() => {
    if(posts.length === 0){
    dispatch(fetchPosts())
    }
  }, [dispatch])

  const post = posts.filter(item => item.id === id)[0]

  return <Layout title="Home"> 
    <h1>Post</h1>
    <h6>{post.title}</h6>
    <p>{post.body}</p>    
  </Layout>
};

export default Post