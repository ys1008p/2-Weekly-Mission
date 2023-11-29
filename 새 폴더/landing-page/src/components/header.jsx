import { useEffect, useState } from "react";
import "./header.css";
function Header() {
  const [foldersData, setFoldersData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://bootcamp-api.codeit.kr/api/sample/folder?page=${page}`)
      .then((response) => response.json())
      .then((data) => setFoldersData(data));
  }, [page]);
  return (
    <header>
      <div className="header">
        {" "}
        <img
          className="flodrProfileImg"
          src={
            foldersData?.image_url ||
            "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png"
          }
          alt="폴더이미지"
        />
        <p className="floderOwnerName">{foldersData?.folder.owner.name}</p>
        <p className="folderName">{foldersData?.folder.name}</p>
      </div>
    </header>
  );
}
export default Header;
