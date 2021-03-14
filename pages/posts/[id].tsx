import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Layout } from '../../Layout/Layout';
import { IState, IPost } from '../../redux/types';

const Post = ({ postSSR }): JSX.Element => {
  const post: IPost =
    useSelector((state: IState) => state.posts).filter(
      (item) => item.id === postSSR.id
    )[0] || postSSR;
  return (
    <Layout title="Post">
      <Div>
        <h4>{post.title}</h4>
        <p>
          {post.body} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime molestiae quasi perspiciatis exercitationem dolores neque sunt
          maiores voluptates est commodi dicta impedit voluptas quod minus eos,
          corrupti ipsam debitis earum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati incidunt, officia ad, eaque corporis vitae
          mollitia nostrum veritatis rerum unde molestias laborum voluptatibus
          nesciunt suscipit est? Accusamus ab eos autem. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quibusdam, blanditiis ex! Ex modi
          animi praesentium! Temporibus, ab, accusamus eum officia illo dolorum
          blanditiis amet ipsam maiores perspiciatis quod, iste facilis!
        </p>
      </Div>
    </Layout>
  );
};

export const getServerSideProps = ({ params }) => {
  const postSSR: IPost = { title: 'title', body: 'body', id: +params.id };
  return {
    props: {
      postSSR,
    },
  };
};

const Div = styled.div`
   {
    padding: 20px;
  }

  h4 {
    text-align: center;
  }
`;

export default Post;
