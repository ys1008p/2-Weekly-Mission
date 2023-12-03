import './Nav.css';
import logo from '../../../assets/logo.svg';

function Nav({
  profileImg,
  profileEmail
}){
  return (
    <nav>
      <h1 className="logo">
        <a href="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
      </h1>
      <div className="profile">
        {profileEmail ? 
        <a href="/">
          <img src={profileImg} alt="프로필 이미지" />
          <p className="text mobile-hide">
            {profileEmail}
          </p>
        </a> :
        <a href="signin.html" className="cta">
          <span>로그인</span>
        </a>}
      </div>
    </nav>
  )
}

export default Nav;