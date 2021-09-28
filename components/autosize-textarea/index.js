import { forwardRef } from 'react';
import { Textarea } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';

const AutosizeTextarea = forwardRef((props, ref) => (
  <Textarea
    transition="height none"
    minH="unset"
    overflow="hidden"
    w="100%"
    resize="none"
    ref={ref}
    minRows={1}
    as={ResizeTextarea}
    {...props}
  />
));

export default AutosizeTextarea;
