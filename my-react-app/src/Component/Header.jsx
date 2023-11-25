import React from 'react';
import ImgHeader from '../images/white.svg'
import '../CSS/Landing.css'

export default function Header() {
  return (
    <div className="HeaderContainer">
    <div className='HeaderBox'>
      <img src={ImgHeader} alt="코드잇 이미지" className='ImgHeader' />
      <p className='HeaderText'>@코드잇</p>
      <p className='HeaderDescription'>⭐️ 즐겨찾기</p>
      </div>
    </div>
  );
}

