import "./HeaderFolderSection.css";

function HeaderFoloderSection({ folderData }) {
  const folderName = folderData.name;
  const ownerName = folderData.owner?.name;
  const ownerImg = folderData.owner?.profileImageSource;

  return (
    <section className="header-owner-container">
      <img
        src={ownerImg}
        alt="folderImg"
        className="header-owner-section-ownerImg"
      />
      <p className="header-owner-section-ownerName">{ownerName}</p>
      <h2 className="header-owner-section-folderName">{folderName}</h2>
    </section>
  );
}

export default HeaderFoloderSection;
