import { getSharedFolders } from "../../../services/api";
import { useEffect, useState } from "react";
import styled from "styled-components";

function ProfileInfo({ owner, name }) {
  if (!owner) return <p>로그인 정보가 없습니다.</p>;
  return (
    <StyledProfile>
      <img src={owner.profileImageSource} alt="해당 프로필 이미지" />
      <StyledProfileNickname>{`@${owner.name}`}</StyledProfileNickname>
      <h2>{name}</h2>
    </StyledProfile>
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

const StyledProfile = styled.div`
  background-color: var(--gray-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 6rem;
  gap: 2rem;

  img {
    width: 6rem;
    height: 6rem;
  }
`;

const StyledProfileNickname = styled.div`
  font-size: 16px;
`;
