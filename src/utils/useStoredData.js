import { useContext } from 'react';

export const useStoredData = (contextType) => {
  const context = useContext(contextType);

  if (!context) {
    throw new Error('[PROVIDER ERROR]Provider 내부에서 사용하세요.');
  }
  return { storedData: context.storedData, currentId: context.currentId };
};

export const useSetStoredData = (contextType) => {
  const context = useContext(contextType);

  if (!context) {
    throw new Error('[PROVIDER ERROR]Provider 내부에서 사용하세요.');
  }

  return { setStoredData: context.setStoredData, setCurrentId: context.setCurrentId };
};
