import { wrapper } from '../redux/store';

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
