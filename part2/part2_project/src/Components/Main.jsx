import searchImg from "../img/Search.svg";
import CardsList from "./cardsList";
import "../css/Main.css";

const SearchBox = () => {
  return (
    <article className="searchContainer">
      <img className="searchImg" src={searchImg} alt="돋보기 사진" />
      <input id="searchBox" placeholder="링크를 검색해보세요" type="text" />
    </article>
  );
};
export default function Main({ cardData }) {
  return (
    <main>
      <SearchBox />
      <CardsList className="cardList" cardData={cardData} />
    </main>
  );
}
