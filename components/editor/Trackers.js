import {
  FormControl, FormLabel, FormHelperText, Link, IconButton,
  Button, Stack, Menu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { FaRegTrashAlt, FaChevronDown } from 'react-icons/fa';
import AutosizeTextarea from '@/components/autosize-textarea';

const trackerslistVariants = [
  'best',
  'best_ip',
  'all',
  'all_ip',
  'all_udp',
  'all_http',
  'all_https',
  'all_ws',
];

const newTrackonVariants = [
  'stable',
  'udp',
  'http',
  'live',
  'all',
];

export default function Trackers({
  announce, changeField, clearAnnounce, replaceAnnounce,
}) {
  const addFromTextUrl = async (url) => {
    const resp = await global.fetch(url);
    const text = await resp.text();
    const trackers = text.split('\n').filter(Boolean);

    replaceAnnounce(Array.from(new Set(announce.split('\n').concat(trackers))).filter(Boolean).join('\n'));
  };

  const addFromTrackerslist = (variant) => () => addFromTextUrl(`https://cdn.jsdelivr.net/gh/ngosang/trackerslist@master/trackers_${variant}.txt`);
  const addFromNewTrackon = (variant) => () => addFromTextUrl(`https://newtrackon.com/api/${variant}`);

  return (
    <FormControl id="xl" mt={7}>
      <FormLabel>
        Trackers
      </FormLabel>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={1} my={2}>
        <Menu>
          <MenuButton as={Button} variant="outline" rightIcon={<FaChevronDown />}>
            Add from trackerslist
          </MenuButton>
          <MenuList>
            {trackerslistVariants.map((variant) => (
              <MenuItem key={variant} onClick={addFromTrackerslist(variant)}>{variant}</MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} variant="outline" rightIcon={<FaChevronDown />}>
            Add from newTrackon
          </MenuButton>
          <MenuList>
            {newTrackonVariants.map((variant) => (
              <MenuItem key={variant} onClick={addFromNewTrackon(variant)}>{variant}</MenuItem>
            ))}
          </MenuList>
        </Menu>
        <IconButton
          icon={<FaRegTrashAlt />}
          aria-label="Clear"
          colorScheme="red"
          variant="outline"
          onClick={clearAnnounce}
          disabled={announce.trim() === ''}
        />
      </Stack>
      <AutosizeTextarea value={announce} name="announce" onChange={changeField} />
      <FormHelperText>
        List of the trackers which will be used to find peers
      </FormHelperText>
      <FormHelperText>
        *
        <Link href="https://github.com/ngosang/trackerslist" textDecoration="underline" isExternal>trackerslist</Link>
        {' '}
        - is a daily updated list of public bittorrent trackers
      </FormHelperText>
      <FormHelperText>
        **
        <Link href="https://newtrackon.com" textDecoration="underline" isExternal>newTrackon</Link>
        {' '}
        - is a service monitoring uptime of a public bittorrent trackers
      </FormHelperText>
    </FormControl>
  );
}
