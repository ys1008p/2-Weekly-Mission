import FooterLink from "./Components/FooterLink";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="codeit">©codeit - 2023</div>
      <div className="FAQ">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <FooterLink className="FooterLink" />
    </footer>
  );
}
export default Footer;
