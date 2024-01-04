import { LinkProvider } from '../../contexts/LinkProvider';
import MyRouter from '../../Router';
import { SWRConfig } from 'swr';

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const res = await fetch(...args);
          return await res.json();
        },
      }}
    >
      <LinkProvider>
        <MyRouter />
      </LinkProvider>
    </SWRConfig>
  );
};

export default App;
