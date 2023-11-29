import '../styles/FolderOwner.css';

const FolderOwner = ({owner, name}) => {
  return(
    <section className="owner--section">
      <div className="owner-content">
        <div className="owner-info--container">
          <img src={owner.profileImageSource} alt="프로필 이미지" className="owner-profile-image"></img>
          <p className="owner-profile-name">@{owner.name}</p>
        </div>
        <h1 className="bookmark-title">{name}</h1>
      </div>
    </section>
  )
};

export default FolderOwner;
