import { useEffect, useState } from 'react';

export default function useGetData(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`https://bootcamp-api.codeit.kr/api/sample/${url}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('fetch 실패');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      //todo: 여기서 발생한 에러는 어떻게 처리..?
      .catch((err) => setError('에러 발생'))
      .finally(() => setLoading(false));

    // todo: 여기서 어떤 처리를 해야 알맞을까..?
    return () => {
      console.log('clean up');
    };
  }, [url]);
  return [loading, error, data];
}
