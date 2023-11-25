import { useEffect, useState } from "react";
import "./Main.css";

function Card() {
  // 폴더 데이터를 담을 State
  const [cardData, setCardData] = useState({});

  // 사이드 이펙트 처리 & 데이터 GET
  useEffect(() => {
    async function getCardData() {
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await res.json();
        setCardData(data);
      } catch (e) {
        console.log("에러 :" + e);
      }
    }

    getCardData();
  }, []);

  return (
    <div className="card-main-container">
      {cardData.folder?.links.map((item) => (
        <div key={item.id} className="card-item-container">
          {/* 이미지가 없을시 대체 이미지 */}
          <img
            src={
              item.imageSource ||
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            alt="링크 이미지"
            className="card-img"
          />
          <div className="card-info-container">
            <p>test</p>
            <p className="card-description">{item.description}</p>
            <p className="card-createdAt">{item.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
