import { formatDate, getTimeDifference } from "../utility/date";
import "./Main.css";

function Card({ data }) {
  return (
    <a href={data.url}>
      <div className="card-item-container">
        {/* 이미지가 없을시 대체 이미지 */}
        <div className="card-img-container">
          <img
            src={
              data.imageSource ||
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            alt="링크 이미지"
            className="card-img"
          />
        </div>
        <div className="card-info-container">
          <p className="card-last-updated-date">
            {getTimeDifference(data.createdAt)}
          </p>
          <p className="card-description">{data.description}</p>
          <p className="card-createdAt">{formatDate(data.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
