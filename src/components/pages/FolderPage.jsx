import { ModalContextProvider } from '../../context/ModalContext';
import { SearchContextProvider } from '../../context/SearchContext';
import FolderLayout from '../others/FolderLayout';
export default function FolderPage() {
  return (
    <SearchContextProvider>
      <ModalContextProvider>
        <FolderLayout />
      </ModalContextProvider>
    </SearchContextProvider>
  );
}
