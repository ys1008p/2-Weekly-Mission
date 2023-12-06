import { getSharedFolders } from "../../services/api";
import { useEffect, useState } from "react";
import "./Profile.css";

function ProfileInfo({ owner, name }) {
  if (!owner) return <p>로그인 정보가 없습니다.</p>;
  return (
    <div>
      <div className="profile">
        <img
          className="profile-img"
          src={owner.profileImageSource}
          alt="해당 프로필 이미지"
        />
        <span className="profile-name">{`@${owner.name}`}</span>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

function Profile() {
  const [folder, setFolder] = useState([]);

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getSharedFolders();
      setFolder(folder);
    };
    handleFolder();
  }, []);

  return <ProfileInfo owner={folder.owner} name={folder.name} />;
}

export default Profile;
