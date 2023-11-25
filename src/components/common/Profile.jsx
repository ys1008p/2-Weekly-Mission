import PropTypes from 'prop-types';
import { importImg } from '../../store/common';

export const Profile = ({ profileData }) => {
  const { email, profileImageSource } = profileData;
  const { share } = importImg;

  return (
    <div className='profile'>
      <button className='profile-avatar'>
        <img
          src={profileImageSource || share.emptyAvatar}
          alt='프로필 이미지'
        />
      </button>
      <div className='profile-name'>{email}</div>
    </div>
  );
};

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
};
