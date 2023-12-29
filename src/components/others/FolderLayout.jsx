import './FolderLayout.css';
import AddLinkBar from '../shared/AddLinkBar';
import SearchBar from '../shared/SearchBar';
import Filtering from '../others/Filtering';
import FolderEditButtons from '../others/FolderEditButtons';
import { Cards } from '../shared/Cards';
import FloatingActionButton from '../shared/FloatingActionButton';
import { useState, useEffect, useContext } from 'react';
import { getFolder, getLinks } from '../fetchApi';
import { SearchContext } from '../../context/SearchContext';
import ContentLayout from './ContentLayout';

export default function FolderLayout() {
  const { searchValue, selectedFolder } = useContext(SearchContext);
  const [folder, setFolder] = useState([]);
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);

  function filterLinks(searchKeyword) {
    return links.filter((link) =>
      Object.values(link).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }

  async function loadFolder() {
    const { data } = await getFolder();
    setFolder(data);
  }

  async function loadLinks() {
    const { data } = await getLinks(selectedFolder.id);
    setLinks(data);
    setFilteredLinks(data);
  }

  useEffect(() => {
    loadFolder();
  }, []);

  useEffect(() => {
    loadLinks();
  }, [selectedFolder.id, selectedFolder.name]);

  return (
    <ContentLayout>
      <AddLinkBar />
      <SearchBar filterLinks={filterLinks} setFilteredLinks={setFilteredLinks} />
      {searchValue && (
        <div className="searchResult">
          <span className="searchKeyword">{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      <Filtering chosenFolderId={selectedFolder.id} folder={folder} />
      <div className="folderDescription">
        <h1 className="folderName">{selectedFolder.name}</h1>
        {selectedFolder.id && <FolderEditButtons className="folderEditButtons" />}
      </div>
      {links.length ? <Cards links={filteredLinks} /> : <div className="noLinks">저장된 링크가 없습니다.</div>}
      <FloatingActionButton />
    </ContentLayout>
  );
}
