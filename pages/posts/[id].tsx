import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { initialPost, addPostRedux } from '../../redux/actions/actionCreator';
import { wrapper } from '../../redux/store';
import { Layout } from '../../Layout/Layout';
import { IState, IPost } from '../../redux/types';

const Post = (): JSX.Element => {
  const post: IPost = useSelector((state: IState) => state.posts)[0];
  return (
    <Layout title="Post">
      <Div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </Div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, params, ...etc }) => {
    const post: IPost = await initialPost(+params.id);
    store.dispatch(addPostRedux(post));
  }
);

const Div = styled.div`
   {
    padding: 20px;
  }

  h4 {
    text-align: center;
  }
`;

export default Post;
