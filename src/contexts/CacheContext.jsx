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

  return (
    <CacheContext.Provider value={{ setCached, getCached }}>
      {children}
    </CacheContext.Provider>
  );
};
