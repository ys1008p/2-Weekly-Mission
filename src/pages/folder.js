import { useState, useEffect } from "react";
import { CardList } from "../molecules/CardList";
import { SearchBar } from "../molecules/SearchBar";
import { FolderPage } from "../organisms/Main/FolderPage/index";
import { Layout } from "../templates/Layout";
import { getCodeItInfo } from "../api/codeit";
import { ReadOnlyCard } from "../molecules/CardReadOnly";
import { LinkAddBar } from "../molecules/LinkAddBar/index";
import { FolderNavList } from "../molecules/FolderNavList/index";
import { FolderNavClick } from "../molecules/FolderNavClick/index";
import { FolderFeature } from "../molecules/FolderFeature";
// import { Navigate } from "react-router-dom";

function Folder() {
  const [folderLink, setFolderLink] = useState([]);
  const [folderNav, setFolderNav] = useState([]);
  const [navData, setNavData] = useState();

  useEffect(() => {
    const folderLinks = async () => {
      const { data } = await getCodeItInfo(`users/1/links`);
      setFolderLink(data);
    };
    folderLinks();

    const folderList = async () => {
      const { data } = await getCodeItInfo(`users/1/folders`);
      setFolderNav(data);
    };
    folderList();
  }, []);

  // 버튼 클릭 시
  const onFolderClick = (id) => {
    const folderNavInfo = async () => {
      const { data } = await getCodeItInfo(`users/1/links?folderId=${id}`);
      setNavData(data);
    };
    folderNavInfo();
  };

  return (
    <Layout>
      <FolderPage
        linkAddBar={<LinkAddBar />}
        searchBar={<SearchBar />}
        folderFeature={<FolderFeature />}
        folderNavList={
          <FolderNavList>
            {folderNav?.map((data) => (
              <FolderNavClick
                key={data.id}
                {...data}
                onFolderClick={onFolderClick}
              />
            ))}
          </FolderNavList>
        }
        cardList={
          <CardList>
            {navData?.map((data) => (
              <ReadOnlyCard key={data?.id} {...data} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}

export default Folder;
