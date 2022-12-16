import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import Layout from '~/components/layout';

import '~/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
