import Logo from '@/assets/images/icon/logo.svg';

const Header = () => (
  <header>
    <div>
      <a href="/">
        <img className="logo" src={Logo} alt="로고" />
      </a>
      <div>Codeit@codeit.com</div>
    </div>
  </header>
);

export default Header;
