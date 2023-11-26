import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";

export function Sns({ footerSnsData }) {
  const { name, url } = footerSnsData;
  const imageMap = {
    facebook,
    twitter,
    instagram,
    youtube,
  };
  const imageSource = imageMap[name];

  return (
    <>
      <a href={url} target="_blank">
        <img src={imageSource} />
      </a>
    </>
  );
}

export default Sns;
