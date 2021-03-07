import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { initializeStore } from '../redux/store';

import { Layout } from '../Layout/Layout';
import { initialProps, addPostsRedux } from '../redux/actions/actionCreator';
import { IPost } from '../redux/types';

const PostsList = ({ posts }): JSX.Element => {
  // const dispatch = useDispatch();
  const postsRedux = useSelector((state: IPost[]) => state);
  // console.log(posts)
  // useEffect(() => {
  //     dispatch(addPostsRedux(posts))
  // }, [dispatch]);

  return (
    <Layout title="Post List">
      <h4>Posts List</h4>
      <Ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </Ul>
    </Layout>
  );
};

export async function getServerSideProps(contex) {
  const posts = await initialProps();
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch(addPostsRedux(posts));

  const state = await reduxStore.getState();
  // console.log(state)

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: reduxStore.getState(),
    },
  };
}

const Ul = styled.ul`
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default PostsList;
