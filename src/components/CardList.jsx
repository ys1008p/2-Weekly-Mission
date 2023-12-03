import { useContext } from "react";
import { FolderDataContext } from "../util/FolderDataContext";
import { Card } from "./Card.jsx";
import "../styles/CardList.css";

const CardList = () => {
  const { folder } = useContext(FolderDataContext);
  const { links } = folder || {};

  return (
    <div className="cardList">
      {links?.map((link) => (
        <Card key={link.id} linkData={link} />
      ))}
    </div>
  );
};

export { CardList };
