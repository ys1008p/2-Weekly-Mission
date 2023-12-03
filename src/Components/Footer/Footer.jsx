import React from "react";
import IconFaceBook from "../../images/facebook.svg";
import IconTwitter from "../../images/twitter.svg";
import IconYoutube from "../../images/youtube.svg";
import IconInstagram from "../../images/instagram.svg";
import Link from "./Link";
import SocialLink from "./SocialLink";

export default function Footer() {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/",
      iconSrc: IconFaceBook,
      altText: "Facebook logo connected to Facebook homepage",
    },
    {
      href: "https://twitter.com/",
      iconSrc: IconTwitter,
      altText: "Twitter logo linked to Twitter homepage",
    },
    {
      href: "https://www.youtube.com/",
      iconSrc: IconYoutube,
      altText: "YouTube logo linked to YouTube homepage",
    },
    {
      href: "https://www.instagram.com/",
      iconSrc: IconInstagram,
      altText: "Instagram logo linked to Instagram homepage",
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <Link href="privacy.html" text="Privacy Policy" />
          <Link href="faq.html" text="FAQ" />
        </div>
        <div className="sns">
          {socialMediaLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
