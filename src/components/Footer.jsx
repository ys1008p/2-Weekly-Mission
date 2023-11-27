function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__container">
        <div className="footer__copy-right">©codeit - 2023</div>
        <div className="footer__pages">
          <a className="footer__pages--link" href="pages/privacy/index.html">
            Privacy Policy
          </a>
          <a className="footer__pages--link" href="pages/faq/index.html">
            FAQ
          </a>
        </div>
        <div className="footer__sns-links">
          <a className="footer__sns-links--anchor" href="https://www.facebook.com/">
            <img
              className="footer__sns-links--icon"
              src="/images/icons/facebook-fill.svg"
              alt="페이스북 아이콘"
            />
          </a>
          <a className="footer__sns-links--anchor" href="https://twitter.com/">
            <img
              className="footer__sns-links--icon"
              src="/images/icons/twitter-fill.svg"
              alt="트위터 아이콘"
            />
          </a>
          <a className="footer__sns-links--anchor" href="https://www.youtube.com/">
            <img
              className="footer__sns-links--icon"
              src="/images/icons/youtube-fill.svg"
              alt="유튜브 아이콘"
            />
          </a>
          <a className="footer__sns-links--anchor" href="https://www.instagram.com/">
            <img
              className="footer__sns-links--icon"
              src="/images/icons/instagram-filled.svg"
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
