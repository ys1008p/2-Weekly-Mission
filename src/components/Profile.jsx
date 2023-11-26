import React from 'react';
import './Profile.css';

export default function Profile({ user }) {
  return (
    <div className='user'>
      <img
        className='user-image'
        src={user.profileImageSource}
        alt={user.name}
      />
      <span className='user-email'>{user.email}</span>
    </div>
  );
}
