import React from 'react';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Youtube from '../images/youtube.svg';
import './Footer.css';

export default function Footer() {
  const snsList = SNSList.map(({ title, link, imageSrc, altMessage }) => (
    <li key={title}>
      <SNS link={link} imageSrc={imageSrc} altMessage={altMessage} />
    </li>
  ));

  return (
    <div className='footer'>
      <div className='footer-container'>
        <p className='copyright'>©codeit - 2023</p>
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
        <ul className='sns-container'>{snsList}</ul>
      </div>
    </div>
  );
}

function SNS({ link, imageSrc, altMessage }) {
  return (
    <a href={link} target='_blank' rel='noreferrer noopener'>
      <img className='sns-icon' src={imageSrc} alt={altMessage} />
    </a>
  );
}

const SNSList = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/',
    imageSrc: Facebook,
    altMessage: '페이스북 홈페이지로 이동하는 페이스북 아이콘',
  },
  {
    title: 'twitter',
    link: 'https://www.twitter.com/',
    imageSrc: Twitter,
    altMessage: '트위터 홈페이지로 이동하는 트위터 아이콘',
  },
  {
    title: 'youtube',
    link: 'https://www.youtube.com/',
    imageSrc: Youtube,
    altMessage: '유튜브 홈페이지로 이동하는 유튜브 아이콘',
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/',
    imageSrc: Instagram,
    altMessage: '인스타그램 홈페이지로 이동하는 인스타그램 아이콘',
  },
];
