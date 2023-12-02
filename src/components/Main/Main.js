import "./Main.css";
import Card from "./Card";
import Search from "./Search";

function Main({ folderLinks }) {
  return (
    <div className="main">
      <Search />
      <Card folderLinks={folderLinks} />
    </div>
  );
}

export default Main;
