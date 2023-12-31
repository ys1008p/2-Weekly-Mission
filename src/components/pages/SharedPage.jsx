import { ModalContextProvider } from '../../context/ModalContext';
import { SearchContextProvider } from '../../context/SearchContext';
import SharedLayout from '../others/SharedLayout';

export default function SharedPage() {
  return (
    <SearchContextProvider>
      <ModalContextProvider>
        <SharedLayout />
      </ModalContextProvider>
    </SearchContextProvider>
  );
}
