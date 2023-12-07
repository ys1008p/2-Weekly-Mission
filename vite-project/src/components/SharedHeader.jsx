import * as S from "./styled";

function SharedHeader({ folder }) {
  const {
    name,
    owner: { name: ownerName, profileImageSource },
  } = folder;

  return (
    <S.SharedHeader>
      <div className="folder-owner">
        <img className="owner-img" src={profileImageSource} alt={ownerName} />
        <span className="owner-name">@{ownerName}</span>
      </div>
      <h1 className="folder-name">{name}</h1>
    </S.SharedHeader>
  );
}

export default SharedHeader;
