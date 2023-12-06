import MainLink from "./MainList";
import "../styles/card.css";

function Main({ links }) {
  //porps를 내려줄때 item={item 말고} {...item}으로 가능하군요..!
  return links?.map((item) => <MainLink {...item} />);
}

export default Main;
