import './FolderMain.css';
import SearchBar from '../atoms/SearchBar/SearchBar';
import LinkIcon from '../../assets/link.svg';
import CardList from '../CardList/CardList';
import Folder from '../../folder-mock.json';
import FolderList from '../../list-mock.json';
function FolderMain() {
  const { folder } = Folder;
  const { data } = FolderList;

  return (
    <main>
      <div className="LinkInput">
        <form className="LinkInput-form">
          <img src={LinkIcon} alt="링크" className="LinkInput-icon" />
          <input type="text" placeholder="링크를 추가해 보세요" className="LinkInput-input" />
          <button type="button" className="Button">
            추가하기
          </button>
        </form>
      </div>

      <article className="test">
        <SearchBar />
        <div>
          <ul>
            {data.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
          <div>+</div>
        </div>
        <div>
          <div>유용한 글</div>
          <div>
            <div>
              <img src="" />
              <span>공유</span>
            </div>
            <div>
              <img src="" />
              <span>이름 변경</span>
            </div>
            <div>
              <img src="" />
              <span>삭제</span>
            </div>
          </div>
        </div>
        <CardList links={folder.links} />
      </article>
    </main>
  );
}

export default FolderMain;
