import { useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';

import { wrapper } from '../redux/store';
import { Layout } from '../Layout/Layout';
import { initialProps, addPostsRedux } from '../redux/actions/actionCreator';
import { IState, IPost } from '../redux/types';

const PostsList = (): JSX.Element => {
  const posts: IPost[] = useSelector((state: IState) => state.posts);

  return (
    <Layout title="Post List">
      <h4>Posts List</h4>
      <Ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title} Lorem ipsum dolor sit amet</a>
            </Link>
          </li>
        ))}
      </Ul>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const posts: IPost[] = await initialProps();
    store.dispatch(addPostsRedux(posts));
  }
);

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
