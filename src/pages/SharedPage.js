import React, { createContext, useEffect, useState} from "react";
import SharedPageTemplate from "../components/template/Shared";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext(null);

const SharedPage = () => {
  const {loading, error, data} = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const [folderOwnerData, setFolderOwnerData] = useState({});
  const [folderLinksData, setFolderLinksData] = useState([]);
  useEffect(() => {
    if (!loading && !error && data) {
      setFolderOwnerData({
        name: data.folder.name,
        owner: data.folder.owner.name,
        profile: data.folder.owner.profileImageSource,
      });
      setFolderLinksData(data.folder.links
      );
      console.log("loading변경 감지로 state업데이트됨")
    }
  }, [loading]);

  return (
    <DataContext.Provider value={{ folderOwnerData, folderLinksData }}>
      <SharedPageTemplate></SharedPageTemplate>
    </DataContext.Provider>
  );
};

export default SharedPage;
