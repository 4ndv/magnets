import parseTorrent from 'parse-torrent';
import pick from 'lodash/pick';
import { Buffer } from 'buffer/';

const allowedFields = [
  'infoHash',
  'name',
  'announce',
  'xl',
];

export function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new global.FileReader();
    reader.onload = () => resolve(Buffer.from(reader.result));
    reader.onerrror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export function parse(magnet) {
  const parsed = parseTorrent(magnet);

  return pick(parsed, allowedFields);
}

export function isValidInfoHash(str) {
  return /^[0-9a-fA-F]{40}$/i.test(str);
}
