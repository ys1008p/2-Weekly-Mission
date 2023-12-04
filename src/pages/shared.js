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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCodeItInfo(`users/1/links`);
      setData(data);

      const { folder } = await getCodeItInfo(`sample/folder`);

      const { name: ownerName, profileImageSource: profileImage } =
        folder.owner || {};
      const { name: folderName } = folder || {};

      setProfileImage(profileImage);
      setOwnerName(ownerName);
      setFolderName(folderName);
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
            {data?.map((data) => (
              <ReadOnlyCard key={data?.id} {...data} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default Shared;
