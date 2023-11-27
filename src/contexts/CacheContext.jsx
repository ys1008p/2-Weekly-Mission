import React, { createContext, useState } from "react";

export const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const setCached = (key, data) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: data,
    }));
  };

  const getCached = (key) => {
    return cache[key];
  };

  const removeCached = (key) => {
    setCache((prevState) => {
      const newState = { ...prevState };
      delete newState[key];
      return newState;
    });
  };

  return (
    <CacheContext.Provider value={{ setCached, getCached, removeCached }}>
      {children}
    </CacheContext.Provider>
  );
};
