import { useEffect, useState } from "react";
import { formatDate, getTimeDifference } from "../../../Utility/Date";
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

        if (!res.ok) {
          throw new Error();
        }

        data.folder.links.sort((a, b) => {
          // 최신순정렬
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setCardData(data);
      } catch (e) {
        console.log("에러발생 :" + e);
        alert("저장된 데이터를 불러오는중 에러가 발생하였습니다.");
      }
    }

    getCardData();
  }, []);

  return (
    <div className="card-main-container">
      {cardData.folder?.links.map((item) => (
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
