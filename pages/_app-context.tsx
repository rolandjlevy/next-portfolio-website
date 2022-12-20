import '../styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import { MyContext } from '../src/context';

function MyApp({ Component, pageProps }: AppContext) {
  return (
    <MyContext>
      <Component {...pageProps} />
    </MyContext>
  );
}

export default MyApp;
