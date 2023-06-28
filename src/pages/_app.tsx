import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
// Custom global styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Custom logic or data fetching can be done here

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;