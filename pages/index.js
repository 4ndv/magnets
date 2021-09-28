import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '@/components/header';
import Editor from '@/components/editor';

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Magnets - Online Magnet Links Editor</title>
        <meta name="description" content="Magnets is a visual magnet link generator, editor and parser. Convert torrent files to magnets and vice versa, edit and import trackers, and much more" />
      </Head>
      <Box mx="auto" p="6" maxW="1200px">
        <Editor />
      </Box>
    </>
  );
}
