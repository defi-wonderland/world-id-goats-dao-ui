import Head from 'next/head';

import { Landing, Layout } from '~/containers';

const Home = () => {
  return (
    <>
      <Head>
        <title>GoatsDao</title>
      </Head>
      <Layout />
      <Landing />
    </>
  );
};

export default Home;
