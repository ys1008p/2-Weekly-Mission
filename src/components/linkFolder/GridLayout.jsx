import { CardItem } from './CardItem';
import PropTypes from 'prop-types';

export const GridLayout = ({ data }) => {
  return (
    <div className='cardItemWrapper folder-link'>
      {data.map((item) => (
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
  data: PropTypes.array.isRequired,
};
