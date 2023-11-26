import { LinkProvider } from './contexts/linkProvider';
import MyRouter from './Router';

const App = () => {
  return (
    <LinkProvider>
      <MyRouter />
    </LinkProvider>
  );
};

export default App;
