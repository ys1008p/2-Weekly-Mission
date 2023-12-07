import "../../css/Header.css";

export default function Header({ userInfo }) {
  return (
    userInfo && (
      <header className="memHeader">
        <img className="headerImg" src={userInfo.owner.profileImageSource} />
        <p className="userName">{userInfo.owner.name}</p>
        <h1 className="siteName">{userInfo.name}</h1>
      </header>
    )
  );
}
