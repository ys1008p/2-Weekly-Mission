import { createContext } from 'react';
import useSWR from 'swr';

import PropTypes from 'prop-types';
import { fetcher } from './fetcher';
import { INITIAL_FOLDER_DATA } from '../../store/type';

// 🚧 [SWR]Provider 작업중...
export const FolderContext = createContext();

const FolderProvider = ({ children, currentId }) => {
  const { data: storedData, error } = useSWR(['/api/users/1/links', currentId], fetcher, {
    initialData: INITIAL_FOLDER_DATA,
  });

  if (error) throw error;

  return (
    <FolderContext.Provider value={{ storedData }}>{children}</FolderContext.Provider>
  );
};

export default FolderProvider;

FolderProvider.propTypes = {
  children: PropTypes.node.isRequired,
  currentId: PropTypes.number,
};
