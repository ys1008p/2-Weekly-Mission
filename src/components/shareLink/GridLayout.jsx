import { CardItem } from './CardItem';
import { LinkContext } from '../../contexts/LinkProvider';
import { useStoredData } from '../../utils/useStoredData';
import { IMAGE_URL } from '../../store/common';

export const GridLayout = () => {
  const { storedData } = useStoredData(LinkContext);
  const { links } = storedData;
  const { empty } = IMAGE_URL;

  return (
    <div className='cardItemWrapper share-link'>
      {links.map((item) => (
        <CardItem
          key={item.id}
          createdAt={item.createdAt}
          url={item.url}
          title={item.title}
          description={item.description}
          imageSource={item.imageSource || empty.url}
        />
      ))}
    </div>
  );
};
