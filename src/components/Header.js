import '../components/Header.css';
import logo from '../assets/logo.svg';
import codeit from '../assets/ico-codeit.png';
import favorites from '../assets/favorites.png';
import profile from '../assets/img-profile.png';

function Header({ className }){
  return (
    <header className={className}>
      <nav>
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
        </h1>
        <div className="profile">
          <a href="/">
            <img src={profile} alt="프로필" />
            <p className="text mobile-hide">
              Codeit@codeit.com
            </p>
          </a>
        </div>
      </nav> 
      <div className="title">
        <img className="img-codeit" src={codeit} alt="코드잇" />
        <p className="codeit">
          @코드잇
        </p>
        <img className="img-favorites" src={favorites} alt="즐겨찾기" />
      </div>
    </header>
  )
}

export default Header;