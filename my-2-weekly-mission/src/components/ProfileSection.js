import "./ProfileSection.css";
import logo from "./images/logo.svg";
import myProfile from "./images/myprofile.svg";

function ProfileSection({ items, secondItems }) {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="logo" />
        <div>
          <a className="purpleBackground" href="">
            <img src={myProfile} />
          </a>
          <p>{items.email}</p>
        </div>
      </div>
      <div>
        <img src={items.profileImageSource} />
        <p>@{items.name}</p>
        <p>⭐️ 즐겨찾기</p>
      </div>
    </div>
  );
}

export default ProfileSection;
