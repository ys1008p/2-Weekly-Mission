import React from 'react';
import './Profile.css';

export default function Profile({ user }) {
  return (
    <div className='user'>
      <img className='user-image' src={user['image_source']} alt={user.name} />
      <span className='user-email'>{user.email}</span>
    </div>
  );
}
