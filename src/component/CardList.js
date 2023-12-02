import { useState,useEffect } from "react";
import styles from "../styles/CardList.module.css";
import Card from "./Card";

function CardList({ sharedLinks,folderLinks, page }) {
  const [links, setLinks] =useState();

  useEffect(() => {
    if (page === "sharedPage") {
      setLinks(sharedLinks);
    } else if (page === "folderPage") {
      setLinks(folderLinks);
    }
  }, [sharedLinks, folderLinks, page]);// 사실 의존성배열 비워뒀는데 챗gpt가 알려줘서 해결 이유 알아내기

  return (
      <div className={styles.cardList}>{ links && links.map((link) => <Card key={link.id} link={link} />)}</div>
  );
}

export default CardList;
