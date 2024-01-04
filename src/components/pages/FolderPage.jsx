import { SearchContextProvider } from '../../context/SearchContext';
import FolderLayout from '../others/FolderLayout';
export default function FolderPage() {
  return (
    <SearchContextProvider>
      <FolderLayout />
    </SearchContextProvider>
  );
}
