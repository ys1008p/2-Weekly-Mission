import "./Style.css";
import Card from "./Card";
import search from '../assets/search.svg'
import { useState, useEffect } from "react";

function Main() {
  const [linksData, setLinksData] = useState();
  const fetchLinks = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const data = await response.json();
      const links = data.folder.links;
      setLinksData(links);
    } catch (error) {
      console.error("링크 데이터를 불러오는 중 에러 발생:", error);
    }
  };
  
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <main className="MainContainer">
      <div className="Finder">
        <input className="Link" type="text" value="링크를 검색해보세요."/>
        <img className="SearchIcon" src={search} alt="돋보기 아이콘"/>
      </div>
      <div className="CardDataContainer">
      <Card data={linksData} />
      </div>
    </main>
  );
}

export default Main;
