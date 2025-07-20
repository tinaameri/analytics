import '@mantine/core/styles.css';
import '../styles/fonts.css';

import Head from 'next/head';
import { AppShell, ScrollArea } from '@mantine/core';
import { ThemeProviders } from '../components/Providers/ThemeProviders';
import Footer from '../components/Layout/footer/Footer';

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
        <AppShell>
          {/* <AppShell.Header></AppShell.Header> */}

          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>
          <AppShell.Footer>
            <AppShell.Section>
              <Footer />
            </AppShell.Section>
          </AppShell.Footer>
        </AppShell>
      </ThemeProviders>
    </>
  );
}
