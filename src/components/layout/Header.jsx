import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from '../../apis/userInfo';
import { Profile } from '../common/Profile';
import { ButtonLink } from '../../components/common/Button';
import { ICON } from '../../store/common';
import { INITIAL_PROFILE_DATA } from '../../store/type';

export const Header = () => {
  const [profileData, setProfileData] = useState(INITIAL_PROFILE_DATA);
  const isLoggedIn = !!profileData.email;

  useEffect(() => {
    const getData = async () => {
      try {
        const initData = await getUserData();
        setProfileData(initData);
      } catch (e) {
        console.error('ERROR FETCHING PROFILE DATA: ', e);
      }
    };

    getData();
  }, []);

  const { logo } = ICON;

  return (
    <header className='gnb'>
      <div className='gnb-container'>
        <h1 className='logo'>
          <Link to={'/'}>
            <img src={logo.url} alt={logo.alt} />
          </Link>
        </h1>

        {isLoggedIn ? (
          <Profile profileData={profileData} />
        ) : (
          <ButtonLink path={'/signin'} text='로그인' className={'btn-login'} />
        )}
      </div>
    </header>
  );
};
