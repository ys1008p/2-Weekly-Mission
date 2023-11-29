import logo from '../assets/logo.svg';
import '../styles/Nav.css'

const UserProfile = ({profile}) => {
  return(
    <div className='profile--box'>
      <img src={profile.profileImageSource} alt='프로필 아이콘' className='profile-image'/>
      <p className='profile-email'>{profile.email}</p>
    </div>
  )
};

const Nav = ({profile}) => {
  return(
    <header className="landing--header">
      <div className="header-bar">
        <a href="/" className="landing--logo">
          <img src={logo} alt="logo"/>
        </a>
        {/* {profile && <UserProfile profile={profile}></UserProfile>} */}
        {profile.email === '' ? <a href="./signin.html" className="login--btn btn">로그인</a> : <UserProfile profile={profile}></UserProfile>}
      </div>
    </header>
  )
};

export default Nav;
