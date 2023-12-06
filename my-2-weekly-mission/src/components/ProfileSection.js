import "./ProfileSection.css";
import logo from "./images/logo.svg";
import myProfile from "./images/myprofile.svg";

function isEmailExist(item) {
  if (item.email) {
    return (
      <div className="eMail">
        <a className="purpleBackground" src={myProfile} href="">
          <img className="eMailIcon" src={myProfile} />
        </a>
        <p>{item.email}</p>
      </div>
    );
  } else {
    return (
      <a className="cta cta-short" href="signin.html">
        <span>로그인</span>
      </a>
    );
  }
}

function ProfileSection({ items }) {
  return (
    <div className="body">
      <div className="nav">
        <div className="gnb">
          <img className="logo" src={logo} alt="logo" />
          {isEmailExist(items)}
        </div>
      </div>
      <div className="profile">
        <img className="profilePicture" src={items.profileImageSource} />
        <p className="profileName">@{items.name}</p>
        <p className="folderName">⭐️ 즐겨찾기</p>
      </div>
    </div>
  );
}

export default ProfileSection;
