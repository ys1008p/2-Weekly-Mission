function Profile({ owner, name }) {
  return (
    <div>
      {owner ? (
        <div className="profile">
          <img
            className="profile-img"
            src={owner.profileImageSource}
            alt="해당 프로필 이미지"
          />
          <span className="profile-name">{`@${owner.name}`}</span>
          <h2>{name}</h2>
        </div>
      ) : (
        <p>로그인 정보가 없습니다.</p>
      )}
    </div>
  );
}

export default Profile;
