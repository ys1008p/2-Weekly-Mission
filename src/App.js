import folderData from './folder-mock.json';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import SharedMain from './components/SharedMain/SharedMain';

function App() {
  const { folder } = folderData;

  return (
    <div className="App">
      <NavBar />
      <SharedMain folder={folder} />
      <Footer />
    </div>
  );
}

export default App;
