import style from '../styles/Footer.module.css';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';

const snsReferenceLinks = [
  {
    name:'facebook',
    iconImg:facebook,
    link:'https://www.facebook.com/?locale=ko_KR',
  },
  {
    name:'twitter',
    iconImg:twitter,
    link:'https://twitter.com/?lang=ko',
  },
  {
    name:'youtube',
    iconImg:youtube,
    link:'https://www.youtube.com/',
  },
  {
    name:'instagram',
    iconImg:instagram,
    link:'https://www.instagram.com/',
  }
]

const Icon = ({name, iconImg, link} :{ name:string, iconImg:string, link:string}) => {
  return(
    <a target='_blank' rel='noopener noreferrer' href={link}>
      <img src={iconImg} alt={name} className='icon'></img>
    </a>
  )
};

const Footer = () => {
  return(
    <footer className={`${style['footer']}`}>
      <div className={`${style['info']}`}>
        <p className={`${style['copyright']}`}>©codeit - 2023</p>
        <div className={`${style['privacy-faq']}`}>
          <a href="./privacy.html" className={`${style['privacy']}`}>Privacy Policy</a>
          <a href="./faq.html" className={`${style['faq']}`}>FAQ</a>
        </div>
        <div className={`${style['sns-reference-links']}`}>
          {snsReferenceLinks.map((reference) => <Icon key={reference.name} name={reference.name} iconImg={reference.iconImg} link={reference.link}></Icon>)}
        </div>
      </div>
    </footer>
  )
};

export default Footer;
