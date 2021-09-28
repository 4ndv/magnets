import {
  FormControl, FormLabel, FormHelperText, Link,
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

export default function Trackers({
  announce, changeField, clearAnnounce, replaceAnnounce,
}) {
  const addFromTrackerslist = (variant) => async () => {
    const resp = await global.fetch(`https://cdn.jsdelivr.net/gh/ngosang/trackerslist@master/trackers_${variant}.txt`);
    const text = await resp.text();
    const trackers = text.split('\n').filter(Boolean);

    replaceAnnounce(Array.from(new Set(announce.split('\n').concat(trackers))).filter(Boolean).join('\n'));
  };

  return (
    <FormControl id="xl" mt={7}>
      <FormLabel>
        Trackers
      </FormLabel>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={1} my={2}>
        <Button
          leftIcon={<FaRegTrashAlt />}
          colorScheme="red"
          variant="outline"
          onClick={clearAnnounce}
          disabled={announce.trim() === ''}
        >
          Clear
        </Button>
        <Menu>
          <MenuButton as={Button} variant="outline" rightIcon={<FaChevronDown />}>
            Add from trackerslist*
          </MenuButton>
          <MenuList>
            {trackerslistVariants.map((variant) => (
              <MenuItem key={variant} onClick={addFromTrackerslist(variant)}>{variant}</MenuItem>
            ))}
          </MenuList>
        </Menu>
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
    </FormControl>
  );
}
