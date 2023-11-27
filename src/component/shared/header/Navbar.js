import "./Header.css";

function Navbar({ userData }) {
  const { email, profileImageSource } = userData;

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-item">
          <a href="/">
            <img src="img/logo.png" alt="logo" className="nav-item-logo" />
          </a>

          {userData?.id ? (
            <>
              <div className="nav-item-profile">
                <img
                  src={profileImageSource}
                  alt="profile-img"
                  className="nav-item-profile-img"
                />
                <p className="nav-item-profile-email">{email}</p>
              </div>
            </>
          ) : (
            <div className="nav-item-profile">
              <button className="nav-login-btn">로그인</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
