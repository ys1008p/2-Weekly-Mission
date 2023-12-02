import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

function LayoutStatusProvider({ children }) {
  const [isGnbFixed, setIsGnbFixed] = useState(true);

  return (
    <LayoutContext.Provider value={{ isGnbFixed, setIsGnbFixed }}>
      {children}
    </LayoutContext.Provider>
  );
}

function useIsGnbFixed() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('반드시 LayoutStatusProvider 안에서 사용해야 합니다.');
  }

  return context.isGnbFixed;
}

function useSetIsGnbFixed() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('반드시 LayoutStatusProvider 안에서 사용해야 합니다.');
  }

  return context.setIsGnbFixed;
}

export { LayoutStatusProvider, useIsGnbFixed, useSetIsGnbFixed };
