import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useFetcher } from "hooks/useFetcher";
import { getUser } from "utils/api";

interface AuthContextType<T> {
  authData: T | null;
  login: () => void;
  isLogin: boolean;
}

const authContextDefaultValues: AuthContextType<any> = {
  authData: null,
  login: () => {},
  isLogin: false,
};

export const AuthContext = createContext<AuthContextType<any>>(authContextDefaultValues);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = <T extends {}>({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState<T | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { data } = useFetcher("auth", getUser);

  const login = () => {
    setAuthData(data as T);
    setIsLogin(true);
  };

  useEffect(() => {
    if (authData) setIsLogin(true);
  }, [authData]);

  return <AuthContext.Provider value={{ authData, login, isLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = <T extends {}>() => {
  return useContext<AuthContextType<T>>(AuthContext);
};
