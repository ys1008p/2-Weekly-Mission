export const LinkbraryLogo = ({ logo }) => {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="logo" id="logo" />
      </a>
    </div>
  );
};

export const SnsLogo = ({ snsLogo1, snsLogo2, snsLogo3, snsLogo4 }) => {
  return (
    <div className="footer__sns-wrap">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={snsLogo1} alt="facebook" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src={snsLogo2} alt="twitter" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={snsLogo3} alt="youtube" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={snsLogo4} alt="instagram" />
      </a>
    </div>
  );
};

export const ComponyText = ({ text }) => {
  return <span className="footer__compony">{text}</span>;
};

export const QnaText = ({ qna1, qna2 }) => {
  return (
    <div className="footer__etc">
      <a href="./privacy.html">{qna1}</a>
      <a href="./faq.html">{qna2}</a>
    </div>
  );
};

export const HeaderContentForm = ({ logo, headerText1, headerText2 }) => {
  return (
    <div className="header__main__logoForm">
      <a href="./">
        <img src={logo} alt="folderLogo" id="folderLogo" />
      </a>
      <span className="header_main_text">{headerText1}</span>
      <span className="header__main__textForm">{headerText2}</span>
    </div>
  );
};
