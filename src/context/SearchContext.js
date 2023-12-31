import React, { createContext, useState } from 'react';

// folder page의 뷰를 결정하는 두가지 인자를 context로 관리
const viewParams = {
  searchValue: '',
  selectedFolder: { id: undefined, name: '' },
  folderList: [],
  linkList: [],
};

const SearchContext = createContext(viewParams);

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(viewParams.searchValue);
  const [selectedFolder, setSelectedFolder] = useState(viewParams.selectedFolder);
  const [folderList, setFolderList] = useState(viewParams.folderList);
  const [linkList, setLinkList] = useState(viewParams.linkList);

  const contextValue = {
    searchValue,
    setSearchValue,
    selectedFolder,
    setSelectedFolder,
    folderList,
    setFolderList,
    linkList,
    setLinkList,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchContextProvider };
