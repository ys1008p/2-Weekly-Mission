import "./Footer.css";
import Sns from "./Sns.js";
export function Footer() {
  const getThisYear = () => {
    const date = new Date();
    const thisYear = date.getFullYear();
    console.log(thisYear);
    return thisYear;
  };
  const footerSnsDatas = [
    { name: "facebook", url: "https://www.facebook.com" },
    { name: "twitter", url: "https://www.twitter.com" },
    { name: "youtube", url: "https://www.youtube.com" },
    { name: "instagram", url: "https://www.instagram.com" },
  ];
  return (
    <>
      <div className="footer-wrapper">
        <span className="codeit">©codeit - {getThisYear()}</span>
        <div className="footer-privacy">
          <span className="privacy">
            <a href="/privacy">Privacy Policy</a>
          </span>
          <span className="faq">
            <a href="/faq">FAQ</a>
          </span>
        </div>
        <div className="footer-sns">
          {footerSnsDatas.map((data) => {
            return (
              <>
                <Sns footerSnsData={data} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Footer;
