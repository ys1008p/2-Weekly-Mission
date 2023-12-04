import style from './SearchBar.module.css';

function SearchBar({ placeholder, value, onChange, className }) {
  const classNames = `${style.searchBar} ${className}`;
  return (
    <div className={classNames}>
      <div className={style.icon}></div>
      <input
        className={style.input}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
