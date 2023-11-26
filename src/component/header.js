import { HeaderContentForm, LinkbraryLogo } from "./logo";
import { LoginText } from "./login";
import { useEffect, useState } from "react";
import { userInfo } from "../api/userInfo";
import { folderInfo } from "../api/folder";
import logo from "../images/logo.svg";

const Header = () => {
  const [mainLogo, setMainLogo] = useState(logo);
  const [folderLogo, setFolderLogo] = useState();
  const [headerText1, setHeaderText1] = useState();
  const [headerText2, setHeaderText2] = useState();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = async () => {
      const data = await userInfo();
      setUserData(data);
    };
    user();

    const headerContent = async () => {
      const { folder } = await folderInfo();
      setFolderLogo(folder.owner.profileImageSource);
      setHeaderText1(folder.owner.name);
      setHeaderText2(folder.name);
    };
    headerContent();
  }, []);

  return (
    <header>
      <div className="header__login-form">
        <LinkbraryLogo logo={mainLogo} />
        <LoginText loginValid={userData} />
      </div>
      <div className="header__folder-form">
        <HeaderContentForm
          logo={folderLogo}
          headerText1={headerText1}
          headerText2={headerText2}
        />
      </div>
    </header>
  );
};

export default Header;
