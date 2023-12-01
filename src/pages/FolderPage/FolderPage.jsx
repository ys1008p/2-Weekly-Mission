import styles from './FolderPage.module.css';
import SearchBar from '../../components/atoms/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import LinkInput from '../../components/atoms/LinkInput/LinkInput';
import FolderList from '../../components/atoms/FolderList/FolderList';
import FolderTitle from '../../components/atoms/FolderTitle/FolderTitle';
import { useEffect, useState } from 'react';
import { getFolderData, getFolderListData } from '../../utils/api';

function FolderPage() {
  const [folderList, setFolderList] = useState(); // 폴더 목록 데이터
  const [folderData, setFolderData] = useState(); // 저장된 폴더의 링크 데이터
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState('all');
  const [folderTitle, setFolderTitle] = useState('전체');

  const handleClick = (e) => {
    setSelectedId(e.target.id);
    setFolderTitle(e.target.textContent);
  };

  const handleLoad = async (selectedId) => {
    try {
      const folderListResult = await getFolderListData();
      const folderContentResult = await getFolderData(selectedId);
      setFolderList(folderListResult.data);
      setFolderData(folderContentResult.data);

      setIsLoadingSuccess(true);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad(selectedId);
    console.log('폴더 목록을 가져왔습니다.');
    console.log('폴더 데이터를 가져왔습니다.');
  }, [selectedId]);

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
            {!folderData.length && <div className={styles.noLinks}>저장된 링크가 없습니다.</div>}
          </>
        )}
      </article>
    </main>
  );
}

export default FolderPage;
