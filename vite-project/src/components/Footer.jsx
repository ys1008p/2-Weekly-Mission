import FooterSocialLinks from "./FooterSocialLinks";
import * as S from "./styled";

function FooterLinks({ children, href }) {
  return (
    <a className="footer-link" href={href}>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <S.Footer>
      <div className="footer-notice">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <FooterLinks href="/privacy.html">Privacy Policy</FooterLinks>
          <FooterLinks href="/faq.html">FAQ</FooterLinks>
        </div>
        <div className="footer-sns">
          <FooterSocialLinks target="_blank" rel="noreferrer" />
        </div>
      </div>
    </S.Footer>
  );
}

export default Footer;
