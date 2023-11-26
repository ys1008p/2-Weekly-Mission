import facebookIcon from "../../../images/landing/icons_facebook.svg";
import twitterIcon from "../../../images/landing/icons_twitter.svg";
import youtubeIcon from "../../../images/landing/icons_youtube.svg";
import instagramIcon from "../../../images/landing/icons_instagram.svg";

function FooterSocialLinks({ target, rel }) {
  const socialList = [
    {
      id: 1,
      name: "페이스북",
      icon: facebookIcon,
      link: "https://www.facebook.com/?locale=ko_KR",
    },
    {
      id: 2,
      name: "트위터",
      icon: twitterIcon,
      link: "https://twitter.com/?lang=ko",
    },
    {
      id: 3,
      name: "유튜브",
      icon: youtubeIcon,
      link: "https://www.youtube.com/",
    },
    {
      id: 4,
      name: "인스타그램",
      icon: instagramIcon,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <>
      {socialList.map(({ id, link, icon, name }) => {
        return (
          <a key={id} href={link} target={target} rel={rel}>
            <img src={icon} alt={name} />
          </a>
        );
      })}
    </>
  );
}

export default FooterSocialLinks;
