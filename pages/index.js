import Head from 'next/head';
import HomePage from '../src/components/HomePage';

export default function Home() {

  return (
    <>
      <Head>
        <title>City Bikes</title>
      </Head>
      <HomePage/>
    </>
  )
}
