import FooterLink from "./Components/FooterLink";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div>©codeit - 2023</div>
      <div className="footerGap">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <FooterLink />
    </footer>
  );
}
export default Footer;
