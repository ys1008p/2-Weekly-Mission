import { CacheContext } from "contexts/CacheContext";
import { useEffect, useState, useCallback, useContext } from "react";
import { END_POINT } from "utils/constants";

export const useApi = (key, url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setCached, getCached } = useContext(CacheContext);
  // GET 요청 처리
  const fetcher = useCallback(async () => {
    setIsLoading(true);
    const cached = getCached(key);
    if (cached) {
      setIsLoading(false);
      return cached;
    }
    try {
      const res = await fetch(`${END_POINT}${url}`);
      if (!res.ok) throw new Error(res.status);
      const json = await res.json();
      setData(json);
      setError(null);
      setCached(json);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [getCached, key, setCached, url]);

  // POST 요청 처리
  // body에 값이 존재할 때만 mutation
  // 미완성
  // 콜백으로 넘겨줘야할듯 함.
  const mutation = useCallback(
    async (body) => {
      setIsLoading(true);
      try {
        const res = await fetch(`${END_POINT}${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(res.status);
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { data, error, isLoading, mutation };
};
