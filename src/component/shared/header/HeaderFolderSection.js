import { useEffect, useState } from "react";
import "./Header.css";
import { getFolderData } from "../../api/getFolderData";

function HeaderFoloderSection() {
  const [folderData, setFolderData] = useState({});

  useEffect(() => {
    getFolderData()
      .then((result) => {
        setFolderData(result);
      })
      .catch(() => alert("폴더 정보를 불러오는중 에러가 발생하였습니다."));
  }, []);

  //이름 추상화
  const folderName = folderData.folder?.name;
  const ownerName = folderData.folder?.owner?.name;
  const ownerImg = folderData.folder?.owner?.profileImageSource;

  return (
    <section className="header-section">
      <img src={ownerImg} alt="folderImg" className="header-section-ownerImg" />
      <p className="header-section-ownerName">{ownerName}</p>
      <h2 className="header-section-folderName">{folderName}</h2>
    </section>
  );
}

export default HeaderFoloderSection;
