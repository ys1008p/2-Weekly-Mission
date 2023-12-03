import logoImg from "../img/logo.svg";

import "../css/Nav.css";

const handleLoginClick = () => location.assign("signin.html");

const User = ({ userData }) => {
  return (
    <article className="profile">
      <img
        className="profileImg"
        src={userData.profileImageSource}
        alt="프로필 이미지"
      />
      <p>{userData.email}</p>
    </article>
  );
};

export default function Nav({ userData }) {
  return (
    <nav>
      <div className="nav-bar">
        <a id="logo" href="/">
          <img src={logoImg} alt="LinkBrary logo" />
        </a>
        {userData ? (
          <User userData={userData} />
        ) : (
          <button
            onClick={handleLoginClick}
            className="use_site"
            id="signin"
            alt="로그인사이트로 이동하는 버튼"
          >
            로그인
          </button>
        )}
      </div>
    </nav>
  );
}
