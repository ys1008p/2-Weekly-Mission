import { useEffect, useState } from 'react';

export default function useGetData(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      setError(undefined);
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/sample/${url}`
      );
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

    return () => {
      console.log('clean up');
    };
  }, []);

  return [loading, error, data];
}
