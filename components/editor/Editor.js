import { Button, Stack } from '@chakra-ui/react';
import { FaRegTrashAlt } from 'react-icons/fa';
import create from 'zustand';
import ImportMagnetModal from './ImportMagnetModal';
import ImportTorrentFileModal from './ImportTorrentFileModal';

const initialState = {
  infoHash: '',
  name: '',
  announce: [],
  xl: '',
};

const useStore = create((set) => ({
  ...initialState,
  clear: () => set(initialState),
  replace: (value) => set({ ...initialState, ...value }),
}));

export default function Editor() {
  const replace = useStore((state) => state.replace);

  return (
    <form>
      <Stack direction="row" spacing={1}>
        <ImportMagnetModal replaceEditorState={replace} />
        <ImportTorrentFileModal replaceEditorState={replace} />
        <Button leftIcon={<FaRegTrashAlt />} colorScheme="red" variant="outline" onClick={useStore((state) => state.clear)}>
          Reset
        </Button>
      </Stack>
      {JSON.stringify(useStore((state) => state))}
    </form>
  );
}
