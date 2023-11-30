import FacebookImg from '../../assets/akar-icons_facebook-fill.svg';
import InstagramImg from '../../assets/ant-design_instagram-filled.svg';
import TwitterImg from '../../assets/akar-icons_twitter-fill.svg';
import YoutubeImg from '../../assets/akar-icons_youtube-fill.svg';
import './Footer.css';

function Footer() {
  const SNS_INFO = [
    {
      snsName: 'facebook',
      link: 'https://www.facebook.com/',
      imgSource: FacebookImg,
    },
    {
      snsName: 'twitter',
      link: 'https://www.twitter.com/',
      imgSource: TwitterImg,
    },
    {
      snsName: 'youtube',
      link: 'https://www.youtube.com/',
      imgSource: YoutubeImg,
    },
    { snsName: 'instagram', link: 'https://www.instagram.com/', imgSource: InstagramImg },
  ];

  return (
    <footer>
      <div className="Footer">
        <div className="Footer-copyright">©codeit - 2023</div>
        <div className="Footer-policies">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="Footer-sns-links">
          {SNS_INFO.map((item) => {
            return (
              <a
                key={item.snsName}
                className="Footer-sns-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.imgSource} alt={`${item.snsName}`} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
