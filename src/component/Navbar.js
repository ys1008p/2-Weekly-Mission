import "./Navbar.css";

function Navbar({ userData, location }) {
  const { email, image_source } = userData;

  const handleNavbarPosition = () => {
    if (location.pathname === `/shared`) {
      return "nav-bar ";
    } else {
      return "nav-bar noFixed";
    }
  };

  return (
    <>
      <nav className={handleNavbarPosition()}>
        <div className="nav-item">
          <a href="/">
            <img src="img/logo.png" alt="logo" className="nav-item-logo" />
          </a>

          {userData?.id ? (
            <>
              <div className="nav-item-profile">
                <img
                  src={image_source}
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
