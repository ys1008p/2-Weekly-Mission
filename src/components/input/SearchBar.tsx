import styles from './SearchBar.module.css';

import SearchIcon from '@/assets/images/icon/search.svg';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => (
  <div className={styles['search-bar']}>
    <img className={styles.icon} src={SearchIcon} alt="search" />
    <input className={styles.input} type="text" placeholder={placeholder} />
  </div>
);

export default SearchBar;
