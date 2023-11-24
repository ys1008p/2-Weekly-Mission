import folderData from './folder-mock.json';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FolderInfo from './components/FolderInfo/FolderInfo';
import SearchBar from './components/atoms/SearchBar/SearchBar';
import './App.css';
import CardList from './components/CardList/CardList';

function App() {
  const { folder } = folderData;
  const { owner, links } = folder;

  return (
    <div className="App">
      <NavBar />
      <FolderInfo owner={owner} folderName={folder.name} />
      <article className="test">
        <SearchBar />
        <CardList links={links} />
      </article>
      <Footer />
    </div>
  );
}

export default App;
