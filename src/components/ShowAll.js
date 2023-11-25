import { useState, useEffect } from "react";
import "./ShowAll.css";

function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "ko-KR",
    options
  );
  return formattedDate;
}

function ShowAll() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        setFolderData(data.folder);
      } catch (error) {
        console.error("Folder data error", error);
      }
    };
    fetchData();
  }, []);

  const calculateTimeDiff = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = Math.floor((currentTime - createdTime) / 1000);

    const minutes = Math.floor(timeDiff / 60);
    const hours = Math.floor(timeDiff / 3600);
    const days = Math.floor(timeDiff / (3600 * 24));
    const months = Math.floor(timeDiff / (3600 * 24 * 30));
    const years = Math.floor(timeDiff / (3600 * 24 * 30 * 12));

    if (timeDiff < 120) {
      return "1 minute ago";
    } else if (minutes <= 59) {
      return `${minutes} minutes ago`;
    } else if (timeDiff < 3600) {
      return "1 hour ago";
    } else if (hours <= 23) {
      return `${hours} hours ago`;
    } else if (timeDiff < 3600 * 24) {
      return "1 day ago";
    } else if (days <= 30) {
      return `${days} days ago`;
    } else if (timeDiff < 3600 * 24 * 30) {
      return "1 month ago";
    } else if (months <= 11) {
      return `${months} months ago`;
    } else if (timeDiff < 3600 * 24 * 30 * 12) {
      return "1 year ago";
    } else {
      const calculatedYears = Math.floor(months / 12);
      return `${calculatedYears} years ago`;
    }
  };

  return (
    <div className="card-content">
      {folderData && folderData.links && (
        <ul>
          {folderData.links.map((link) => (
            <li key={link.id} className="card">
              <a href={link.url} target="_blank">
                {link.imageSource && <img src={link.imageSource} />}
                <p className="timeDiff">{calculateTimeDiff(link.createdAt)}</p>
                <p className="title">{link.title}</p>
                <p className="date">{formatDate(link.createdAt)}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowAll;
