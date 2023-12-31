import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const ModalContextValue = {
    isModalOpened,
    toggleModal,
  };

  return <ModalContext.Provider value={ModalContextValue}>{children}</ModalContext.Provider>;
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export { ModalContextProvider, useModalContext };
