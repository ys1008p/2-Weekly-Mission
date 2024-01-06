import AddLinkForm from "../AddLinkForm";
// import '../../styles/Folder.css';
import SearchBar from "../SearchBar";
import NoLink from "../NoLink";
import FolderLists from "../FolderLists";
import Card from "../Card";
import FolderTitle from "../FolderTitle";
import { useFolderPageFolder } from "../../hooks/folderPageHooks";
import { useEffect, useState } from "react";
import { ALL_FOLDER, FOLDER_API_URL } from "../../constants/constants";
import axios from "axios";
import { LinkType } from "../../constants/type";

const linkURL = (forderId:number) => {
  if(forderId === 0) return `${FOLDER_API_URL}/1/links`;
  return `${FOLDER_API_URL}/1/links?folderId=${forderId}`;
}

const FolderPage = () => {
  const [activeFolder, setActiveFolder] = useState(0);
  const folders =[ALL_FOLDER, ...useFolderPageFolder()];
  const [links, setLinks] = useState<LinkType[]>([])

  const getLinkData = async (URL:string) => {
    try{
      const response = await axios.get(URL);
      setLinks(response.data.data);
    } catch(error){
      alert(error)
    }
  };
  
  useEffect(() => {
    const url = linkURL(activeFolder);
    getLinkData(url);
  },[activeFolder])

  if(!folders) return;

  const handleActiveButton:(id: number) => void = (id:number) => {
    setActiveFolder(id);
  }

  return(
    <main className="contents folder-link--main">
      <AddLinkForm />
      <SearchBar/>
      {!links && <NoLink />}
      {links &&
        <>
          <FolderLists folders={folders} activeFolder={activeFolder} onClick={handleActiveButton}/>
          <FolderTitle folders={folders} activeFolder={activeFolder}/>
          {links.length === 0 && <NoLink />}
          <section className="card--section">
            {links?.map((link) => <Card key={link.id} link={link} />)}
          </section>
        </>
      }
    </main>
  )
};

export default FolderPage;
