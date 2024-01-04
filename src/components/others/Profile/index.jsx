import './Profile.css';
import { useMediaQuery } from 'react-responsive';

export default function Profile({ profile }) {
  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });
  return (
    <div className="profileContainer">
      <img className="profileImage" src={profile.image_source}></img>
      {!isMobile && <div className="profileEmail">{profile.email}</div>}
    </div>
  );
}
