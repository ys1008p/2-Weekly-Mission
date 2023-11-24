import SearchIcon from '@/assets/images/icon/search.svg';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => (
  <div className="search-bar">
    <img src={SearchIcon} alt="search" />
    <input type="text" placeholder={placeholder} />
  </div>
);

export default SearchBar;
