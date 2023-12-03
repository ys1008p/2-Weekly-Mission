import { LinkProvider } from './contexts/LinkProvider';
import MyRouter from './Router';

const App = () => {
  return (
    <LinkProvider>
      <MyRouter />
    </LinkProvider>
  );
};

export default App;
