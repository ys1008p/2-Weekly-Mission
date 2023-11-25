import { useStoredLink } from '../../contexts/linkProvider';
import { importImg } from '../../store/common';
import { CardItem } from './CardItem';

export const GridLayout = () => {
  const linkData = useStoredLink();

  const { links = [] } = linkData;
  const { share } = importImg;

  return (
    <div className='cardItemWrapper'>
      {links.map((item) => (
        <CardItem
          key={item.id}
          createdAt={item.createdAt}
          url={item.url}
          title={item.title}
          description={item.description}
          imageSource={item.imageSource || share.emptyThumbnail}
        />
      ))}
    </div>
  );
};
