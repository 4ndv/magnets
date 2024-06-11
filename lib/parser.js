import parseTorrent, { toMagnetURI } from 'parse-torrent';
import pick from 'lodash/pick';
import { Buffer } from 'buffer/';

const allowedFields = [
  'infoHash',
  'name',
  'announce',
  'xl',
  'length',
];

export function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new global.FileReader();
    reader.onload = () => resolve(Buffer.from(reader.result));
    reader.onerrror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export async function parse(magnet) {
  const parsed = await parseTorrent(magnet);

  const data = pick(parsed, allowedFields);

  // Unify length between magnet and .torrent
  if (!data.xl && data.length) {
    data.xl = data.length;
    delete data.length;
  }

  // Announce is an array of strings, join them with a newline to render in textarea
  data.announce = data.announce.join('\n');

  return data;
}

export function convert(obj) {
  const newObj = { ...obj };

  if (+newObj.xl === 0) { delete newObj.xl; }

  newObj.announce = newObj.announce.split('\n').filter(Boolean);

  return newObj;
}

export function toMagnet(obj) {
  return toMagnetURI(convert(obj));
}

export function isValidInfoHash(str) {
  return /^[0-9a-fA-F]{40}$/i.test(str);
}
