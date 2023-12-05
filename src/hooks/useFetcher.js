import { CacheContext } from "contexts/CacheContext";
import { useEffect, useState, useContext, useCallback } from "react";
import { MAX_RETRY_COUNT } from "utils/constants";

export const useFetcher = (key, callback, props, retry = 0) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const [errorCount, setErrorCount] = useState(0);
  const { setCached, getCached, removeCached } = useContext(CacheContext);

  // GET 요청 처리
  const fetcher = useCallback(
    (refetch = false) => {
      setState((prevState) => ({ ...prevState, loading: true }));
      //refetch 시도시 cache 삭제
      if (refetch) {
        removeCached(key);
      } else {
        const cached = getCached(key);
        if (cached) {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            data: cached,
          }));
          return;
        }
      }

      callback()
        .then((response) => {
          if (!response) throw new Error("response Error");
          setState({ loading: false, data: response, error: null });
          setCached(key, response);
          setErrorCount(0);
        })
        .catch((error) => {
          setState((prevState) => ({ ...prevState, loading: false, error }));
          setErrorCount((prevCount) => prevCount + 1);
        });
    },
    [callback, removeCached, key, getCached, setCached]
  );

  //최대 요청 횟수만큼 요쳥 시도
  useEffect(() => {
    if (errorCount > 0 && errorCount < (retry || MAX_RETRY_COUNT)) {
      console.log("retry...", errorCount);
      const timeoutId = setTimeout(() => {
        fetcher(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorCount, fetcher, retry]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { ...state, refetch: () => fetcher(true) };
};
