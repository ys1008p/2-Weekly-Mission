import React from 'react';
import './Profile.css';
import UserImage from '../images/user.svg';

// 구조분해로 가져오면 왜 자꾸 undefined일까..?
export default function Profile({ user }) {
  return (
    <div className='user'>
      <img className='user-image' src={UserImage} alt={user.name} />
      <span className='user-email'>{user.email}</span>
    </div>
  );
}
