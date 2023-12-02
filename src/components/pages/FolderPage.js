// import Main from "../main/Main.js";
import { Footer } from "../footer/Footer.js";
import AddLink from "../header/AddLink.js";
import Header from "../header/Header.js";
import { useEffect, useState } from "react";
import { getData } from "../api/api";
import Folders from "../main/Folders.js";
import SearchBar from "../main/SearchBar.js";
import CardWrapper from "../main/CardWrapper.js";
import "../main/Main.css";
import Option from "../main/Option.js";
function FolderPage() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    created_at: "",
    name: "",
    image_source: "",
    email: "",
    auth_id: "",
  });

  const [links, setLinks] = useState([]);
  const [folderLists, setFolderLists] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [currentFolderName, setCurrentFolderName] = useState("");

  const getUserData = async () => {
    try {
      const result = await getData("users/1");
      const { id, created_at, name, image_source, email, auth_id } =
        result.data[0];

      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        created_at: created_at,
        name: name,
        image_source: image_source,
        email: email,
        auth_id: auth_id,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalLinksData = async () => {
    try {
      const result = await getData("users/1/links");
      const { data } = result;
      const datas = data.map((link) => ({
        ...link,
        createdAt: link.created_at,
        imageSource: link.image_source,
      }));
      setLinks(datas);
    } catch (e) {
      console.log(`Folderpage의 getLinksData에서 ${e} 발생`);
    }
  };

  const getFolderLists = async () => {
    try {
      const result = await getData("users/1/folders");
      const { data } = result;
      console.log(data);
      data.unshift({ name: "전체" });
      setFolderLists(data);
    } catch (e) {
      console.log(`Folderpage의 getFolderLists에서 ${e} 발생`);
    }
  };

  const getFolder = async () => {
    try {
      console.log("id", currentFolderId);
      const result = await getData(`users/1/links?folderId=${currentFolderId}`);
      console.log("특정 폴더", result);
      const { data } = result;
      console.log("data", data);
      const datas = data.map((link) => ({
        ...link,
        createdAt: link.created_at,
        imageSource: link.image_source,
      }));
      setLinks(datas);
    } catch (e) {
      console.log(`Folderpage의 handleFolderClick의 getFolder에서 ${e} 발생`);
    }
  };
  const handleFolderClick = (e) => {
    setCurrentFolderName(e.target.textContent);
    if (e.target.textContent === "전체") {
      getTotalLinksData();
      return;
    }
    const clikedFolder = folderLists.filter(
      (folder) => folder.name === e.target.textContent
    );
    setCurrentFolderId(clikedFolder[0].id);
  };
  useEffect(() => {
    getUserData();
    getTotalLinksData();
    getFolderLists();
  }, []);

  useEffect(() => {
    getFolder();
  }, [currentFolderId]);
  return (
    <>
      <Header profileDatas={profileDatas} />
      <AddLink />
      <div className="main-wrapper">
        <SearchBar />
        <div>
          {folderLists ? (
            folderLists.map((folder) => {
              return (
                <>
                  <div key={folder.id} onClick={handleFolderClick}>
                    <Folders folder={folder} />
                  </div>
                </>
              );
            })
          ) : (
            <div>folderLists가 없습니다.</div>
          )}
          <div>+</div>
        </div>
        <div>
          <div class="folder-name">{currentFolderName}</div>
          <Option />
        </div>
        <CardWrapper links={links} />
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
