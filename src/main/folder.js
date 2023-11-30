import search from "../images/search.svg";
import React, { useEffect, useState } from "react";
import { folderInfo } from "../api/folder";

const FolderItem = ({ createdAt, url, title, description, imageSource }) => {
  const currentDate = new Date();
  const folderDate = new Date(createdAt);
  const diffDate = currentDate - folderDate;

  const diffDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffDate / (1000 * 60 * 60));
  const diffMinute = Math.floor(diffDate / (1000 * 60));
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  createdAt = `${folderDate.getFullYear()}. ${folderDate.getMonth()}. ${folderDate.getDate()}`;

  let createdAtDiff = "";
  if (diffYear === 1) {
    createdAtDiff = "1 year ago";
  } else if (diffYear > 1) {
    createdAtDiff = `${diffYear} years ago`;
  } else if (diffMonth === 1) {
    createdAtDiff = "1 month ago";
  } else if (diffMonth > 1) {
    createdAtDiff = `${diffMonth} months ago`;
  } else if (diffDay <= 30) {
    createdAtDiff = `${diffDay} days ago`;
  } else if (diffDay < 1) {
    createdAtDiff = "1 day ago";
  } else if (diffHour <= 23) {
    createdAtDiff = `${diffHour} hours ago`;
  } else if (diffHour < 1) {
    createdAtDiff = "1 hour ago";
  } else if (diffMinute <= 59) {
    createdAtDiff = `${diffMinute} minutes ago`;
  } else if (diffMinute < 2) {
    createdAtDiff = "1 minute ago";
  }
  return (
    <div className="section__folder_content">
      <a href="/" target="_blank">
        <img
          src={imageSource}
          alt={imageSource}
          className="section__folder_image"
        ></img>
      </a>
      <div className="section__folder_text_wrap">
        <span className="folder_createAt_text">{createdAtDiff}</span>
        {/* <span className="folder_title_text">{title}</span> */}
        <span className="folder_description_text">{description}</span>
        {/* <span className="folder_createAt_text">{url}</span> */}
        <span className="folder_createAt_text">{createdAt}</span>
      </div>
    </div>
  );
};

const FolderSearch = () => {
  return (
    <div id="folder_search_wrap">
      <img src={search} alt="search" id="searchLogo"></img>
      <span id="folder__search_text">링크를 검색해 보세요.</span>
    </div>
  );
};

function Folder() {
  const [folderItems, setFolderItems] = useState([]);

  useEffect(() => {
    const folderData = async () => {
      const { folder } = await folderInfo();
      setFolderItems(folder.links);
    };

    folderData();
  }, []);

  return (
    <article className="article__folder_layout">
      <section className="section__folder_wrap">
        <FolderSearch />

        <div className="section__folder_content-grid">
          {folderItems.map(
            ({ id, createdAt, url, title, description, imageSource }) => {
              return (
                <FolderItem
                  key={id}
                  createdAt={createdAt}
                  url={url}
                  title={title}
                  description={description}
                  imageSource={imageSource}
                />
              );
            }
          )}
        </div>
      </section>
    </article>
  );
}

export default Folder;
