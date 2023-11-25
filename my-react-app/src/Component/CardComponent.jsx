import React from 'react';


export default function CardComponent({img , time , text , years}) {
  return (
      <div className='CardBox'>
      <div className='CardTextBox'>
      <img src={img} alt="카드 이미지" className='CardImg'/>
        <p className='CardTextTime'>{time}</p>
        <p className='CardTextDescription'>{text}</p>
        <p className='CardTextYears'>{years}</p>
        </div>
      </div>

  );
}


