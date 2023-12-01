import { useEffect, useState } from "react";
import { formatDate, getTimeDifference } from "../../../Utility/Date";
import "./Main.css";
import { getFolderData } from "../../api/getFolderData";

function Card() {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    getFolderData()
      .then((result) => {
        setCardData(result);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  return (
    <div className="card-main-container">
      {cardData?.folder?.links.map((item) => (
        <a href={item.url} key={item.id}>
          <div className="card-item-container">
            {/* 이미지가 없을시 대체 이미지 */}
            <div className="card-img-container">
              <img
                src={
                  item.imageSource ||
                  "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                }
                alt="링크 이미지"
                className="card-img"
              />
            </div>
            <div className="card-info-container">
              <p className="card-last-updated-date">
                {getTimeDifference(item.createdAt)}
              </p>
              <p className="card-description">{item.description}</p>
              <p className="card-createdAt">{formatDate(item.createdAt)}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Card;
