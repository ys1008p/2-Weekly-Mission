import React from 'react';
import useGetData from '../hooks/useGetData';
import Profile from './Profile';
import SignButton from './SignButton';
import LinkbraryLogo from '../images/logo.svg';
import './Navbar.css';

export default function Navbar() {
  const [loading, error, user] = useGetData('sample/user');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/'>
          <img className='logo' src={LinkbraryLogo} alt='로고' />
        </a>
        {user ? (
          <Profile user={user} />
        ) : (
          <a href='/signin'>
            <SignButton text='로그인' />
          </a>
        )}
      </div>
    </nav>
  );
}
