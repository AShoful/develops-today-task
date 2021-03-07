import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Nav = styled.nav`
   {
    position: fixed;
    height: 60px;
    left: 0;
    top: 0;
    right: 0;
    background: darkblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
const Main = styled.main`
   {
    padding: 60px 20px;
  }
`;

type LayoutType = {
  title: string;
  children: React.ReactNode;
};

export function Layout({
  children,
  title = 'Next App',
}: LayoutType): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta charSet="utf-8" />
      </Head>
      <Nav>
        <Link href={'/'}>
          <a>Posts List</a>
        </Link>
        <Link href={'/posts/new'}>
          <a>Add Post</a>
        </Link>
      </Nav>
      <Main>{children}</Main>
    </>
  );
}
