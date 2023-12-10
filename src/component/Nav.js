import Atag from "./Atag";
import "../css/nav.css";
import InfoLoader from "./InfoLoader";
function Nav() {
  const { userInfo } = InfoLoader();

  return (
    <nav>
      <div className="gnb">
        <Atag href="" className="logo" name="logo" />
        {userInfo ? (
          <div className="userInfoDiv">
            <img
              className="userProfileImg"
              src={userInfo?.profileImageSource}
              alt="userProfileImg"
            />
            <p className="userEmail">{userInfo?.email}</p>
          </div>
        ) : (
          <a className="cta cta-short" href="/signin/signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
