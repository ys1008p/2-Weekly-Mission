import "./FolderList.css";
import DefaultImage from "./images/og_tag.png";
import Magnifier from "./images/Search.svg";

function timeComparison(value) {
  let currentTime = new Date();
  let FolderTime = value.createdAt;
  let realFOlderTIme = new Date(FolderTime);
  let currentTimeStamp = currentTime.getTime();
  let FolderTimeStamp = realFOlderTIme.getTime();
  // console.log(FolderTimeStamp);
  let timeDiff = currentTimeStamp - FolderTimeStamp;
  if (timeDiff < 2000) {
    return "1 minute ago";
  } else if (timeDiff < 3600000) {
    return `${Math.floor(timeDiff / (1000 * 60))} minutes ago`;
  } else if (timeDiff < 86400000) {
    return `${Math.floor(timeDiff / (1000 * 60 * 60))} hours ago`;
  } else if (timeDiff < 2628000000) {
    return `${Math.floor(timeDiff / (1000 * 60 * 60 * 24))} days ago`;
  } else if (timeDiff < 31104000000) {
    return `${Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30))} months ago`;
  } else if (timeDiff >= 31104000000) {
    return `${Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12))} year ago`;
  }
}
const realTime = function (item) {
  let GetRealTime = new Date(item.createdAt);
  return `${GetRealTime.getFullYear()}. ${
    GetRealTime.getMonth() + 1
  }. ${GetRealTime.getDate()}`;
};

function FolderGrid({ item }) {
  return (
    <a className="folder" href={item.url} target="_blank">
      <img
        className="folder-img"
        src={item.imageSource || DefaultImage}
        alt={item.title}
      />
      <div className="folderDescription">
        <p className="timeStamp">{timeComparison(item)}</p>
        <p className="folderDescriptionMore">{item.description}</p>
        <p className="postTime">{realTime(item)}</p>
      </div>
    </a>
  );
}

function FolderList({ items }) {
  // console.log(items);
  return (
    <div className="folderBody">
      <div className="search">
        <input
          type="text"
          className="searchInput"
          placeholder="링크를 검색해 보세요"
        />
        <img src={Magnifier} className="searchIcon" />
      </div>
      <div className="grids">
        {items.links.map((item) => {
          return (
            <li className="folderParents">
              <FolderGrid item={item} />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default FolderList;
