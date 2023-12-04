import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 9.4rem;
  padding: 0 20rem; 
  background-color: var(--color-sky-blue);

  @media screen and (max-width:1124px) {
    padding: 0 3.2rem;
  }

  @media screen and (min-width:375px) and (max-width:768px) {
    padding: 0 3.2rem; 
    height: 6.3rem;
  }

  h1 {
    display: block;

    img {
      @media screen and (min-width:375px) and (max-width:768px) {
        width: 8.8rem;
      }
    }
  }
`
const Email = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0 0 0.6rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--color-black);

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 100%;
  }

  p {
    padding: 0 0 0 0.6rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: var(--color-black);

    @media screen and (min-width:375px) and (max-width:768px) {
      display: none;
    }
  }
`
const Login = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.8rem;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: var(--color-very-light-gray);
  font-size: 2.8rem;
  font-weight: 600;

  @media screen and (min-width:375px) and (max-width:768px) {
    width: 8rem;
    height: 3.7rem;
    font-size: 2.4rem;
  }
`
function Nav({ 
  profileEmail,
  profileImg
}){
  return (
    <Container>
      <h1>
        <Link to="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
      </h1>
      <div>
        {profileEmail ? 
        <Email Link to="/">
          <img src={profileImg} alt="프로필 이미지" />
          <p>{profileEmail}</p>
        </Email> :
        <Login Link to="/">
          <span>로그인</span>
        </Login>}
      </div>
    </Container>
  )
}

export default Nav;