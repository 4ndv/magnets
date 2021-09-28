import {
  FormControl, FormLabel, FormHelperText, Button, Stack,
} from '@chakra-ui/react';
import { FaRegTrashAlt } from 'react-icons/fa';
import AutosizeTextarea from '@/components/autosize-textarea';

export default function Trackers({ announce, changeField, clearAnnounce }) {
  return (
    <FormControl id="xl" mt={5}>
      <FormLabel>
        Trackers
      </FormLabel>
      <AutosizeTextarea value={announce} name="announce" onChange={changeField} />
      <FormHelperText>
        List of the trackers which will be used to find peers
      </FormHelperText>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={1} mt={2}>
        <Button
          leftIcon={<FaRegTrashAlt />}
          colorScheme="red"
          variant="outline"
          onClick={clearAnnounce}
          disabled={announce.trim() === ''}
        >
          Clear
        </Button>
      </Stack>
    </FormControl>
  );
}
