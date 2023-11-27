import { CacheContext } from "contexts/CacheContext";
import { useEffect, useState, useContext } from "react";

const MAX_RETRY_COUNT = 3;

export const useFetcher = (key, callback, retry = 0) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const [errorCount, setErrorCount] = useState(0);
  const { setCached, getCached, removeCached } = useContext(CacheContext);

  // GET 요청 처리

  const fetcher = (refetch = false) => {
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
  };

  //최대 요청 횟수만큼 요쳥 시도
  useEffect(() => {
    if (errorCount > 0 && errorCount < MAX_RETRY_COUNT) {
      console.log("retry...", errorCount);
      const timeoutId = setTimeout(() => {
        fetcher(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorCount]);

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, refetch: () => fetcher(true) };
};
