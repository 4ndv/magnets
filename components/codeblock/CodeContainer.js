import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function CodeContainer(props) {
  return <Box padding="5" rounded="8px" bg={useColorModeValue('gray.100', 'gray.900')} {...props} />;
}

export default CodeContainer;
