import Card from '../Card/';
import style from './CardList.module.css';

function CardList({ className, list }) {
  const classNames = `${style.cardList} ${className}`;
  return (
    <div className={classNames}>
      {list.map((item) => {
        const { id, imageSource, createdAt, description, url } = item;
        return (
          <Card
            key={id}
            imageSource={imageSource}
            createdAt={createdAt}
            description={description}
            url={url}
          />
        );
      })}
    </div>
  );
}

export default CardList;
