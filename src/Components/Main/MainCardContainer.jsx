import React, { useEffect, useState } from "react";
import { LoginProfile } from "../../api";
import NullImg from "../../images/logo.svg";
import "../../CSS/Landing.css";

function timeAgo(timestamp) {
  const now = new Date();
  const seconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  switch (true) {
    case seconds < 120:
      return "1 minute ago";
    case minutes < 60:
      return `${minutes} minutes ago`;
    case hours < 24:
      return "1 hour ago";
    case days < 30:
      return `${days} days ago`;
    case months < 12:
      return `${months} months ago`;
    case years === 1:
      return "1 year ago";
    case years > 1:
      const roundedYears = Math.floor(years);
      return `${roundedYears} years ago`;
    default:
      return "Just now";
  }
}

export default function MainCardContainer() {
  const [folderData, setFolderData] = useState(null);

  const fetchData = async () => {
    try {
      const folderResponse = await LoginProfile();
      setFolderData(folderResponse.folder);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="CardBoxContainer">
      {folderData && folderData.links && folderData.links.length > 0
        ? folderData.links.map((item, index) => (
            <div key={index} className="CardBox">
              <a href={item.url} alt="targetUrl">
                <img
                  src={item.imageSource || NullImg}
                  alt="이미지"
                  className="CardImg"
                />
                <div className="CardTextBox">
                  <p className="CardUpLoadTime">
                    {timeAgo(new Date(item.createdAt))}
                  </p>
                  <p className="CardTextDescription">{item.description}</p>
                  <p className="CardTextYears">{item.createdAt.slice(0,10)}</p>
                </div>
              </a>
            </div>
          ))
        : null}
    </div>
  );
}
