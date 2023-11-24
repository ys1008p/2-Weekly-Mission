import './Profile.css';

export default function Profile({ profile }) {
  return (
    <div className="profileContainer">
      <img className="profileImage" src={profile.profileImageSource}></img>
      <div className="profileEmail">{profile.email}</div>
    </div>
  );
}
