import { Link } from "react-router-dom";
import { footer } from "styles/footer";
import { footerIcon } from "assets/icons/footer";

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
          {Object.entries(footerIcon).map(([urlName, Icon]) => (
            <Link to={`https://www.${urlName}.com`} target="_blank" rel="noopener noreferrer" key={urlName}>
              <Icon />
            </Link>
          ))}
        </footer.SNS>
      </footer.Box>
    </footer.Container>
  );
};

export default Footer;
