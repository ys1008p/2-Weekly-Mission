import styles from './FolderMain.module.css';
import SearchBar from '../atoms/SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import LinkInput from '../atoms/LinkInput/LinkInput';
import FolderList from '../atoms/FolderList/FolderList';
import Folder from '../../folder-mock.json';
import FolderData from '../../list-mock.json';
function FolderMain() {
  const { folder } = Folder;
  const { data } = FolderData;

  return (
    <main>
      <LinkInput />
      <article className={styles.article}>
        <SearchBar />
        <FolderList data={data} />
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
