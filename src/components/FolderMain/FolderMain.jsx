import './FolderMain.css';
import SearchBar from '../atoms/SearchBar/SearchBar';

function FolderMain() {
  return (
    <main>
      <div>
        <form>
          <input type="text" />
          <button>추가하기</button>
        </form>
      </div>
      <div>
        <SearchBar />
      </div>
    </main>
  );
}

export default FolderMain;
