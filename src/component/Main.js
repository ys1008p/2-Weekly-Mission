import "./Main.css";
import CardList from "./CardList";
import LinkSearchInput from "./LinkSearchInput";
import UserPersonalFolderList from "./UserPersonalFolderList";

function Main({ cardData, psFolderData }) {
  return (
    <main className="main-container">
      <LinkSearchInput />
      <UserPersonalFolderList psFolderData={psFolderData} />
      <CardList cardData={cardData} />
    </main>
  );
}

export default Main;
