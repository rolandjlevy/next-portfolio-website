import '../styles/globals.css';
import type { AppContext } from 'next/app';

function MyApp({ Component, pageProps }: AppContext) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
