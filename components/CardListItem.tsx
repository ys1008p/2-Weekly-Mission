import Image from "next/image";
import styles from "./CardList.module.css";

interface CardInfo {
  card: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    imageSource: string;
    description: string;
  };
}

export default function CardListItem({ card }: CardInfo) {
  console.log(card.imageSource);
  return (
    <>
      <li className={styles.cardListItem} key={card.id}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.cardImage}
            src={card.imageSource ? card.imageSource : ""}
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
    </>
  );
}
