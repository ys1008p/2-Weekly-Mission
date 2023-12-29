import React, { ReactNode } from "react";
import GNB from "./Gnb";
import { useAuth } from "contexts/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { authData, login, isLogin } = useAuth();
  return (
    <>
      <GNB auth={authData} isLogin={isLogin} onClick={login} />
      {children}
    </>
  );
};

export default Layout;
