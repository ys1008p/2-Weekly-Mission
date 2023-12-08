import share from "../images/share.svg";
import pen from "../images/pen.svg";
import wastebasket from "../images/wastebasket.svg";
import "../css/ListTitle.css";
function ListTitle({ title }) {
  return (
    <div className="title-container">
      <div>
        <span className="title">{title ? `${title}` : "전체"}</span>
      </div>
      <div>
        <img src={share} alt="공유" />
        공유
        <img src={pen} alt="연필" />
        이름
        <img src={wastebasket} alt="휴지통" />
        변경
      </div>
    </div>
  );
}
export default ListTitle;
