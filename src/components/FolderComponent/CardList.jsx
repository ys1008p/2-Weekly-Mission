import { getLinks } from "../../services/api";
import { useEffect, useState } from "react";
import Card from "./Card";

function CardList({ selectedFolder }) {
  const [link, setLink] = useState([]);

  useEffect(() => {
    const handleLink = async () => {
      const { link } = await getLinks(selectedFolder);
      setLink(link || []);
    };
    handleLink();
  }, [selectedFolder]);

  return (
    <>
      {link.length === 0 ? (
        <div className="warn-message">
          <div className="noLink">저장된 링크가 없습니다</div>
        </div>
      ) : (
        <div className="cards">
          {link?.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      )}
    </>
  );
}

export default CardList;
