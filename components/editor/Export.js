import {
  Button, Heading, Link, Stack,
} from '@chakra-ui/react';
import { AiFillFile } from 'react-icons/ai';
import { toMagnet, isValidInfoHash } from '@/lib/parser';
import CodeBlock from '@/components/codeblock';
import CopyButton from './CopyButton';

export default function Export({ torrentObject }) {
  const { infoHash } = torrentObject;
  const hashIsValid = isValidInfoHash(infoHash);
  const code = hashIsValid ? toMagnet(torrentObject) : 'Specify valid Info Hash to generate magnet link';
  let exportButtons = null;

  if (hashIsValid) {
    exportButtons = (
      <Stack direction={{ base: 'column', md: 'row' }} spacing={1} mb={3}>
        <CopyButton code={code} />
        <Link href={`https://itorrents.org/torrent/${infoHash}.torrent`} isExternal>
          <Button leftIcon={<AiFillFile />} variant="outline" w="100%">
            Download .torrent from cache
          </Button>
        </Link>
      </Stack>
    );
  }

  return (
    <>
      <Heading size="lg" mb={2}>Result</Heading>
      {exportButtons}
      <CodeBlock code={code} />
    </>
  );
}
