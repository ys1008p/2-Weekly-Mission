import './NavBar.css';
import LinkbraryLogo from '../../assets/logo.svg';
import Cta from '../atoms/Cta/Cta';
import UserInfo from '../atoms/UserInfo/UserInfo';
import { getUserInfo } from '../../utils/api';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [userData, setUserData] = useState({ email: '', image_source: null });
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  // 유저 가져오기
  const handleLoadUser = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getUserInfo();
    } catch (error) {
      setLoadingError(error);
      console.log(loadingError);
      return;
    }

    const { email, image_source } = result;

    setUserData({ email, image_source });
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
        <img src={LinkbraryLogo} alt="홈페이지 로고" />
      </a>
      {isLoadingSuccess ? (
        <UserInfo userEmail={userData.email} userProfileImg={userData.image_source} />
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
