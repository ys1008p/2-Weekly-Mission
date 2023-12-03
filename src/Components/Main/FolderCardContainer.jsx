import React, { useEffect, useState } from "react";
import { FolderLoginProfile } from "../../api";
import KebabIcon from "../../images/kebab.svg";
import StarIcon from "../../images/star.svg";
import NullImg from "../../images/logo.svg"
import "../../CSS/Folder.css";

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

export default function FolderCardContainer() {
  const [folderData, setFolderData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await FolderLoginProfile();
      setFolderData(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="FolderCardBoxContainer">
      {folderData? folderData?.map((link) => (
        <div key={link} className="FolderCardBox">
          <a href={link.url} alt="targetUrl">
            <img
              src={link.image_source || NullImg}
              alt="이미지"
              className="FolderCardImg"
            />
            <button className="StarBtn">
              <img src={StarIcon} alt="Star" className="StarImg" />
            </button>
            <div className="FolderCardTextBox">
              <p className="FolderCardUpLoadTime">
                {timeAgo(new Date(link.created_at))}
                <button className="KebabBtn">
                  <img src={KebabIcon} alt="Kebab" />
                </button>
              </p>
              <p className="FolderCardTextDescription">{link.description}</p>
              <p className="FolderCardTextYears">{link.created_at}</p>
            </div>
          </a>
        </div>
      ))
      
      :<div className="FolderNullContainer"> 
        <p>저장된 링크가 없습니다.</p>
      </div>}
    </div>
  );
}
