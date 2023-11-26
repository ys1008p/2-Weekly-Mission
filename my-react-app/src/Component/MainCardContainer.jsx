import React, { useEffect, useState } from "react";
import { LoginProfile } from "../api";
import NULL_IMG from '../images/logo.svg'
function timeAgo(timestamp) {
  const now = new Date();
  const seconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 120) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return "1 hour ago";
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years === 1) {
    return "1 year ago";
  } else if (years > 1) {
    const roundedYears = Math.floor(years);
    return `${roundedYears} years ago`;
  }
  return "Just now";
}

export default function MainCardContainer() {
  const [folderData, setFolderData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const folderResponse = await LoginProfile();
      setFolderData(folderResponse.folder);
    };
    fetchData();
  }, []);

  return (
    <div className="CardBoxContainer">
      {folderData && folderData.links && folderData.links.length > 0 ? (
        folderData.links.map((item, index) => (
          <div key={index} className="CardBox">
            <a href={item.url} target="_blank" alt='targetUrl'>
              <img src={item.imageSource} alt="이미지" className="CardImg" />
              <div className="CardTextBox">
                <p className="CardUpLoadTime">
                  {timeAgo(new Date(item.createdAt))}
                </p>
                <p className="CardTextDescription">{item.description}</p>
                <p className="CardTextYears">{item.createdAt}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <p>{null}</p>
      )}
    </div>
  );
}
