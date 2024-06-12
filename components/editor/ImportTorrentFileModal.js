import {
  useDisclosure, Button, Modal, ModalContent, ModalOverlay, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';
import { create } from 'zustand';
import { parse, readFile } from '@/lib/parser';
import Dropzone from '@/components/dropzone';

const useStore = create((set) => ({
  valid: true,
  parseAndValidate: async (file) => {
    const buffer = await readFile(file);

    try {
      const data = await parse(buffer);

      set({ valid: true });

      return data;
    } catch (_) {
      set({ valid: false });

      return false;
    }
  },
  reset: () => {
    set({ valid: true });
  },
}));

export default function ImportTorrentFileModal({ replaceEditorState }) {
  const valid = useStore((state) => state.valid);
  const parseAndValidate = useStore((state) => state.parseAndValidate);
  const reset = useStore((state) => state.reset);

  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => reset(),
  });

  const importFile = async (file) => {
    const data = await parseAndValidate(file);

    if (data) {
      replaceEditorState(data);
      onClose();
    }
  };

  let invalidAlert = null;

  if (!valid) {
    invalidAlert = (
      <Alert status="error" borderRadius={4} mt={5}>
        <AlertIcon />
        <AlertTitle mr={2}>Invalid file</AlertTitle>
        <AlertDescription>Choose another .torrent file</AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <Button leftIcon={<AiFillFileAdd />} colorScheme="teal" variant="outline" onClick={onOpen}>
        Import from .torrent file
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import from .torrent file</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Dropzone onFileAccepted={importFile} />
            {invalidAlert}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
