import Head from 'next/head';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { theme } from '../styles/theme/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="title" content="Pokedex" />
        <meta name="description" content="Pokedex" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pokedex" />
        <meta property="og:description" content="Pokedex" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/pokeball.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
