import { AppProps } from 'next/app';
import Head from 'next/head';
import '@pavelkeyzik/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to pavelkeyzik!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
