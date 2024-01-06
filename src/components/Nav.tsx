import logo from '../assets/logo.svg';
import style from '../styles/Nav.module.css';
import { useSharedPageUser } from '../hooks/sharedPageHooks';
import { useLocation } from 'react-router';
import { useFolderPageUser } from '../hooks/folderPageHooks';
import { UserType } from '../constants/type';

const UserProfile = ({profile} : {profile:UserType | undefined}) => {
  if(!profile) return;

  return(
    <div className={`${style['profile--box']}`}>
      <img src={profile.profileImageSource || profile['image_source']} alt='프로필 아이콘' className={`${style['profile-image']}`}/>
      <p className={`${style['profile-email']}`}>{profile?.email}</p>
    </div>
  )
};

const Nav = () => {
  const location = useLocation();
  const sharedPageUser = useSharedPageUser();
  const folderPageUser = useFolderPageUser();

  return(
    <header className={`${style['landing--header']} ${location.pathname === '/folder' ? style['no-fixed'] : ''}`}>
      <div className={`${style['header-bar']}`}>
        <a href="/" className={`${style['landing--logo']}`}>
          <img src={logo} alt="logo"/>
        </a>
        {location.pathname === '/shared' && (sharedPageUser?.email === '' ? <a href="./signin.html" className={`${style['login--btn']}`}>로그인</a> : <UserProfile profile={sharedPageUser} />)}
        {location.pathname === '/folder' && (folderPageUser?.email === '' ? <a href="./signin.html" className={`${style['login--btn']}`}>로그인</a> : <UserProfile profile={folderPageUser} />)}
        {(location.pathname !== '/shared' && location.pathname !== '/folder') && (sharedPageUser?.email === '' ? <a href="./signin.html" className={`${style['login--btn']}`}>로그인</a> : <UserProfile profile={sharedPageUser} />)}
      </div>
    </header>
  )
};

export default Nav;
