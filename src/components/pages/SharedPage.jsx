import { SearchContextProvider } from '../../context/SearchContext';
import SharedLayout from '../others/SharedLayout';

export default function SharedPage() {
  return (
    <SearchContextProvider>
      <SharedLayout />
    </SearchContextProvider>
  );
}
