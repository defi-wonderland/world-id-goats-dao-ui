import Head from 'next/head';

import { Landing, Layout } from '~/containers';

const Home = () => {
  return (
    <>
      <Head>
        <title>GoatsDAO</title>
      </Head>
      <Layout />
      <Landing />
    </>
  );
};

export default Home;
