import './FolderPage.css';
import { useState, useEffect } from 'react';
import { getSampleUserFolder } from '../fetchApi';
import FolderBanner from '../others/FolderBanner/FolderBanner';
import SearchBar from '../shared/SearchBar/SearchBar';
import { CardForShared } from '../shared/CardForShared/CardForShared';

export default function FolderPage() {
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

  async function loadSampleFolder() {
    const { folder } = await getSampleUserFolder();
    setSampleUserFolder({ ...folder });
  }

  useEffect(() => {
    loadSampleFolder();
  }, []);

  return (
    <div>
      <FolderBanner folder={sampleUserFolder} />
      <SearchBar />
      <CardForShared links={sampleUserFolder.links} />
    </div>
  );
}
