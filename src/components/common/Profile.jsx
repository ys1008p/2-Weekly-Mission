import PropTypes from 'prop-types';
import { ICON } from '../../store/common';

export const Profile = ({ profileData }) => {
  const { email, image_source } = profileData;
  const { avatar } = ICON;

  return (
    <div className='profile'>
      <button className='profile-avatar'>
        <img src={image_source || avatar.default.url} alt={avatar.default.alt} />
      </button>
      <div className='profile-name'>{email}</div>
    </div>
  );
};

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
};
