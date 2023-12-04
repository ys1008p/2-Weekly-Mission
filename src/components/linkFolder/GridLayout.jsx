import { CardItem } from './CardItem';
import PropTypes from 'prop-types';

export const GridLayout = ({ folderData }) => {
  return (
    <div className='cardItemWrapper folder-link'>
      {folderData.map((item) => (
        <CardItem
          key={item.id}
          url={item.url}
          image_source={item.image_source}
          title={item.title}
          created_at={item.created_at}
          description={item.description}
        />
      ))}
    </div>
  );
};

GridLayout.propTypes = {
  folderData: PropTypes.array.isRequired,
};
