import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #f0f6ff;
  margin: 0 auto;
  position: ${({ path }) => (path ? "fixed" : "static")};
  width: 100%;
  top: 0;
  left: 50%;
  transform: ${({ path }) => (path ? "translate(-50%, 0);" : "none")};
  z-index: 99;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  padding: 3.2rem 20rem;

  @media all and (min-width: 768px) and (max-width: 1124px) {
    max-width: 710px;
    padding: 3.2rem 3.2rem;
  }

  @media all and (max-width: 768px) {
    padding: 1.8rem 3.2rem;
  }
`;

const NavLogo = styled.img`
  width: 13rem;
`;

const NavProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const NavProfileImg = styled.img`
  width: 2.8rem;
  border-radius: 50%;
`;

const NavProfileEmail = styled.p`
  font-size: 14px;
`;

const NavLoginBtn = styled.button`
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border: none;
  color: white;
  padding: 1.6rem 2rem;
  width: 12.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
`;

function Navbar({ userData, location }) {
  const { email, image_source } = userData;

  const getPathname = location.pathname === "/shared";

  return (
    <>
      <NavbarContainer path={getPathname}>
        <NavItem>
          <Link to="/">
            <NavLogo src="img/logo.png" alt="logo" className="nav-item-logo" />
          </Link>

          {userData?.id ? (
            <NavProfile>
              <NavProfileImg src={image_source} alt="profile-img" />
              <NavProfileEmail>{email}</NavProfileEmail>
            </NavProfile>
          ) : (
            <NavLoginBtn className="nav-login-btn">로그인</NavLoginBtn>
          )}
        </NavItem>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
