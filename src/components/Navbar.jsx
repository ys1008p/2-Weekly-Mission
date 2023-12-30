import React from 'react';
import useGetData from '../hooks/useGetData';
import Profile from './Profile';
import CTA from './CTA';
import LinkbraryLogo from '../images/logo.svg';
import styles from './Navbar.module.css';

export default function Navbar({ profileUrl, className }) {
  const [loading, error, user] = useGetData(profileUrl);

  if (loading) return <div>loading..</div>;
  if (error) return <p>{error}</p>;

  const userData = user?.data[0];

  return (
    <nav className={styles[`${className}`]}>
      <div className={styles.container}>
        <a href='/'>
          <img className={styles.logo} src={LinkbraryLogo} alt='로고' />
        </a>
        {user ? (
          <Profile user={userData} />
        ) : (
          <a href='/signin'>
            <CTA text='로그인' className='fixedWidth' />
          </a>
        )}
      </div>
    </nav>
  );
}
