import Head from 'next/head';

import { Landing } from '~/containers';

const Home = () => {
  return (
    <>
      <Head>
        <title>GoatDAO</title>
      </Head>
      <Landing />
    </>
  );
};

export default Home;
