import {
  useDisclosure, Button, Modal, ModalContent, ModalOverlay, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Textarea,
} from '@chakra-ui/react';
import { IoMagnet } from 'react-icons/io5';
import create from 'zustand';
import { parse } from '@/lib/parser';

const initialState = {
  link: '',
  valid: true,
};

const useStore = create((set) => ({
  ...initialState,
  changeLink: ({ target: { value: link } }) => {
    set({ link, valid: true });
  },
  parseAndValidate: (magnet) => {
    try {
      const data = parse(magnet);

      set({ valid: true });

      return data;
    } catch (_) {
      set({ valid: false });

      return false;
    }
  },
  reset: () => {
    set(initialState);
  },
}));

export default function ImportMagnetModal({ replaceEditorState }) {
  const valid = useStore((state) => state.valid);
  const parseAndValidate = useStore((state) => state.parseAndValidate);
  const link = useStore((state) => state.link);
  const changeLink = useStore((state) => state.changeLink);
  const reset = useStore((state) => state.reset);

  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => reset(),
  });

  const importLink = () => {
    const data = parseAndValidate(link);

    if (data) {
      replaceEditorState(data);
      onClose();
    }
  };

  return (
    <>
      <Button leftIcon={<IoMagnet />} colorScheme="teal" variant="outline" onClick={onOpen}>
        Import from magnet link
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import from magnet link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="magnet:?xt=urn:btih:WJWICNR2YGRDM5STQWTQFLWBA6SJLANV&dn=example&xl=3071934464&tr=https%3A%2F%2Fexample.com%2Fannounce"
              value={link}
              onChange={changeLink}
              isInvalid={!valid}
              rows={10}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" variant="solid" onClick={() => importLink()}>Import</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
