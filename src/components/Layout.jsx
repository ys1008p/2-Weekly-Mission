import React from "react";
import GNB from "./Gnb";
import { useAuth } from "contexts/AuthContext";

const Layout = ({ children }) => {
  const { authData, login, isLogin } = useAuth();
  return (
    <>
      <GNB auth={authData} isLogin={isLogin} onClick={login} />
      {children}
    </>
  );
};

export default Layout;
