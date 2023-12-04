import React from "react";
import image1 from "../images/facebook.svg";
import image2 from "../images/instagram.svg";
import image3 from "../images/twitter.svg";
import image4 from "../images/youtube.svg";
import "../css/FooterLink.css";

const ImageData = [
  {
    url: image1,
    link: "https://www.facebook.com",
    alt: "페이스북 로고",
  },
  {
    url: image2,
    link: "https://www.instagram.com",
    alt: "인스타그램 로고",
  },
  {
    url: image3,
    link: "https://www.twitter.com",
    alt: "트위터 로고",
  },
  {
    url: image4,
    link: "https://www.youtube.com",
    alt: "유튜브 로고",
  },
];

function FooterLink() {
  return (
    <div className="FooterLink">
      {ImageData.map((image) => (
        <a key={image.alt} href={image.link} target="_blank">
          <img src={image.url} alt={image.alt} />
        </a>
      ))}
    </div>
  );
}
export default FooterLink;
