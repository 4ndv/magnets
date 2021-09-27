import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Magnets - Online Magnet Links Editor</title>
        <meta name="description" content="Magnets is a visual magnet link generator, editor and parser. Convert torrent files to magnets and vice versa, edit and import trackers, and much more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>Hello!</div>
      </Container>
    </>
  );
}
