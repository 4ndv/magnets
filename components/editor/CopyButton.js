import { Button, useClipboard } from '@chakra-ui/react';
import { IoMagnet } from 'react-icons/io5';

function CopyButton({ code }) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button
      leftIcon={<IoMagnet />}
      variant="outline"
      onClick={onCopy}
    >
      {hasCopied ? 'Copied' : 'Copy magnet link'}
    </Button>
  );
}

export default CopyButton;
