import React from "react";
import CardComponent from "./CardComponent";
import ImgCard1 from '../images/Card1.png'
import ImgCard2 from '../images/Card2.png'
import ImgCard3 from '../images/Card3.png'
import ImgCard4 from '../images/Card4.png'
import ImgCard5 from '../images/Card5.png'
import ImgCard6 from '../images/Card6.png'
import ImgCard7 from '../images/Card7.png'
import ImgCard8 from '../images/Card8.png'
import ImgCard9 from '../images/Card9.png'



export default function MainCardContainer() {
  const TextTime = '10 minutes ago';
  const TextDescription = `Lorem ipsum dolor sit amet 
  consectetur. Metus amet habitant nunc 
  consequat. Tldkd`;
  const Years = new Date();
  const TextYears = `${Years.getFullYear()}. ${Years.getMonth() + 1}. ${Years.getDate()}`;

  return (
    <div className="MainCardContainer">
      <div className="MainCardBox">
        <CardComponent 
        img = {ImgCard1}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img = {ImgCard2}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img ={ImgCard3}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
      </div>
      <div className="MainCardBox">
      <CardComponent 
        img ={ImgCard4}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img ={ImgCard5}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img ={ImgCard6}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
      </div>
      <div className="MainCardBox">
      <CardComponent 
        img ={ImgCard7}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img ={ImgCard8}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
        <CardComponent 
        img ={ImgCard9}
        time = {TextTime}
        text = {TextDescription}
        years = {TextYears}
        />
      </div>
    </div>
  );
}
