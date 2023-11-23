import React, { useContext, useEffect, useState } from "react";
import logo from "assets/images/logo.svg";
import account from "assets/images/account.png";
import { getUser } from "utill/api";
import { getStorageItem, setToken } from "utill/storage";
import { AuthContext } from "contexts/AuthContext";

const TOKEN_KEY = "accessToken";

const GNB = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { authData, setAuthData } = useContext(AuthContext);

  /* 실제 데이터 사용 시 연동 */

  // const onClick = async () => {
  //   const auth = {
  //     email: "test@codeit.com",
  //     password: "sprint101",
  //   };
  //   const result = await signin(auth);
  //   if (result.success) {
  //     setToken(TOKEN_KEY, result.data.accessToken);
  //     setIsLogin(true);
  //   }
  // };

  const onClick = async () => {
    const result = await getUser();
    if (result.success) {
      //localstorage로 토큰 관리
      setToken(TOKEN_KEY, "access_token");
      //context로 유저 정보 관리
      setAuthData(result.data);
      setIsLogin(true);
    }
  };

  useEffect(() => {
    const getAccess = getStorageItem(TOKEN_KEY);
    if (getAccess) setIsLogin(true);
  }, [isLogin]);

  return (
    <nav>
      <div className="gnb">
        <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <>
            <img src={account} alt="account" />
          </>
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
