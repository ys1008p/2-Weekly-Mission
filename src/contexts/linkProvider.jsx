import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFolderList } from '../apis/folderList';
import { INITIAL_LINK_DATA } from '../store/type';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(INITIAL_LINK_DATA);

  useEffect(() => {
    const getData = async () => {
      try {
        const initData = await getFolderList();
        setStoredData(initData);
      } catch (e) {
        console.error('ERROR FETCHING FOLDER DATA: ', e);
      }
    };

    getData();
  }, []);

  return (
    <LinkContext.Provider value={{ storedData, setStoredData }}>
      {children}
    </LinkContext.Provider>
  );
};

LinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
