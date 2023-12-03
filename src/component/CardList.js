import { useState, useEffect } from "react";
import styles from "../styles/CardList.module.css";
import Card from "./Card";

function CardList({ sharedLinks, foldersLink, page }) {
  const [links, setLinks] = useState();

  useEffect(() => {
    if (page === "sharedPage") {
      setLinks(sharedLinks);
    } else if (page === "folderPage") {
      setLinks(foldersLink);
    }
  }, [sharedLinks, foldersLink, page]);

  return <div className={styles.cardList}>{links && links.map((link) => <Card key={link.id} link={link} />)}</div>;
}

export default CardList;
