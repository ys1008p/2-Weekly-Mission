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
  // 추가해야할 것. 재요청(refetch), 요청 반복(interval)? 
  const fetcher = () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    const cached = getCached(key);
    if (cached) {
      setState({ ...state, loading: false, data: cached });
      return;
    }
    callback()
      .then((res) => {
        if (!res) throw new Error("response Error");
        setState({ loading: false, data: res, error: null });
        setCached(key, res);
      })
      .catch((e) => {
        setState({ loading: false, data: null, error: e });
      });
  };

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
