import cardDefualtImg from '../images/card_default.png';
import '../styles/Cards.css'

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;

function formateDate(value) {
  const date = new Date(value)
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
}

function sinceCreatedDate(value) {
  const createdDate = new Date(value);
  const date = new Date();

  let timeDiff = date - createdDate;
  timeDiff = timeDiff / 1000;

  if (timeDiff < 2 * MINUTE) return "1 minute ago";
  if (timeDiff < HOUR)
    return `${Math.floor(timeDiff / MINUTE)} minutes ago`;
  if (timeDiff < 2 * HOUR) return "1 hour ago";
  if (timeDiff < DAY) return `${Math.floor(timeDiff / HOUR)} hours ago`;
  if (timeDiff < 2 * DAY) return "1 day ago";
  if (timeDiff < MONTH) return `${Math.floor(timeDiff / DAY)} days ago`;
  if (timeDiff < 2 * MONTH) return "1 month ago";
  if (timeDiff < YEAR)
    return `${Math.floor(timeDiff / MONTH)} months ago`;
  if (timeDiff < 2 * YEAR) return "1 year ago";
  if (timeDiff >= 2 * YEAR) return `${timeDiff / YEAR} years ago`;
}


function Cards({ folderProfile }) { 
  const { links } = folderProfile;

  return (
    <ul className="card-list">
      {links.map((item) => { 
        return (
          <li className="card-item" key={item.id}>
            <a className="card-link" href={item.url} target="_blank">
              <div className="card-image">
                {<img src={item.imageSource || cardDefualtImg} alt="썸네일 이미지" />}
              </div>
              <div className="card-text">
                <span className="created">{sinceCreatedDate(item.createdAt)}</span>
                <button className="button-kebab" type="button"></button>
                <p className="description">{item.description}</p>
                <span className="date">{formateDate(item.createdAt)}</span>
              </div>
            </a>
            <button className="button-bookmark filled" type="button"></button>
          </li>
        )
      })}
    </ul>
  )
}

export default Cards;


