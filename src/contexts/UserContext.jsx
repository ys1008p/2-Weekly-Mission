import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('반드시 UserProvider 안에서 사용해야 합니다.');
  }

  return context.user;
}

function useSetUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('반드시 UserProvider 안에서 사용해야 합니다.');
  }

  return context.setUser;
}

export { UserProvider, useSetUser, useUser };
