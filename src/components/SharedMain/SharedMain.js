import './SharedMain.css';
import FolderInfo from '../FolderInfo/FolderInfo';
import SearchBar from '../atoms/SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import { getFolderData } from '../../utils/api';
import { useEffect, useState } from 'react';

export default function SharedMain() {
  const [folderData, setFolderData] = useState();
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);

  const handleLoadFolderData = async () => {
    let result;
    try {
      result = await getFolderData();
    } catch (error) {
      console.log(error);
    }

    const { folder } = result;
    setFolderData(folder);
    setIsLoadingSuccess(true);
    console.log('폴더 데이터를 가져왔습니다.');
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  return isLoadingSuccess ? (
    <main>
      <FolderInfo owner={folderData.owner} folderName={folderData.name} />
      <article className="test">
        <SearchBar />
        <CardList links={folderData.links} />
      </article>
    </main>
  ) : null;
}
