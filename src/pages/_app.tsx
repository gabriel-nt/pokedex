import Head from 'next/head';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { store } from '../store';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme/default';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="title" content="Pokédex" />
        <meta name="description" content="Pokédex" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pokédex" />
        <meta property="og:description" content="Pokédex" />

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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
