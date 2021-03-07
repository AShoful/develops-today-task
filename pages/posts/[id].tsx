import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { initialProps, initialPost } from '../../redux/actions/actionCreator';
import { initializeStore } from '../../redux/store';
import { Layout } from '../../Layout/Layout';
import { IPost } from '../../redux/types';
import { getPost } from '../../api';

let postsRedux = [];

const Post = ({ post }): JSX.Element => {
  const postsRedux = useSelector((state: IPost[]) => state);
  console.log(postsRedux);
  return (
    <Layout title="Post">
      <Div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </Div>
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const posts = await initialProps();
//   const paths = posts.map( item => ({params: {id: String(item.id)}}));

//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getServerSideProps(ctx) {
  const { state } = ctx;
  console.log(state);
  const reduxStore = await initializeStore();
  console.log(reduxStore.getState());
  return {
    props: {
      post: { title: 'get', body: 'hjjueyr', id: '2' },
    },
  };
}

// export async function getServerSideProps({ params }) {
//   let post = {}
//   // console.log(postsRedux)
//   if (postsRedux.length){
//     post = postsRedux.filter(item => item.id === params.id)[0]
//   } else {
//     console.log('fetch')
//     post = await initialPost(params.id)
//   }
//   // console.log(post)
//   return {
//     props: {
//       post
//     }
//   }
// }

const Div = styled.div`
   {
    padding: 20px;
  }

  h4 {
    text-align: center;
  }
`;

export default Post;
