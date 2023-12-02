import React from "react";
import logo from "assets/images/logo.svg";
import account from "assets/images/account.png";
import { CtaShort } from "assets/styles/cta";
import { Gnb } from "assets/styles/gnb";
import { useLocation } from "react-router-dom";

const GNB = ({ auth, isLogin, onClick }) => {
  const location = useLocation();
  return (
    <Gnb.Wrapper $location={location.pathname}>
      <Gnb.Container>
        <Gnb.Logo src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <Gnb.Account>
            <img src={account} alt="account" />
            <Gnb.Email>{auth?.email || ""}</Gnb.Email>
          </Gnb.Account>
        ) : (
          <CtaShort onClick={onClick}>
            <span>로그인</span>
          </CtaShort>
        )}
      </Gnb.Container>
    </Gnb.Wrapper>
  );
};

export default GNB;
