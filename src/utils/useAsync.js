import { useState, useEffect } from 'react';

export const useAsync = (asyncFunction) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState();

  const execute = async () => {
    setIsLoading(true);
    setIsError(null);
    setData(null);

    try {
      const res = await asyncFunction();
      if (!res.ok) throw new Error('DATA FETCHING ERROR!!');
      const initData = res?.data;
      setData(initData);
    } catch (e) {
      setIsError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, []);

  return { execute, isLoading, isError, data };
};
