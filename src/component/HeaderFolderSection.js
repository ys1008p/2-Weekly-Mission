import "./Header.css";

function HeaderFoloderSection({ folderData }) {
  const folderName = folderData.name;
  const ownerName = folderData.owner?.name;
  const ownerImg = folderData.owner?.profileImageSource;

  return (
    <section className="header-section">
      <img src={ownerImg} alt="folderImg" className="header-section-ownerImg" />
      <p className="header-section-ownerName">{ownerName}</p>
      <h2 className="header-section-folderName">{folderName}</h2>
    </section>
  );
}

export default HeaderFoloderSection;
