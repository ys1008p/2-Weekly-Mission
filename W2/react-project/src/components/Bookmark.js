import avatar from "../assets/avatar.png";
import "../styles/Bookmark.css";

function Bookmark() {
  return (
    <section className="account-section">
      <div className="account-box">
        <img className="account-image" src={avatar} alt="avatar" />
        <p className="acount-nickname">@코드잇</p>
        <h1 className="title-bookmark">⭐️ 즐겨찾기</h1>
      </div>
    </section>
  );
}

export default Bookmark;
