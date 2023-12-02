function Account({ userName, userProfileImgSrc }) {
  return (
    <div className="account">
      <img src={userProfileImgSrc} alt="유저 프로필 이미지" />
      <span>{userName}</span>
    </div>
  );
}

export default Account;
