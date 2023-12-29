import React, { createContext, useState } from 'react';

// folder page의 뷰를 결정하는 두가지 인자를 context로 관리
const viewParams = {
  searchValue: '',
  selectedFoler: { id: 0, name: '' },
};

const SearchContext = createContext(viewParams);

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(viewParams.searchValue);
  const [selectedFolder, setSelectedFolder] = useState(viewParams.selectedFoler);

  const contextValue = {
    searchValue,
    setSearchValue,
    selectedFolder,
    setSelectedFolder,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchContextProvider };
