import { useEffect, useState } from "react";
import { getApiInfo } from "../api";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import useAsync from "../hooks/useAsync";

const apiSettings = {
  endpoints: {
    profile: "/api/sample/user",
    folder: "/api/sample/folder",
  },
  errorMessages: {
    profile: "유저 정보를 불러오는데 실패했습니다.",
    folder: "폴더를 불러오는데 실패했습니다.",
  },
};

function App() {
  const [folder, setFolder] = useState({});
  const [links, setLinks] = useState([]);
  const [isFolderLoading, FolderError, getFolderAsync] = useAsync(getApiInfo);

  const loadFolder = async () => {
    const result = await getFolderAsync(
      apiSettings.endpoints.folder,
      apiSettings.errorMessages.folder
    );
    if (!result) return;

    const { folder } = result;
    setFolder(folder);
    setLinks(folder.links);
  };

  useEffect(() => {
    loadFolder();
  }, []);
  console.log(isFolderLoading);

  return (
    <>
      <Navigation />
      {!isFolderLoading && <Header folder={folder} />}
      <Main links={links} />
      <Footer />
    </>
  );
}

export default App;
