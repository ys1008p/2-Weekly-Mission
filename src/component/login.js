export const LoginText = ({ loginValid }) => {
  return (
    <div>
      {loginValid ? (
        <div id="profileWrap">
          <img id="profileLoginImage" src={loginValid.profileImageSource}></img>
          <span id="loginSuccessText">{loginValid.email}</span>
        </div>
      ) : (
        <a className="header__link gradation1" id="login" href="/">
          <span>로그인</span>
        </a>
      )}
    </div>
  );
};
