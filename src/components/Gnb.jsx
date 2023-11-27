import React, { useContext } from "react";
import logo from "assets/images/logo.svg";
import account from "assets/images/account.png";
import { AuthContext } from "contexts/AuthContext";

const GNB = ({ isLogin, onClick }) => {
  const {
    authData: { email },
  } = useContext(AuthContext);
  return (
    <nav>
      <div className="gnb">
        <img className={logo} src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <div className="account">
            <img src={account} alt="account" />
            <span className="email">{email}</span>
          </div>
        ) : (
          <button className="cta cta-short" onClick={onClick}>
            <span>로그인</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default GNB;
