import MainLinkList from "./MainLinkList";
import search from "../../../images/shared/search.svg";
import "./Main.css";

const MainSearchBox = ({ className }) => (
  <form className={className}>
    <button className="search-img">
      <img src={search} alt="search"></img>
    </button>
    <input className="search-bar" placeholder="링크를 검색해 보세요." />
  </form>
);

function Main({ links }) {
  return (
    <main>
      <MainSearchBox className="search" />{" "}
      <ul className="cards">
        {links?.map((item) => {
          return (
            <li className="card" key={item.id}>
              <MainLinkList item={item} target="_blank" rel="noreferrer" />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
