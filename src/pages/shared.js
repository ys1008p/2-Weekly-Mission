import { Layout } from "../templates/Layout";
import { FolderInfo } from "../molecules/FolderInfo/index";
import { SharedPage } from "../organisms/Main/SharedPage/index";
import { CardList } from "../molecules/CardList/index";
import { ReadOnlyCard } from "../molecules/CardReadOnly/index";
import { SearchBar } from "../molecules/SearchBar/index";

import { useEffect, useState } from "react";
import { getCodeItInfo } from "../api/codeit";

const Shared = () => {
  const [profileImage, setProfileImage] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { folder } = await getCodeItInfo("sample/folder");
      const { name: ownerName, profileImageSource: profileImage } =
        folder.owner || {};
      const { name: folderName, links } = folder || {};

      setProfileImage(profileImage);
      setOwnerName(ownerName);
      setFolderName(folderName);
      setLinks(links);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <SharedPage
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default Shared;
