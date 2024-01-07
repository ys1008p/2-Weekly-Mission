import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <input
      placeholder="링크를 검색해 보세요"
      className={styles.searchBar}
      type="text"
    />
  );
}
