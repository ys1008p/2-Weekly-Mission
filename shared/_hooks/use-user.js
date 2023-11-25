import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);
export const UserActionContext = createContext(null);

export const useUserProvider = () => {
  const [user, setUser] = useState(null);
  const userAction = {
    setUser,
  };

  return [user, userAction];
};

export const useUser = () => {
  const user = useContext(UserContext);

  return user;
};

export const useUserAction = () => {
  const userAction = useContext(UserActionContext);

  return userAction;
};
