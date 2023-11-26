import codeit from "../assets/codeit.svg";
import star from "../assets/star-fill.svg";
import "../css/FirstSection.css";

function FirstSection() {
  return (
    <div className="first-page">
      <img src={codeit} alt="codeit" className="first-page__logo" />
      <p className="first-page__tag">@코드잇</p>
      <div className="first-page__fav">
        <img src={star} alt="star" />
        <h2>즐겨찾기</h2>
      </div>
    </div>
  );
}

export default FirstSection;
