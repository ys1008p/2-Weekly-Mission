import searchImg from "../assets/Search.svg";
import "../css/Main.css";

function CreateDate(data) {
  // console.log(time);
  const createdAtDate = new Date(data.time);
  const year = createdAtDate.getFullYear();
  const month = createdAtDate.getMonth() + 1;
  const day = createdAtDate.getDate();

  return `${year}.${month}.${day}`;
}

function CalculateTime(data) {
  const creationDate = new Date(data.time);
  const currentDate = new Date();
  const diffInSeconds = Math.floor((currentDate - creationDate) / 1000);

  if (diffInSeconds < 120) {
    return "1 minute ago";
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (diffInSeconds < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }
}

function MainCardItem({ fileList }) {
  const { createdAt, imageSource, description, url } = fileList;
  const handleclick = () => {
    window.open(url);
  };
  return (
    <div onClick={handleclick}>
      <div className="listContentImg">
        <img src={imageSource} />
      </div>
      <div className="listContentText">
        <p className="textOne">
          <CalculateTime time={createdAt} />
        </p>
        <p className="textTwo">{description}</p>
        <p className="textThree">
          <CreateDate time={createdAt} />
        </p>
      </div>
    </div>
  );
}

export default function Main({ fileImgCardItems }) {
  console.log(fileImgCardItems);

  return (
    <main>
      <div className="mainCenter">
        <div className="mainTop">
          <img src={searchImg} />
          <p>링크를 검색해 보세요.</p>
        </div>
        <ul className="mainBottom">
          {fileImgCardItems.map((fileList) => {
            return (
              <li key={fileList.id}>
                <MainCardItem fileList={fileList} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
