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
            async
            src="https://a.shirou.lynx.pink/tracker.js"
            data-ackee-server="https://a.shirou.lynx.pink"
            data-ackee-domain-id="93e65cd3-a55b-41e7-957e-d6f51b25b43b"
            data-ackee-opts='{ "detailed": true }'
          />
        </body>
      </Html>
    );
  }
}
