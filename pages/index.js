import Head from "next/head"
import { Container } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Magnets - Online Magnet Links Editor</title>
        <meta name="description" content="Magnets is a visual magnet link generator, editor and parser. Convert torrent files to magnets and vice versa, edit and import trackers, and much more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello!</div>
    </Container>
  )
}
