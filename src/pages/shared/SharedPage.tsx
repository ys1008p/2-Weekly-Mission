import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { useSetUser } from '@/contexts/UserContext';
import { getUser } from '@/pages/shared/api';

import CardList from '@/components/CardList';
import CommonPageLayout from '@/components/layout/CommonPageLayout';
import SearchBar from '@/components/SearchBar';

import { SharedFolder } from '@/types/shared';
import { getFolders } from './api';
import SharedHeader from './SharedHeader';
import './style.css';

function SharedPage() {
  const setUser = useSetUser();
  const [folder, setFolder] = useState<SharedFolder>({
    id: 0,
    name: '',
    owner: {
      id: 0,
      name: '',
      profileImageSource: '',
    },
    links: [],
    count: 0,
  });
  const [searchKeyword, setSearchKeyword] = useState('');
  const filteredLinks = useMemo(() => {
    return folder.links.filter(
      (link) =>
        link.url.includes(searchKeyword) ||
        (link.title && link.title.includes(searchKeyword)) ||
        (link.description && link.description.includes(searchKeyword)),
    );
  }, [folder, searchKeyword]);

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setSearchKeyword(keyword);
  };

  const handleClickRemoveSearchKeyword = () => {
    setSearchKeyword('');
  };

  useEffect(() => {
    async function fetchFolders() {
      const response = await getFolders();
      setFolder(response?.folder);
    }

    fetchFolders();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const response = await getUser();
      setUser(response);
    }

    fetchUser();
  }, []);

  return (
    <CommonPageLayout
      headerChildren={<SharedHeader folder={folder}></SharedHeader>}>
      <SearchBar
        placeholder='링크를 검색해 보세요.'
        className='main__content'
        keywordValue={searchKeyword}
        onChangeKeyword={handleChangeSearchKeyword}
        onClickRemove={handleClickRemoveSearchKeyword}
      />
      <CardList
        className='main__content shared__card-list'
        list={filteredLinks}
      />
    </CommonPageLayout>
  );
}

export default SharedPage;
