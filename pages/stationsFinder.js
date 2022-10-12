import Head from 'next/head';
import Basic from '../src/components/Basic';

export default function StationsFinder() {

  return (
    <>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <title>City Bikes</title>
      </Head>
      <Basic/>
    </>
  )
}
