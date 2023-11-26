import { useEffect, useState } from "react";
import "./Header.css";

function HeaderFoloderSection() {
  // 폴더 데이터를 담을 State
  const [folderData, setFolderData] = useState({});

  // 사이드 이펙트 처리 & 데이터 GET
  useEffect(() => {
    async function getFolerData() {
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await res.json();
        setFolderData(data);
      } catch (e) {
        console.log("에러발생 :" + e);
        alert("저장된 데이터를 불러오는중 에러가 발생하였습니다.");
      }
    }

    getFolerData();
  }, []);

  //이름 추상화
  const folderName = folderData.folder?.name;
  const ownerName = folderData.folder?.owner?.name;
  const ownerImg = folderData.folder?.owner?.profileImageSource;

  // 데이터 확인용
  // console.log(folderData);
  // console.log("폴더데이터 네임 :" + folderData.folder.name);
  // console.log("폴더데이터 이름 :" + folderData.folder.owner.name);
  // console.log(
  //   "폴더데이터 이미지 :" + folderData.folder.owner.profileImageSource
  // );

  return (
    <section className="header-section">
      <img src={ownerImg} alt="folderImg" className="header-section-ownerImg" />
      <p className="header-section-ownerName">{ownerName}</p>
      <h2 className="header-section-folderName">{folderName}</h2>
    </section>
  );
}

export default HeaderFoloderSection;
