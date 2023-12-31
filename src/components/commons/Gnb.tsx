import React, { useEffect, useState } from "react";
import { getProfiles } from "../../services/api";
import styled from "styled-components";
import logo from "../../assets/linkbrary-logo.png";

interface Profile {
  id: number;
  email: string;
  image_source: string;
}

function Gnb() {
  const [userData, setUserData] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getProfiles();
      setUserData(data.data);
    };
    fetchUserData();
  }, []);

  return (
    <StyledNav>
      <StyledNavContainer>
        <a href="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {userData ? (
          <>
            {userData.map((info) => {
              return (
                <StyledGnb key={info.id}>
                  <StyledGnbImg src={info.image_source} alt="프로필 사진" />
                  <StyledEmail>{info.email}</StyledEmail>
                </StyledGnb>
              );
            })}
          </>
        ) : (
          <div>
            <StyledLoginButton>로그인</StyledLoginButton>
          </div>
        )}
      </StyledNavContainer>
    </StyledNav>
  );
}

export default Gnb;

// @import url(../../styles/HomeStyles.css);

const StyledNav = styled.nav`
  background-color: var(--gray-bg-color);
  padding: 2rem 20rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 2rem 0;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 2rem 3.2rem;
  }
`;

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 192rem;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 80rem;

    a:nth-child(1) {
      padding-left: 3.2rem;
    }
    a:nth-child(2) {
      padding-right: 3.2rem;
    }
  }
`;

const StyledLoginButton = styled.button`
  background-image: var(--gradient-purpleblue-skyblue);
  font-size: 1.8rem;
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  font-weight: 600;
  border-radius: 0.8rem;
  border: none;
  padding: 1.6rem 2rem;
  cursor: pointer;
  width: 12.8rem;
`;

const StyledGnb = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const StyledGnbImg = styled.img`
  border-radius: 9999px;
  width: 2.8rem;
  height: 2.8rem;
`;

const StyledEmail = styled.div`
  font-size: 1.4rem;
`;
