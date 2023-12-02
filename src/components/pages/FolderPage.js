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
      setFolderLists(data);
    } catch (e) {
      console.log(`Folderpage의 getFolderLists에서 ${e} 발생`);
    }
  };

  useEffect(() => {
    getUserData();
    getTotalLinksData();
    getFolderLists();
  }, []);
  return (
    <>
      <Header profileDatas={profileDatas} />
      <AddLink />
      <div className="main-wrapper">
        <SearchBar />
        {folderLists ? (
          folderLists.map((folder) => {
            return (
              <div key={folder.id}>
                <Folders folder={folder} />
              </div>
            );
          })
        ) : (
          <div>folderLists 없다.</div>
        )}
        <CardWrapper links={links} />
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
