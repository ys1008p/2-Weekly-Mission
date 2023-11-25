import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { importImg } from '../../store/common';
import { ButtonLink } from '../../components/common/Button';
import { Profile } from '../common/Profile';
import { getUserInfo } from '../../apis/folder';

export const Header = () => {
  const [profileData, setProfileData] = useState();
  const isLoggedIn = profileData && profileData.name;

  useEffect(() => {
    const getData = async () => {
      const initData = await getUserInfo();
      setProfileData(initData);
    };

    getData();
  }, []);

  return (
    <header className='gnb'>
      <div className='gnb-container'>
        <h1 className='logo'>
          <Link to={'/'}>
            <img src={importImg.logo} alt='linkbrary-logo' />
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
