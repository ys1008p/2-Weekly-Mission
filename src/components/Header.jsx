import React from 'react';
import './Header.css';

export default function Header({ folderName, owner }) {
  return (
    <header className='hero'>
      <img
        className='hero-image'
        src={owner.profileImageSource}
        alt='사용자 프로필'
      />
      <p className='hero-owner-name'>{owner.name}</p>
      <p className='hero-folder-name'>{folderName}</p>
    </header>
  );
}
