import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(false);
export const AuthActionContext = createContext({
  login: () => {},
  logout: () => {},
});

export const useAuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const authAction = {
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
  };

  return [isLoggedIn, authAction];
};

export const useAuth = () => {
  const isLoggedIn = useContext(AuthContext);

  return isLoggedIn;
};

export const useAuthAction = () => {
  const authAction = useContext(AuthActionContext);

  return authAction;
};
