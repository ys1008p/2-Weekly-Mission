import { useSetAuth } from '@/contexts/AuthContexts';
import useAsync from '@/hooks/useAsync';
import Shared from '@/pages/Shared';
import { fetchGetRequest } from '@/utils/api';
import { useCallback, useEffect } from 'react';

const App = () => {
  const setUser = useSetAuth();
  const [loading, error, fetchUserData] = useAsync(fetchGetRequest);

  const initUserData = useCallback(async () => {
    const data = await fetchUserData('/api/sample/user');

    setUser(data);
  }, [fetchUserData, setUser]);

  useEffect(() => {
    void initUserData();
  }, [initUserData]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>유저 정보를 불러올 수 없습니다</p>
      ) : (
        <Shared />
      )}
    </>
  );
};

export default App;
