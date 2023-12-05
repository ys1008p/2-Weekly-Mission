import { useEffect, useState } from 'react';

export default function useGetData(url, dependency) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError('네트워크 통신 실패');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [dependency]);

  return [loading, error, data];
}
