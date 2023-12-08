import nodata from "../images/nonedata.svg";
import "../css/LinkCard.css";

const TIME_MILISECONDS = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  month: 1000 * 60 * 60 * 24 * 31,
  year: 1000 * 60 * 60 * 24 * 31 * 12,
};
function LinkCard({ linkData }) {
  const { links } = linkData;
  return <LinksComponent links={links} />;
}
function FolderCard({ linkData }) {
  const transFormData = linkData.map((item) => {
    if (item.created_at) {
      item.createdAt = item.created_at;
      delete item.created_at;
    }
    if (item.image_source) {
      item.imageSource = item.image_source;
      delete item.image_source;
    }
    return item;
  });
  return transFormData.length ? (
    <LinksComponent links={transFormData} />
  ) : (
    <div className="noneData">저장된 데이터가 없습니다.</div>
  );
}

function LinksComponent({ links }) {
  const getElapsedTime = ({ createdAt }) => {
    const now = new Date();
    const elapsedTime = now - new Date(createdAt);
    const { minute, hour, day, month, year } = TIME_MILISECONDS;
    if (year * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / year)} year ago`;
    }
    if (year <= elapsedTime) {
      return `1 year ago`;
    }
    if (month * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / month)} month ago`;
    }
    if (month <= elapsedTime) {
      return `1 month ago`;
    }
    if (day * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / day)} days ago`;
    }
    if (day <= elapsedTime) {
      return `1 day ago`;
    }
    if (hour * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / hour)} hours ago`;
    }
    if (hour <= elapsedTime) {
      return `1 hour ago`;
    }
    if (minute * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / minute)} minutes ago`;
    }
    return `1 minute ago`;
  };
  const formatDate = (dateString) => {
    const date = dateString.split("T")[0];
    return `${date}`;
  };
  const alt = `${links?.title}의 로고`;
  return (
    <div className="card">
      {links.map((link) => (
        <a
          href={link.url}
          className="card-container"
          key={link.id}
          target="_blank"
        >
          <div className="card-container-box">
            {link?.imageSource ? (
              <img src={link.imageSource} alt={alt} />
            ) : (
              <img src={nodata} alt="프로필 이미지" />
            )}
          </div>
          <div className="card-container-text">
            <span className="elapsedTime">{getElapsedTime(link)}</span>
            <p>{link.description}</p>
            <span className="created-At">{formatDate(link.createdAt)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export { LinkCard, FolderCard };
