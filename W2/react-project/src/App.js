// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { timeAgo } from "./utils/timeAgo";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Bookmark from "./components/Bookmark";
import "./styles/CardList.css";
import "./styles/App.css";
import "./styles/Global.css";
import defaultImage from "./assets/default.png"
import Sort from "./components/Sort"

//import CardList from "./components/CardList"


//1. 서버에서 데이터 가져오기. 폴더를 가져옴
async function getCards() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
  );
  const body = await response.json();

  return body;
}

function formatDate(value) {

  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function App() {
  // const [cardData, setCardData] = useState([])

  const [links, setLinks] = useState([]);
  // const [owner, setOwner] = useState([]);
  const [imageSource, setImageSource] = useState();
  //4. 꺼낼준비

  //2. 폴더의 데이터를 다루고싶어. folder.value를 구조분해로 가져와보기.
  const userLink = async () => {
   
    const { folder } = await getCards();
    const { links, imageSource } = folder;
 //3. 가져옴. 이제 상태에 따라 데이터를 동적으로 표현하기위해 useState사용. 그리고 무엇보다도 userLink 스코프에서 이 데이터를 가져다 쓰려면 useState필요

    setLinks(links);
    // setOwner(owner);
    setImageSource(imageSource);
  //5. 꺼냈지롱
  };

  // 랜딩시 보여줘야하므로 useEffect
  useEffect(() => {
    //console.log("links", links);
  }, [links]);

  // useEffect(() => {
  //   //console.log("owner", owner);
  // }, [owner]);


  useEffect(() => {
    userLink();
  }, []);

  return (
    <div>
      <Header />
      
      <Search />
      <Sort/>
      <div>
          <div>
            <div className="card-list">
                
                {/* 꺼냈으면 써야지 맵 꺼내어 */}
                {links?.map((links, i) => {
                  return (
                 
                    <div className ="card">
                      <div className= "card-image-box">
                        <img className="card-image" src={links.imageSource || defaultImage}
                          alt={links.title}/>
                      </div>
                      <div className="card-text" key={i}>
                        <p className="time-age">{timeAgo(links.createdAt)}</p>
                        <h2 className="card-description">
                            {links.description}
                        </h2>
                        <p className="time-createdAt">{formatDate(links.createdAt)}</p>
                      </div>
                    </div>
               
                  );
                })}

            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
