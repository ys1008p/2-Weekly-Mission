import "../styles/CardList.css";
import { useEffect, useState } from "react";
import { timeAgo } from "../utils/timeAgo";
import defaultImage from "../assets/default.png"
import kebab from '../assets/kebab.png'
import { getCards } from "../api";
import KebabClicked from "./KebabClicked";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function CardListItem({item}){

  const {created_at, description, image_source, url, title  } = item;
  const [kebabClicked, setKebabClicked]= useState(false);

  const handleClick = () => {
    setKebabClicked(!kebabClicked)
  }

  return (
 
<div className ="card" url={url}>

                       <div className= "card-image-box">
                        <img src={image_source || defaultImage} alt={title} />
                      </div>
                      <div className="card-text">
                      <div className="kebab-display">
                      
                        <p className="time-age">{timeAgo(created_at)}</p>
                        <button className="kebab-icon" onClick={handleClick} >
                        <img src={kebab} alt="kebab"/>
                        {kebabClicked === true ?  <KebabClicked/> : null}
                        </button>
                    
                      </div>
                      <div>
                        <h2 className="card-description">
                            {description}
                        </h2>
                        <p className="time-createdAt">{formatDate}</p>
                      </div>
                       
                      </div>
                   
                    </div> 

  )
}


function  CardList() {
  const [links, setLinks] = useState([]);
  const [imageSource, setImageSource] = useState();

  const userLink = async () => {

    const result = await getCards();
    const {data} = await result;
    setLinks(data);
    setImageSource(imageSource);

  };

  useEffect(() => {

  }, [links]);

  useEffect(() => {
    userLink();
  }, []);

  return(
        <div className="card-list">
            {links?.slice(0,9).map((item, id)=>{
              return (
                <CardListItem item={item} key={id}/>
              )
            })}
            </div>
  )
}

export default CardList

