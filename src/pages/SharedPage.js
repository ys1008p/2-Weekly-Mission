// import './SharedPage.css';
import FolderBanner from '../components/FolderBanner/FolderBanner';
import SearchBar from '../components/shared/SearchBar/SearchBar';
import { Cards } from '../components/shared/Cards/Cards';
export default function SharedPage() {
  return (
    <div>
      {/* <FolderBanner /> */}
      <SearchBar />
      <Cards />
    </div>
  );
}
