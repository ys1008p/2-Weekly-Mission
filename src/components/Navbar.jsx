import React from 'react';
import useGetData from '../hooks/useGetData';
import Logo from './Logo';
import Profile from './Profile';
import SignButton from './SignButton';
import './Navbar.css';

export default function Navbar() {
  const [loading, error, user] = useGetData('sample/user');

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Logo />
        {user ? <Profile user={user} /> : <SignButton />}
      </div>
    </nav>
  );
}
