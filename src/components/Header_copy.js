import '../components/Header_copy.css';
import logo from '../assets/logo.svg';

function Header_copy({ className, profileEmail, profileImg }){
  return (
    <header className={className}>  
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
      <div className="add-link-wrap">
        <div className="add-link">
          <input type="text" placeholder="링크를 추가해보세요"/>
          <a href="signin.html" className="cta">
            <span>추가하기</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header_copy;