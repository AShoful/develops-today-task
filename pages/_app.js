import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  console.log(store.getState());
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <style jsx global>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
    </>
  );
}
