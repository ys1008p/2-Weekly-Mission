import { useSetAuth } from '@/contexts/AuthContexts';
import useAsync from '@/hooks/useAsync';
import Folder from '@/pages/Folder';
import Shared from '@/pages/Shared';
import { fetchGetRequest } from '@/utils/api';
import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const setAuth = useSetAuth();
  const [loading, error, fetchAuthData] = useAsync(fetchGetRequest);

  const initAuthData = useCallback(async () => {
    const data = await fetchAuthData('/api/sample/user');

    setAuth(data);
  }, [fetchAuthData, setAuth]);

  useEffect(() => {
    void initAuthData();
  }, [initAuthData]);

  return (
    <Routes>
      <Route path="/" element={<Shared />} />
      <Route path="/shared" element={<Shared />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  );
};

export default App;
