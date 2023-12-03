import Card from '../Card/';
import style from './CardList.module.css';

function EmptyMessage() {
  return (
    <div className={style.emptyContainer}>
      <span className={style.emptyMessage}>저장된 링크가 없습니다</span>
    </div>
  );
}

function CardList({ className, list }) {
  {
    return list.length ? (
      <div className={`${style.cardList} ${className}`}>
        {list.map((item) => {
          const {
            id,
            imageSource,
            image_source,
            createdAt,
            created_at,
            description,
            url,
          } = item;
          return (
            <Card
              key={id}
              imageSource={imageSource || image_source}
              createdAt={createdAt || created_at}
              description={description}
              url={url}
            />
          );
        })}
      </div>
    ) : (
      <EmptyMessage />
    );
  }
}

export default CardList;
