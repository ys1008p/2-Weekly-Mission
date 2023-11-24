import SearchBar from '../SearchBar/SearchBar';
import { Cards } from '../Cards/Cards';
import './Content.css';
export default function Content({ items }) {
  return (
    <div className="Content">
      <SearchBar />
      <Cards items={items} />
    </div>
  );
}
