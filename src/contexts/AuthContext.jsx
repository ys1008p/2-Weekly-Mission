import { useFetcher } from "hooks/useFetcher";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useFetcher("auth", getUser);

  const login = () => {
    setAuthData(data);
    setIsLogin(true);
  };

  useEffect(() => {
    if (authData) setIsLogin(true);
  }, [authData]);

  return (
    <AuthContext.Provider value={{ authData, login, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
