import { useEffect, useState } from "react";
import "./Main.css";

// 날짜변환
function formatDate(createdAt) {
  const date = new Date(createdAt); // 날짜 Date 객체로 변환
  const year = date.getFullYear(); //년도 불러오기
  // 월 불러오기 (0부터시작 주의 // +1 붙여서 해결)
  const month = String(date.getMonth() + 1).padStart(2, "0");
  // 일 불러오기 padStart로 문자열 길이 맞추기(2개 , 하나면 0추가)
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

//날짜 받아오기
function getTimeDifference(createdAt) {
  // 현재 날짜와 생성된 날짜의 차이 계산
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = Math.floor((currentDate - createdDate) / (1000 * 60)); // Difference in minutes

  // 2분 미만일 때
  if (timeDifference < 2) {
    return "1 minute ago";
  }

  // 59분 이하일 때
  if (timeDifference <= 59) {
    return `${timeDifference} minutes ago`;
  }

  // 24시간 이하일 때
  const hoursDifference = Math.floor(timeDifference / 60); //시간계산
  if (hoursDifference < 24) {
    if (hoursDifference === 1) {
      return "1 hour ago";
    } else {
      return `${hoursDifference} hours ago`;
    }
  }

  // 30일 이하일 때
  const daysDifference = Math.floor(timeDifference / (60 * 24)); //일 계산
  if (daysDifference < 30) {
    if (daysDifference === 1) {
      return "1 day ago";
    } else {
      return `${daysDifference} days ago`;
    }
  }

  // 12달 이하일 때
  const monthsDifference = Math.floor(timeDifference / (60 * 24 * 30)); //년 산
  if (monthsDifference < 12) {
    if (monthsDifference === 1) {
      return "1 month ago";
    } else {
      return `${monthsDifference} months ago`;
    }
  }

  // 12달 이상일 때
  const yearsDifference = Math.floor(monthsDifference / 12); // 몇년지났나 계산
  return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
}

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
