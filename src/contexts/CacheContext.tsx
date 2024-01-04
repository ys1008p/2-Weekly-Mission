import React, { createContext, useState, ReactNode } from "react";

// CacheContext의 타입을 정의합니다.
interface CacheContextType<T> {
  setCached: (key: string, data: T) => void;
  getCached: (key: string) => T | undefined;
  removeCached: (key: string) => void;
}

export const CacheContext = createContext<CacheContextType<any>>({
  setCached: () => {},
  getCached: () => undefined,
  removeCached: () => {},
});

interface CacheProviderProps {
  children: ReactNode;
}

export const CacheProvider = <T extends {}>({ children }: CacheProviderProps) => {
  const [cache, setCache] = useState<Record<string, T>>({});

  const setCached = (key: string, data: T) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: data,
    }));
  };

  const getCached = (key: string): T | undefined => {
    return cache[key];
  };

  const removeCached = (key: string) => {
    setCache((prevState) => {
      const newState = { ...prevState };
      delete newState[key];
      return newState;
    });
  };

  return <CacheContext.Provider value={{ setCached, getCached, removeCached }}>{children}</CacheContext.Provider>;
};
