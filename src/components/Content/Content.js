import SearchBar from '../shared/SearchBar/SearchBar';
import { Cards } from '../shared/Cards/Cards';
import './Content.css';
export default function Content({ folder }) {
  return (
    <div className="Content">
      <SearchBar />
      <Cards folder={folder} />
    </div>
  );
}
