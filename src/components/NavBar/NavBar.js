import './NavBar.css';
import LinkbraryLogo from '../../assets/logo.svg';
import Cta from '../atoms/Cta/Cta';
import UserInfo from '../atoms/UserInfo/UserInfo';
import { getUserInfo } from '../../utils/api';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [userData, setUserData] = useState({ email: '', profileImageSource: null });
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);

  // 유저 가져오기
  const handleLoadUser = async () => {
    let result;
    try {
      result = await getUserInfo();
    } catch (error) {
      console.log(error);
    }

    const { email, profileImageSource } = result;

    setUserData({ email, profileImageSource });
    setIsLoadingSuccess(true);

    console.log('유저 데이터를 가져왔습니다.');
  };

  // 첫 로딩
  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <nav className="NavBar">
      <a href="/" className="NavBar-home-link">
        <img src={LinkbraryLogo} alt="홈페이지로 가는 로고이미지" />
      </a>
      {isLoadingSuccess ? (
        <UserInfo userEmail={userData.email} userProfileImg={userData.profileImageSource} />
      ) : (
        <a href="/signin" className="NavBar-login-link">
          <Cta isShort>
            <span>로그인</span>
          </Cta>
        </a>
      )}
    </nav>
  );
}
