import { getSharedFolders } from "../../services/api";
import { useEffect, useState } from "react";
import formatTimeAgo from "../../utils/FormatTimeAgo";
import formatDate from "../../utils/formatDate";
import noimage from "../../assets/noimage.svg";
import "./Card.css";

function Card({ card }) {
  const timeAgo = formatTimeAgo(card.createdAt);
  const date = formatDate(card.createdAt);

  return (
    <div>
      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <div className="img-container">
          <img
            className="card-img"
            src={card.imageSource || noimage}
            alt={card.title}
            type="card"
          />
        </div>
        <div className="card-info">
          <p className="time-ago">{timeAgo}</p>
          <p className="links-description">{card.description}</p>
          <p className="cratedAt">{date}</p>
        </div>
      </a>
    </div>
  );
}

function SharedCardList() {
  const [folder, setFolder] = useState([]);

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getSharedFolders();
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
