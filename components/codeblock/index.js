import { Box } from '@chakra-ui/react';
import CodeContainer from './CodeContainer';
import CopyButton from './CopyButton';

function CodeBlock({ code }) {
  return (
    <Box position="relative" zIndex="0">
      <CodeContainer overflow="hidden">
        {code}
      </CodeContainer>
      <CopyButton top="4" code={code} />
    </Box>
  );
}

export default CodeBlock;
