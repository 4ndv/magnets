import {
  chakra, Link, HStack, Flex, Box, useColorMode, useColorModeValue, Icon, IconButton,
  Button,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaHeart } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue('gray.100', 'gray.900');

  const SponsorButton = (
    <Link href="https://lynx.pink/buymeacoffee/" isExternal>
      <Button leftIcon={<FaHeart />} colorScheme="pink" variant="solid" ml={4}>
        Sponsor
      </Button>
    </Link>
  );

  return (
    <Box pos="relative">
      <chakra.header
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <b>Magnets</b>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack spacing="5">
                <Link
                  isExternal
                  href="https://github.com/4ndv/magnets"
                >
                  <Icon
                    as={AiFillGithub}
                    display="block"
                    transition="color 0.2s"
                    w="5"
                    h="5"
                    _hover={{ color: 'gray.600' }}
                  />
                </Link>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {SponsorButton}
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  );
}
