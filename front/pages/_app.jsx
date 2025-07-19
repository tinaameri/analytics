import '@mantine/core/styles.css';
import '../styles/fonts.css';
import Head from 'next/head';
import { ThemeProviders } from '../components/Providers/ThemeProviders';


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProviders>
        <Head>
          <title>Analytics</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </ThemeProviders>
    </>
  );
}
