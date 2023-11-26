import '@/styles/Shared.css';

import { useGetRequest } from '@/hooks/useRequest';
import { useEffect, useState } from 'react';

import Banner from '@/components/banner/Banner';
import CardContainer from '@/components/card/CardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Shared = () => {
  const [folderName, setFolderName] = useState('');
  const [owner, setOwner] = useState({ name: '', profileImageSource: '' });
  const [items, setItems] = useState([]);

  const getFolderData = async () => {
    let result;
    try {
      result = await useGetRequest('/api/sample/folder');
    } catch (error) {
      return;
    }

    const { name, owner, links } = result.folder;
    setFolderName(name);
    setOwner(owner);
    setItems(links);
  };

  useEffect(() => {
    getFolderData().catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner folder={folderName} owner={owner} />
        <div className="wrapper">
          <section className="container">
            <SearchBar placeholder="링크를 검색해 보세요." />
            <CardContainer items={items} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shared;
