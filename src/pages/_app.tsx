import '~/assets/font/css/GlobalFonts.css';
import { AppProps } from 'next/app';
import { Providers } from '~/providers';
import Layout from './layout';
import StarsBackground from '~/containers/StarsBackground';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <StarsBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default Home;
