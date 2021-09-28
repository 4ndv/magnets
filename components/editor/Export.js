import { toMagnet, isValidInfoHash } from '@/lib/parser';
import CodeBlock from '@/components/codeblock';

export default function Export({ torrentObject }) {
  const { infoHash } = torrentObject;
  const code = isValidInfoHash(infoHash) ? toMagnet(torrentObject) : 'Specify valid Info Hash to generate magnet link';

  return (
    <CodeBlock code={code} />
  );
}
