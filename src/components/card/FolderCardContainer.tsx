import styles from './CardContainer.module.css';

import CardItem from '@/components/card/CardItem';

interface FolderCardContainerProps {
  items: Array<{
    id: number;
    created_at: string;
    url: string;
    title: string;
    image_source?: string | null;
  }>;
}

const FolderCardContainer = ({ items }: FolderCardContainerProps) => (
  <div className={styles['card-container']}>
    {items.map((item) => (
      <CardItem
        key={item.id}
        thumbnail={item.image_source}
        createdAt={item.created_at}
        title={item.title}
        url={item.url}
        isFolder={true}
      />
    ))}
  </div>
);

export default FolderCardContainer;
