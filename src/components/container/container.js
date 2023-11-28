import CardList from "../cardList/cardList";
import Search from "../search/Search";
import styles from "./container.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <Search />
      <CardList />
    </div>
  );
}
