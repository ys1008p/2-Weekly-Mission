import Header from "../component/Header";
import Footer from "../component/Footer";
import FolderBanner from "../component/FolderBanner";
import CardList from "../component/CardList";
import SearchInput from "../component/SearchInput";
import styles from "../styles/FolderPage.module.css";
import ButtonList from"../component/ButtonList"
import TitleArea from "../component/TitleArea"
import { getFolderUserData,getAllLinksData, getFoldersData , getSelectData } from "../apis/folder/folderApi.js";
import { useEffect, useState } from "react";

function FolderPage() {
  const [folders, setFolders] =useState();
  const [links, setLinks] = useState({
    all:[],
    select:[]
  });
  const [email, setEmail] = useState();
  const [id , setId] = useState(0);

  
  const handleEmailLoad = async () => {
    const { data } = await getFolderUserData();
    setEmail(data[0].email);
  };

  const handleFoldersLoad = async () => {
    const  {data}  = await getFoldersData();
    setFolders(data);
  };
  const handleAllLinksLoad = async () => {
    const { data } = await getAllLinksData();
    setLinks({
      ...links,
      all: data,
    });
 
  };

  const selectFolderLoad = async () => {
    const { data } = await getSelectData(id);
    setLinks({
      ...links,
      select: data,
    });

  };

  
  useEffect(() => {
    handleEmailLoad();
    handleFoldersLoad();
   
    if(id==0){
      handleAllLinksLoad();
    }else if(id!==0){
      selectFolderLoad();
    }

  }, [id]);



  return (
    <>
      <Header email={email} />
      <FolderBanner/>
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <ButtonList folders={folders} allFolderId={0} setId={setId}/>
          <TitleArea/>
         <CardList foldersLink={links} page={"folderPage"} />
        </div>
      </section>
      <Footer />
    </> 
  );
}

export default FolderPage;


{/* <div className={styles.linksNull}><div>저장된 링크가 없습니다.</div></div> */}