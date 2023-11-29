import './style.css';

import Card from '../Card/Card';

function CardList({ className, list = [] }) {
  const classNames = `card-list ${className}`;
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
