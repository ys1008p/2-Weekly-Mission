import styles from './CardContainer.module.css';

import CardItem from '@/components/card/CardItem';

interface SharedCardContainerProps {
  items: Array<{
    id: number;
    createdAt: string;
    url: string;
    title: string;
    imageSource?: string;
  }>;
}

const SharedCardContainer = ({ items }: SharedCardContainerProps) => (
  <div className={styles['card-container']}>
    {items.map((item) => (
      <CardItem
        key={item.id}
        thumbnail={item.imageSource}
        createdAt={item.createdAt}
        title={item.title}
        url={item.url}
        isFolder={false}
      />
    ))}
  </div>
);

export default SharedCardContainer;
