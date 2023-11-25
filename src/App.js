import styles from "./styles/App.module.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import CardList from "./component/CardList";
import { useEffect, useState } from "react";
import {getUserData, getFolderData} from "./api"


function App() {
  //패치함수로 로그인 유저 정보를 가져온다 
  //유저정보를 가져오는데 성공했으면 Codeit@codeit.com를 보여주고 없으면 로그인 버튼을 보여준다 
  const [email, setEmail] =useState()
  const [folder , setFolder] = useState()
  
  
  const handleEmailLoad = async()=>{
    const {email} = await getUserData();
    setEmail(email);
  }

  const handleFolderLoad =async()=>{
    const {folder} = await getFolderData();
    setFolder(folder);
    console.log(folder.links)
  }

  useEffect(()=>{
   handleEmailLoad()
   handleFolderLoad()
  },[])

  return (
    <>
    <main  >
      <Header email={email}/>
      <Banner folder={folder}/>
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} placeholder="링크를 검색해주세요"/>
            <img className={styles.searchIcon} src={process.env.PUBLIC_URL + "/images/search.png"}></img>
          </div>
          <CardList links={folder && folder.links}/>
        </div>
      </section>
    </main>
      <Footer/>
    </>
  );
}

export default App;
