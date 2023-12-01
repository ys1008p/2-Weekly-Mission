import { getFolders } from "../../services/api";
import { useEffect, useState } from "react";
import Card from "./Card";

function SharedCardList() {
  const [folder, setFolder] = useState([]);

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getFolders();
      setFolder(folder);
    };
    handleFolder();
  }, []);

  return (
    <div className="cards">
      {folder.links?.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export default SharedCardList;
