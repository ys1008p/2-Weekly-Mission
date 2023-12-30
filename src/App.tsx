import { useSetAuth } from '@/contexts/AuthContexts';
import useAsync from '@/hooks/useAsync';
import Folder from '@/pages/Folder';
import Shared from '@/pages/Shared';
import { fetchGetRequest } from '@/utils/api';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const setAuth = useSetAuth();
  const { wrappedFunction: fetchAuthData } = useAsync(fetchGetRequest);

  useEffect(() => {
    const initAuthData = async () => {
      const data = await fetchAuthData('/api/users/1');

      setAuth(data?.data[0]);
    };

    void initAuthData();
  }, [fetchAuthData, setAuth]);

  return (
    <Routes>
      <Route path="/" element={<Shared />} />
      <Route path="/shared" element={<Shared />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  );
};

export default App;
