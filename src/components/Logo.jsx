function Logo() {
  return (
    <a
      className="gnb__logo--anchor"
      href="/pages/landing/index.html"
      aria-label="메인 페이지로 이동"
      tabIndex="0">
      <img
        className="gnb__logo--img"
        src="/images/icons/logo.svg"
        alt="링크브러리 로고"
      />
    </a>
  );
}

export default Logo;
