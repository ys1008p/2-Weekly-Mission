import './UserInfo.css';

export default function UserInfo({ userEmail, userProfileImg }) {
  return (
    <div className="UserInfo-container">
      <img src={userProfileImg} alt="유저 프로필 이미지" className="UserInfo-user-profile-img" />
      <span className="UserInfo-user-email">{userEmail}</span>
    </div>
  );
}
