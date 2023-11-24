import folderData from './folder-mock.json';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FolderInfo from './components/FolderInfo/FolderInfo';
import SearchBar from './components/atoms/SearchBar/SearchBar';
function App() {
  const { folder } = folderData;
  const { owner, links } = folder;

  return (
    <div className="App">
      <NavBar />
      <FolderInfo owner={owner} folderName={folder.name} />
      <div>
        <SearchBar />
        <div>
          <ul>
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <img src={item.imageSource} alt="링크 썸네일" />
                    <div>
                      <div>{item.createdAt}</div>
                      <div>{item.description}</div>
                      <div>{item.createdAt}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
