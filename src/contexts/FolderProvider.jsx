import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLinklist } from '../apis/folderList';
import { INITIAL_FOLDER_DATA } from '../store/type';

export const FolderContext = createContext();

export const FolderProvider = ({ children, currentId }) => {
  const [storedData, setStoredData] = useState(INITIAL_FOLDER_DATA);

  useEffect(() => {
    const getData = async () => {
      try {
        const initData = await getLinklist(currentId);
        setStoredData(initData);
      } catch (e) {
        console.error('ERROR FETCHING FOLDER DATA: ', e);
      }
    };

    getData();
  }, [currentId]);

  return (
    <FolderContext.Provider value={{ storedData, setStoredData }}>
      {children}
    </FolderContext.Provider>
  );
};

FolderProvider.propTypes = {
  children: PropTypes.node.isRequired,
  currentId: PropTypes.number,
};
