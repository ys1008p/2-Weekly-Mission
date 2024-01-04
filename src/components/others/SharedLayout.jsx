import { useState, useEffect, useContext } from 'react';
import { getSampleUserFolder } from '../fetchApi';
import FolderBanner from '../others/FolderBanner';
import SearchBar from '../shared/SearchBar';
import { CardForShared } from '../shared/CardForShared';
import ContentLayout from './ContentLayout';
import { SearchContext } from '../../context/SearchContext';

export default function SharedLayout() {
  const { searchValue, selectedFolder } = useContext(SearchContext);

  const [filteredLinks, setFilteredLinks] = useState([]);
  const [sampleUserFolder, setSampleUserFolder] = useState({
    id: 0,
    name: '',
    owner: {
      id: 0,
      name: '',
      profileImageSource: '',
    },
    links: [],
  });

  function filterLinks(searchKeyword) {
    return sampleUserFolder.links.filter((link) =>
      Object.values(link).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }

  async function loadSampleFolder() {
    const { folder } = await getSampleUserFolder();
    setSampleUserFolder({ ...folder });
    setFilteredLinks(folder.links);
  }

  useEffect(() => {
    loadSampleFolder();
  }, []);

  return (
    <ContentLayout>
      <FolderBanner folder={sampleUserFolder} />
      <SearchBar filterLinks={filterLinks} setFilteredLinks={setFilteredLinks} />
      {searchValue && (
        <div className="searchResult">
          <span className="searchKeyword">{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      {sampleUserFolder.links.length ? (
        filterLinks(searchValue).length ? (
          <CardForShared links={filteredLinks} />
        ) : (
          <div className="noLinks"> 검색결과가 없습니다.</div>
        )
      ) : (
        <div className="noLinks">저장된 링크가 없습니다.</div>
      )}
    </ContentLayout>
  );
}
