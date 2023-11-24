import './Profile.css';
import { useMediaQuery } from 'react-responsive';

export default function Profile({ profile }) {
  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });
  if (isMobile) {
    return (
      <div className="profileContainer">
        <img className="profileImage" src={profile.profileImageSource}></img>
      </div>
    );
  }
  return (
    <div className="profileContainer">
      <img className="profileImage" src={profile.profileImageSource}></img>
      <div className="profileEmail">{profile.email}</div>
    </div>
  );
}
