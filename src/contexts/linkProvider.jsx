import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getFolderList } from '../apis/folder';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [storedLink, setStoredLink] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const initData = await getFolderList();
        setStoredLink(initData);
      } catch (e) {
        console.error('ERROR FETCHING FOLDER DATA: ', e);
      }
    };

    getData();
  }, []);

  return (
    <LinkContext.Provider value={{ storedLink, setStoredLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useStoredLink = () => {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error('Error: LinkProvider 내부에서 사용하세요.');
  }
  return context.storedLink;
};

export const useSetStoredLink = () => {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error('Error: LinkProvider 내부에서 사용하세요.');
  }

  return context.setStoredLink;
};

LinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
