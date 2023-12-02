import { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import "../styles/Bookmark.css";

function Bookmark() {
  const [profileData, setProfileData] = useState(null);
 const [page, setPage] = useState(1);
 
 useEffect(()=>{
  fetch(`https://bootcamp-api.codeit.kr/api/sample/folder?page=${page}`)
  .then((response)=>response.json())
.then((folderItem)=>{ 
  const {folder} = folderItem;
  return {folder}}
 )
 .then(({folder})=>{
  const image = folder.owner.profileImageSource
  const name = folder.owner.name
  return image
 })

.then((data)=>setProfileData(data));
 }, [page])
 
 {
  return (
    <section className="account-section">
      <div className="account-box">
        <img className="account-image" src={profileData} alt="avatar" />
        <p className="acount-nickname">@코드잇</p>
        <h1 className="title-bookmark">⭐️ 즐겨찾기</h1>
      </div>
    </section>
  );
}
}

export default Bookmark;
