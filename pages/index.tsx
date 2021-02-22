import styled from 'styled-components';
import { Layout } from '../Layout/Layout'

const Home = (): JSX.Element => (
  <Layout title="Home"> 
    <Title>My First Next.js Page</Title>
  </Layout>
);


const Title = styled.h1`
  color: red;
`;

export default Home