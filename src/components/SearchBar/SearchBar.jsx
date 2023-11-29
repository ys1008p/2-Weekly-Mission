import './style.css';

function SearchBar({ placeholder, value, onChange, className }) {
  const classNames = `search-bar ${className}`;
  return (
    <div className={classNames}>
      <div className="search-bar__icon"></div>
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
