import Head from 'next/head';
import About from '../src/components/About';

export default function about() {

  return (
    <>
      <Head>
        <title>City Bikes</title>
      </Head>
      <About/>
    </>
  )
}
