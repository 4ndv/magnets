import Head from 'next/head'
import { Container } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Magnets - online magnet links editor</title>
        <meta name="description" content="Magnets is a visual magnet link generator, editor and parser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello!</div>
    </Container>
  )
}
