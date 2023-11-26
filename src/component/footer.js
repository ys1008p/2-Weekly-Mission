import { ComponyText, QnaText, SnsLogo } from "./logo";
import facebookLogo from "../images/facebook.svg";
import twitterLogo from "../images/twitter.svg";
import youtubeLogo from "../images/youtube.svg";
import instagramLogo from "../images/instagram.svg";
import { useState } from "react";

function Footer() {
  const [codeitText, setCodeitText] = useState("©codeit - 2023");

  const [privacyPolicyLink, setprivacyPolicyLink] = useState("Privacy Policy");
  const [faqLink, setFaqLink] = useState("FAQ");

  const [facebook, setFacebook] = useState(facebookLogo);
  const [twitter, setTwitter] = useState(twitterLogo);
  const [youtube, setYoutube] = useState(youtubeLogo);
  const [instagram, setInstagram] = useState(instagramLogo);

  return (
    <footer>
      <div className="footer__wrap">
        <ComponyText text={codeitText} />
        <QnaText qna1={privacyPolicyLink} qna2={faqLink} />
        <SnsLogo
          snsLogo1={facebook}
          snsLogo2={twitter}
          snsLogo3={youtube}
          snsLogo4={instagram}
        />
      </div>
    </footer>
  );
}

export default Footer;
