import { ReactComponent as SearchIcon } from "./Search.svg";
import styles from "./search.module.css";

export default function Search() {
  return (
    <>
      <div>
        <input type="text" className={styles.search} Placeholder={"링크를 검색해보세요."} />
      </div>
    </>
  );
}
