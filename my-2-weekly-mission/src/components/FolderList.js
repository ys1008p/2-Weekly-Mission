import "./FolderList.css";

function timeComparison(value) {
  let currentTime = new Date();
  let FolderTime = value.createdAt;
  let realFOlderTIme = new Date(FolderTime);
  let currentTimeStamp = currentTime.getTime();
  let FolderTimeStamp = realFOlderTIme.getTime();
  console.log(FolderTimeStamp);
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

function FolderGrid({ item }) {
  // console.log(item);
  return (
    <div>
      <img className="folder-img" src={item.imageSource} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{timeComparison(item)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function FolderList({ items }) {
  return (
    <div>
      <div></div>
      <div className="grids">
        {items.links.map((item) => {
          return (
            <li key={item.id}>
              <FolderGrid item={item} />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default FolderList;
