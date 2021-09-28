import { Box } from '@chakra-ui/react';
import CodeContainer from './CodeContainer';

function CodeBlock({ code }) {
  return (
    <Box position="relative" zIndex="0">
      <CodeContainer overflow="hidden" wordBreak="break-all">
        {code}
      </CodeContainer>
    </Box>
  );
}

export default CodeBlock;
