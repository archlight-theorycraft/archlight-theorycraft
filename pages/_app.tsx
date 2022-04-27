import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'

import Head from "next/head";
import React from "react";
import ContextProvider from '../lib/context';
import Layout from '../components/common/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default MyApp
