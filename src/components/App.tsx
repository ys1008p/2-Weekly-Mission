import '@/styles/App.css';

import { useSetAuth } from '@/contexts/AuthContexts';
import Shared from '@/pages/Shared';
import { fetchGetRequest } from '@/utils/api';
import { useCallback, useEffect } from 'react';

const App = () => {
  const setUser = useSetAuth();

  const getUserProfile = useCallback(async () => {
    let result;
    try {
      result = await fetchGetRequest('/api/sample/user');
    } catch (error) {
      return;
    }

    setUser(result);
  }, [setUser]);

  useEffect(() => {
    void getUserProfile();
  }, [getUserProfile]);

  return <Shared />;
};

export default App;
