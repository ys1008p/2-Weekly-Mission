import '../styles/nav.css';
import { getFolder } from '../folderApi';
import logoImg from '../img/logo.jpg';
import React, { useState, useEffect } from 'react';
import { getProfile } from '../api';
import Main from './Main';
import SearchBar from './SearchBar'

function App() {

  // useState를 왜 써야 실행 되는지 모르겠음.
  // null이 기본값이 아니어도 실행은 됨.
  const [userType, setUserType] = useState(null);
  const [userFolderType, setUserFolderType] = useState(null);
  const [links, setLinks] = useState([]);

    const fetchData = async () => {
      try {
        const data = await getProfile();
        setUserType(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // const fetchData = async () => {
    //   try {
    //     const { email, profileImageSource} = await getProfile();
    //     setUserType({ email, profileImageSource});
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

     //


    const fetchFolder = async () => {
      try {
        const { folder } = await getFolder();
        console.log(folder)
        console.log(folder.links)
        setUserFolderType(folder);
        setLinks(folder.links);
        // setLinks(links)
      } catch (error) {
        console.error('Error fetching data2:', error)
      }
    };
    useEffect(() => {
    fetchFolder();
    fetchData();
  }, []);


 // 이것도 왜 있어야만 실행이 되지? 그냥 로딩만 시켜주는거 아닌가?
 // 일단 위에 useState의 기본값이 null이라서 지금 상황에선 있어야하는데
  if (!userType) {
    return <div>Loading...</div>;
  }

  // 두개의 다른 제이슨을 받아와서 화면에 어떻게 깔지?
  if (!userFolderType) {
    return <div>Loading...</div>;
  }
console.log(links);

  return (
    <>
    <nav>
      <div className='gnb'>
        <a href='index.html'>
            <img  src={logoImg} alt='로고이미지' className='logo'/>
            </a>
            <a className='cta cta-short' href='signin.html'>
              <img src={userType.profileImageSource} alt='회원이미지' className='userImg'/>
              <span className='userEmail'>{userType.email}</span>
              </a>
              </div>
              </nav>
              <header>
                <div className='hero-header'>
                  <div className='proFileGap'>
                  <img src={userFolderType.owner.profileImageSource} alt='프로필이미지' className='profile'/>
                  <p className='folderUserName'>{userFolderType.owner.name}</p>
                  </div>
                  <div className='folderName'>
                  {userFolderType.name}
                  </div>
                </div>
              </header>
              <div className='Main'>
                <SearchBar />
              <ul className=''>
              <Main links={links}/>
              </ul>
              </div>
              </>
          );
        }

export default App;


{/* <nav> */}
{/* <div class="gnb">
  <a href="index.html">
    <img class="logo" src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
  </a>
  <a class="cta cta-short" href="signin.html">
    <span>로그인</span>
  </a>
</div>
</nav>
<header>
<div class="hero-header">
  <h1 class="slogan">
    <span class="slogan-gradient background-clip-text"> 세상의 모든 정보</span>를
    <br />
    쉽게 저장하고 관리해 보세요
  </h1>
  <a class="cta cta-long" href="signup.html">
    <span>링크 추가하기</span>
  </a>
  <img src="./images/hero.png" class="hero-image" alt="Linkbrary 서비스 소개" />
</div>
</header> */}
