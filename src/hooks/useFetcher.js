import { CacheContext } from "contexts/CacheContext";
import { useEffect, useState, useContext } from "react";

export const useFetcher = (key, callback) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const { setCached, getCached } = useContext(CacheContext);

  // GET 요청 처리
  // 추가해야할 것. 요청 반복(interval) n회 제한
  const fetcher = () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    const cached = getCached(key);
    if (cached) {
      setState({ ...state, loading: false, data: cached });
      return;
    }
    callback()
      .then((response) => {
        if (!response) throw new Error("response Error");
        setState({ loading: false, data: response, error: null });
        setCached(key, response);
      })
      .catch((e) => {
        setState({ loading: false, data: null, error: e });
      });
  };

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, refetch: fetcher };
};
