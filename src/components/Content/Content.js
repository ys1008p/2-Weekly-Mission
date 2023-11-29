import SearchBar from '../SearchBar/SearchBar';
import { Cards } from '../Cards/Cards';
import './Content.css';
export default function Content({ folder }) {
  return (
    <div className="Content">
      <SearchBar />
      <Cards folder={folder} />
    </div>
  );
}
