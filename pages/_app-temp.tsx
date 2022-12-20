import { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import * as _AppContext from "../AppContext";

type TProps = AppProps & {
  projectData: string;
};

function MyApp({ Component, pageProps, projectData }: TProps) {
  console.log({ projectData });
  return (
    <Component {...pageProps} />
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const response = await fetch('https://express-portfolio-api.rolandjlevy.repl.co/api/routes/projects?origin=https://rolandlevy.co.uk');
  const data = await response.json();
  return {
    ...pageProps,
    projectData: data
  };
}

export default MyApp;
