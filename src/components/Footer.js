import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

const SNS = [
  {
    name: facebook,
    data: { link: "https://www.facebook.com/", icon: facebook, alt: "facebook 홈페이지로 연결된 facebook 로고" },
  },
  {
    name: twitter,
    data: { linK: "https://www.twitter.com/", icon: twitter, alt: "twitter 홈페이지로 연결된 twitter 로고" },
  },
  {
    name: youtube,
    data: { link: "https://www.youtube.com/", icon: youtube, alt: "youtube 홈페이지로 youtube 로고" },
  },
  {
    name: instagram,
    data: { link: "https://www.instagram.com/", icon: instagram, alt: "instagram 홈페이지로 instagram 로고" },
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          {SNS.map(({ name, data }) => {
            return (
              <a key={name} href={data?.link} target="_blank" rel="noopener noreferrer">
                <img src={data?.icon} alt={data?.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
