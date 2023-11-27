import { createContext, useState } from "react";

const initialUser = {
  id: 0,
  name: "",
  email: "",
  profileImageSource: "",
};

export const UserContext = createContext(initialUser);
export const UserActionContext = createContext({ setUser: () => {} });

export default function UserProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const userAction = {
    setUser,
  };

  return (
    <UserContext.Provider value={user}>
      <UserActionContext.Provider value={userAction}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
}
