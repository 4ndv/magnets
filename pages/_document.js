import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
  Html, Head, Main, NextScript,
} from 'next/document';
import theme from '@/lib/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />

          <script
            defer
            src="https://umami.lynx.st/script.js"
            data-website-id="48405134-ce77-4387-a6a3-81e4e5367bee"
          />
        </body>
      </Html>
    );
  }
}
