import React from "react";
import { footerIcon } from "assets/icons/footer";
import { Link } from "react-router-dom";
import { footer } from "assets/styles/footer";

const Footer = () => {
  return (
    <footer.Container>
      <footer.Box>
        <footer.CopyRight>©codeit - 2023</footer.CopyRight>
        <footer.Links>
          <footer.SLink to="privacy.html">Privacy Policy</footer.SLink>
          <footer.SLink to="faq.html">FAQ</footer.SLink>
        </footer.Links>
        <footer.SNS>
          {Object.entries(footerIcon).map(([urlName, iconSrc]) => (
            <Link
              to={`https://www.${urlName}.com`}
              target="_blank"
              rel="noopener noreferrer"
              key={urlName}
            >
              <img
                src={iconSrc}
                alt={`${urlName} 홈페이지로 연결된 ${urlName} 로고`}
              />
            </Link>
          ))}
        </footer.SNS>
      </footer.Box>
    </footer.Container>
  );
};

export default Footer;
