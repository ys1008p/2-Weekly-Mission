import Navbar from "./Navbar";
const Header = ({ isLogin, selectedFolder, loginInfo }) => {
  const { name, owner } = selectedFolder;
  return (
    <header>
      <Navbar isLogin={isLogin} loginInfo={loginInfo} />
      <section>
        <div className="folder-info">
          <img className="folder-profile" src={owner?.profileImageSource} alt="owner profile" />
          <span id="folder-owner-name">@{owner?.name}</span>
          <span id="folder-name">{name}</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
