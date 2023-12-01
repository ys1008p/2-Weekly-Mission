import { getFolderData } from "../../../api/getFolderData";
import Card from "./Card";
import "./Main.css";
import { useEffect, useState } from "react";

function CardList() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getFolderData()
      .then((result) => {
        setCardData(result?.folder?.links);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  return (
    <div className="card-main-container">
      {cardData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}

export default CardList;
