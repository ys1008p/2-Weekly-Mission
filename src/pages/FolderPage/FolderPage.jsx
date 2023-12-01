import styles from './FolderPage.module.css';
import SearchBar from '../../components/atoms/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import LinkInput from '../../components/atoms/LinkInput/LinkInput';
import FolderList from '../../components/atoms/FolderList/FolderList';
import Folder from '../../folder-mock.json';
import FolderTitle from '../../components/atoms/FolderTitle/FolderTitle';
import { useEffect, useState } from 'react';
import { getFolderData, getFolderListData } from '../../utils/api';

function FolderPage() {
  const { folder } = Folder;
  const [folderList, setFolderList] = useState();
  const [folderData, setFolderData] = useState();
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState('all');
  const [folderTitle, setFolderTitle] = useState('전체');

  const handleClick = (e) => {
    setSelectedId(e.target.id);
    setFolderTitle(e.target.textContent);
  };

  const handleLoad = async () => {
    try {
      const folderListResult = await getFolderListData();
      const folderContentResult = await getFolderData();
      setFolderList(folderListResult.data);
      setFolderData(folderContentResult.data);
      setIsLoadingSuccess(true);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
    console.log('폴더 목록을 가져왔습니다.');
    console.log('폴더 데이터를 가져왔습니다.');
  }, []);

  return (
    <main>
      <LinkInput />
      <article className={styles.article}>
        <SearchBar />
        {isLoadingSuccess && (
          <>
            <FolderList data={folderList} selectedId={selectedId} onClick={handleClick} />
            <FolderTitle title={folderTitle} selectedId={selectedId} />
            <CardList links={folderData} isSample={false} />
          </>
        )}
      </article>
    </main>
  );
}

export default FolderPage;
