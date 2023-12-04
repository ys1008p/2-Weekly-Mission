import styles from './CardContainer.module.css';

import CardItem from '@/components/card/CardItem';

interface CardContainerProps {
  items: Array<{
    id: number;
    createdAt: string;
    url: string;
    title: string;
    imageSource?: string;
  }>;
  isFolder: boolean;
}

const CardContainer = ({ items, isFolder }: CardContainerProps) => (
  <div className={styles['card-container']}>
    {items.map((item) => (
      <CardItem
        key={item.id}
        thumbnail={item.imageSource}
        createdAt={item.createdAt}
        title={item.title}
        url={item.url}
        isFolder={isFolder}
      />
    ))}
  </div>
);

export default CardContainer;
