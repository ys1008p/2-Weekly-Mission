import React from 'react';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Youtube from '../images/youtube.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <Copyright>{`©codeit - 2023`}</Copyright>
        <Policy />
        <SNS />
      </div>
    </div>
  );
}

function Copyright({ children }) {
  return <p className='copyright'>{children}</p>;
}

function Policy() {
  return (
    <ul className='policy-links'>
      <li>
        <a className='policy-link' href='/privacy'>
          Privacy Policy
        </a>
      </li>
      <li>
        <a className='policy-link' href='/faq'>
          FAQ
        </a>
      </li>
    </ul>
  );
}

function SNS() {
  return (
    <ul className='sns-container'>
      <li>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='sns-icon'
            src={Facebook}
            alt='페이스북 홈페이지로 이동하는 페이스북 아이콘'
          />
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='sns-icon'
            src={Twitter}
            alt='트위터 홈페이지로 이동하는 트위터 아이콘'
          />
        </a>
      </li>
      <li>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='sns-icon'
            src={Youtube}
            alt='유튜브 홈페이지로 이동하는 유튜브 아이콘'
          />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='sns-icon'
            src={Instagram}
            alt='인스타그램 홈페이지로 이동하는 인스타그램 아이콘'
          />
        </a>
      </li>
    </ul>
  );
}
