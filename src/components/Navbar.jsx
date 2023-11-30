import React from 'react';
import useGetData from '../hooks/useGetData';
import Logo from './Logo';
import Profile from './Profile';
import SignButton from './SignButton';
import './Navbar.css';

export default function Navbar() {
  const [loading, error, user] = useGetData('user');

  if (loading) return <div>loading..</div>;

  // todo: 왜 에러 메시지가 나오지 않을까..?
  if (error) return <p>{error}</p>;

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Logo />
        {/* todo: fetch 전에도 로그인 버튼이 나오는 문제 */}
        {user ? <Profile user={user} /> : <SignButton />}
      </div>
    </nav>
  );
}
