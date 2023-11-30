import "../css/imgs.css";
import logo from "../asset/logo.svg";
import facebook from "../asset/facebook.svg";
import twitter from "../asset/twitter.svg";
import instagram from "../asset/instagram.svg";
import youtube from "../asset/youtube.svg";

function AtagImg({ name, className = "" }) {
  const images = { logo, facebook, twitter, instagram, youtube };
  const src = images[name];
  const alt = `${name}홈으로 연결된 ${name} 로고`;

  return <img className={className} src={src} alt={alt} />;
}

export default AtagImg;
