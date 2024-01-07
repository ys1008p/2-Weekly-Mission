import Image from "next/image";
import styles from "./CardList.module.css";

interface Card {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  imageSource: string;
  description: string;
}

interface FolderInfo {
  folderInfo: {
    links: Card[];
  };
}

export default function CardList({ folderInfo }: FolderInfo) {
  return (
    <ul className={styles.cardContainer}>
      {folderInfo?.links?.map((card: Card) => {
        return (
          <li className={styles.cardListItem} key={card.id}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.cardImage}
                src={card.imageSource}
                height="10000"
                width="10000"
                alt="카드이미지"
                objectFit="cover"
              />
            </div>
            <div className={styles.textContainer}>
              <span>{card.createdAt}</span>
              <p className={styles.description}>{card.description}</p>
              <span>{card.createdAt}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
