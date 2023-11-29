import { useEffect, useState } from "react";
import { LoginProfile } from "./apj";
import "./body.css";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1} ${date.getDate()}`;
}
function BodyItem({ item }) {
  return (
    <div>
      <img className=" CardSize" src={item.imageSource} alt={item.id} />
      <p className="CardDiscription">{item.description}</p>
      <p className="CardDate">{formatDate(item.createdAt)}</p>
    </div>
  );
}

function Card({ data }) {
  return (
    <ul className=" Card">
      {data?.folder?.links.map((item) => (
        <li key={item.id}>
          <BodyItem item={item} />
        </li>
      ))}
    </ul>
  );
}

function Body() {
  const [linksData, setLinksData] = useState();
  const fetchData = async () => {
    const data = await LoginProfile();
    setLinksData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(linksData);

  return (
    <div>
      <div className="Section">
        <div className="InputContainer">
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M7.84442 13.8363C11.1539 13.8363 13.8368 11.1534 13.8368 7.84393C13.8368 4.53444 11.1539 1.85156 7.84442 1.85156C4.53493 1.85156 1.85205 4.53444 1.85205 7.84393C1.85205 11.1534 4.53493 13.8363 7.84442 13.8363Z' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M12.0122 12.3232L14.3616 14.6665' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E"
            alt="Search Icon"
            className="SearchIcon"
          />
          <input
            className="Input"
            type="text"
            placeholder="  링크를 검색해 보세요."
          />
        </div>
        <Card data={linksData}></Card>
      </div>
    </div>
  );
}
export default Body;
