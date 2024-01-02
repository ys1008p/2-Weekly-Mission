import PropTypes from 'prop-types';

import { CardItem } from './CardItem';

export const GridLayout = ({ folderData, filterData }) => {
  return (
    <div className='card-item-wrapper folder-link'>
      {folderData.map((item) => (
        <CardItem
          key={item.id}
          url={item.url}
          image_source={item.image_source}
          title={item.title}
          created_at={item.created_at}
          description={item.description}
          filterData={filterData}
        />
      ))}
    </div>
  );
};

GridLayout.propTypes = {
  folderData: PropTypes.array.isRequired,
  filterData: PropTypes.array,
};
