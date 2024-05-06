import '~/assets/font/css/GlobalFonts.css';
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from '~/providers';
import Layout from './layout';
import StarsBackground from '~/containers/StarsBackground';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <StarsBackground />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Providers>
  );
};

export default Home;
