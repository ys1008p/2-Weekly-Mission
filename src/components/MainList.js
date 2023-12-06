import noImageSource from "../img/logo.svg";

// 파라미터로 createdAt값을 받아서 쓴다고 생각을 못했다.
function createdAtBirth(value) {
  const time = new Date(value);
  const yearMonthDay = `${time.getFullYear()}. ${
    time.getMonth() + 1
  }. ${time.getDate()}`;
  return yearMonthDay;
}

function productionDate(value) {
  const currentTime = Date.now();
  const createdAtTime = new Date(value).getTime();
  const timeDiff = currentTime - createdAtTime;
  const minute = timeDiff / 1000 / 60;
  const hour = timeDiff / 1000 / 60 / 60;
  const day = timeDiff / 1000 / 60 / 60 / 24;
  const month = timeDiff / 1000 / 60 / 60 / 24 / 30;
  const year = timeDiff / 1000 / 60 / 60 / 24 / 30 / 12;

  if (year >= 1) {
    return year < 2 ? "1 year ago" : `${Math.floor(year)} years ago`;
  } else if (month >= 1) {
    return month < 2 ? "1 month ago" : `${Math.floor(month)} months ago`;
  } else if (day >= 1) {
    return day < 2 ? "1 day ago" : `${Math.floor(day)} days ago`;
  } else if (hour >= 1) {
    return hour < 2 ? "1 hour ago" : `${Math.floor(hour)} hours ago`;
  } else {
    return minute < 2 ? "1 minute ago" : `${Math.floor(minute)} minutes ago`;
  }
}

function MainLink({ createdAt, url, imageSource, description, id }) {
  // title 파일도 디스크럭션 가능 에러 자꾸 떠서 일단 삭제.

  // 이렇게 하는게 효율적인가 아니면 함수를 벗기는게 효율적인가 뭔가 밑의 return에는 함수를부르는게 영 어색하고 이상한데

  return (
    <li className="card" key={id}>
      <a href={url} target="_blank" className="cardATag" rel="noreferrer">
        <div className="imgHover">
          {imageSource ? (
            <img src={imageSource} className="cardImgtag" alt="cardNews" />
          ) : (
            <img src={noImageSource} className="cardImgtag" alt="cardNews" />
          )}
        </div>
        <div className="textLine">
          <p>{productionDate(createdAt)}</p>
          <h1 className="cardDescripTag">{description}</h1>
          <p className="cardDateTag">{createdAtBirth(createdAt)}</p>
        </div>
      </a>
    </li>
  );
}
export default MainLink;
