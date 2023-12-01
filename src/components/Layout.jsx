import React from "react";
import GNB from "./Gnb";
import { useAuth } from "contexts/AuthContext";

const Layout = ({ children }) => {
  const { authData, login, isLogin } = useAuth();
  return (
    <div>
      <GNB auth={authData} isLogin={isLogin} onClick={login} />
      {children}
    </div>
  );
};

export default Layout;
