import Atag from "./Atag";
import "../css/app.css";
import { useEffect, useState } from "react";
import { getUserInfo, getFolder } from "../api";
import { Card } from "./Card";

function App() {
  const [userInfo, setUserInfo] = useState();
  const [folderInfo, setFolderInfo] = useState({});
  // const [search, setSearch] = useState("");

  const infoLoad = async () => {
    let infoLoadResult;
    try {
      infoLoadResult = await getUserInfo();

      setUserInfo(infoLoadResult);
      console.log(userInfo + "user함수호출");
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const FolderInfo = async () => {
    let folderInfoResult;
    try {
      folderInfoResult = await getFolder();
      const { folder } = folderInfoResult;

      // const sortedItems = folder?.sort(
      //   (a, b) => b[folder.createAt] - a[folder.createdAt]
      // );
      setFolderInfo(folder);
      console.log(folderInfo + "folder함수호출");
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
    infoLoad();
    FolderInfo();
  }, []);
  //search에대한 다른 요구사항 없음
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target["search"].value);
  // };
  console.log(folderInfo);
  console.log(userInfo);
  console.log(folderInfo.links);

  return (
    <>
      <nav>
        <div className="gnb">
          <Atag href="" className="logo" name="logo" />
          {userInfo !== null ? (
            <div className="userInfoDiv">
              <img
                className="userProfileImg"
                src={userInfo?.profileImageSource}
                alt="userProfileImg"
              />
              <p className="userEmail">{userInfo?.email}</p>
            </div>
          ) : (
            <a class="cta cta-short" href="/signin/signin.html">
              <span>로그인</span>
            </a>
          )}
        </div>
      </nav>

      <header>
        <div className="userInfo">
          <div>
            <div className="profileImgDiv">
              <img
                className="profileImg"
                src={folderInfo?.owner?.profileImageSource}
                alt="유저이미지"
              />
            </div>
            <p className="profileName">@{folderInfo?.owner?.name}</p>
          </div>
          <div>
            <p className="userFavorites">{folderInfo?.name}</p>
          </div>
        </div>
      </header>
      <main>
        <form onSubmit="">
          <div className="custom-placeholder">
            <input
              name="search"
              className="searchInput"
              placeholder="링크를 검색해보세요"
            />
          </div>
        </form>
        {folderInfo.id && <Card links={folderInfo?.links} />}
      </main>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <Atag
              className="footer-link"
              href="/privacy/privacy.html"
              contents="Privacy policy"
            />

            <Atag
              className="footer-link"
              href="/faq/faq.html"
              contents=" FAQ"
            />
          </div>
          <div className="sns">
            <Atag
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              name="facebook"
            />
            <Atag
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              name="twitter"
            />

            <Atag
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              name="youtube"
            />

            <Atag
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              name="instagram"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
