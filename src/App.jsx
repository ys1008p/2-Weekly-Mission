import { LinkProvider } from './contexts/LinkProvider';
import { FolderProvider } from './contexts/FolderProvider';
import MyRouter from './Router';

const App = () => {
  return (
    <FolderProvider>
      <LinkProvider>
        <MyRouter />
      </LinkProvider>
    </FolderProvider>
  );
};

export default App;
