import noImage from "../assets/no-img-logo.svg";

const generateCreatedDate = (createAt) => {
  const createdDateAndTime = createAt.split("T");
  const date = createdDateAndTime[0].split("-");
  const time = createdDateAndTime[1].split(":");
  const createdYear = date[0];
  const generateCreatedMonth = () => {
    if (date[1].indexOf("0") === -1) {
      return date[1];
    } else {
      const singleDigitMonth = date[1].split("");
      return singleDigitMonth[1];
    }
  };
  const generateCreatedDay = () => {
    if (date[2][0] !== 0) {
      return date[2];
    } else {
      const singleDigitDay = date[2].split("");
      return singleDigitDay[2];
    }
  };
  const createdMonth = generateCreatedMonth();
  const createdDay = generateCreatedDay();
  const createdHours = time[0];
  const createdMinutes = time[1];
  return [createdYear, createdMonth, createdDay, createdHours, createdMinutes];
};

const calculateDateDiffWithCurrent = (date) => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const targetDate = generateCreatedDate(date);
  const targetYear = targetDate[0];
  const targetMonth = targetDate[1];
  const targetDay = targetDate[2];
  const targetHours = targetDate[3];
  const targetMinutes = targetDate[4];

  const current = new Date(year, month, day, hours, minutes);
  const target = new Date(targetYear, targetMonth, targetDay, targetHours, targetMinutes);
  const timeDiffResult = current.getTime() - target.getTime();
  return timeDiffResult;
};

const createTimePassedMessage = (date) => {
  const timeDiff = calculateDateDiffWithCurrent(date);
  const diffMinutes = Math.trunc(timeDiff / (1000 * 60));
  const diffHours = Math.trunc(timeDiff / (1000 * 60 * 60));
  const diffDays = Math.trunc(timeDiff / (1000 * 60 * 60 * 24));
  const diffMonths = Math.trunc(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.trunc(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12));

  if (diffMinutes < 2) {
    return "1 minute ago";
  }
  if (diffMinutes <= 59) {
    return `${diffMinutes} minute ago`;
  }
  if (diffMinutes >= 60 && diffHours < 2) {
    return "1 hour ago";
  }
  if (diffHours <= 23) {
    return `${diffHours} hour ago`;
  }
  if (diffHours >= 24 && diffDays < 2) {
    return "1 day ago";
  }
  if (diffDays <= 30) {
    return `${diffDays} days ago`;
  }
  if (diffDays >= 31 && diffMonths < 2) {
    return "1 month ago";
  }
  if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  }
  if (diffMonths >= 12 && diffYears < 2) {
    return "1 year ago";
  }
  if (diffYears >= 2) {
    return `${diffYears} years ago`;
  }
};

const Card = ({ item, handleCardClick }) => {
  const { createdAt, description, imageSource, url } = item;
  const createdDate = generateCreatedDate(createdAt).slice(0, 3).join(".");
  const timePassedMsg = createTimePassedMessage(createdAt);
  const onClick = () => handleCardClick(url);
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-box">
        {imageSource ? (
          <img className="card-image" src={imageSource} alt="about link" />
        ) : (
          <img className="no-card-image" src={noImage} alt="Link without imageSource" />
        )}
      </div>
      <div className="card-caption">
        <span className="time-msg">{timePassedMsg}</span>
        <p className="description">{description}</p>
        <p className="date-msg">{createdDate}</p>
      </div>
    </div>
  );
};
const CardList = ({ items, handleCardClick }) => {
  return (
    <div className="card-layout">
      {items?.map((item) => {
        return <Card key={item.id} item={item} handleCardClick={handleCardClick} />;
      })}
    </div>
  );
};
export default CardList;
