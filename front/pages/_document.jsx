import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <ColorSchemeScript />
        <link
            rel="preload"
            href="/assets/fonts/IRANSansXFaNum-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IRANSansXFaNum-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />  
          <link
            rel="preload"
            href="/assets/fonts/IRANSansXFaNum-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IRANSansXFaNum-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/IRANSansXVF.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
