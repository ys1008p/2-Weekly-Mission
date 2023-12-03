import "./Main.css";
import CardList from "./CardList";
import LinkSearchInput from "./LinkSearchInput";
import UserPersonalFolderList from "./UserPersonalFolderList";
import { useLocation } from "react-router-dom";

function Main({ cardData, psFolderData }) {
  const location = useLocation();

  const locationFolder = location.pathname === `/folder`;
  const locationShared = location.pathname === `/shared`;

  return (
    <main className="main-container">
      <LinkSearchInput />
      {locationFolder && <UserPersonalFolderList psFolderData={psFolderData} />}
      {locationShared && <CardList cardData={cardData} />}
    </main>
  );
}

export default Main;
