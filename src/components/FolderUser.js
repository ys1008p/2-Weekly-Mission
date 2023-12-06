import styled from 'styled-components'

const FolderInfo = styled.div`
  margin: 9.4rem 0 0;
  padding: 2rem 0 6rem 0;
  text-align: center;
  background-color: var(--color-sky-blue);

  @media screen and (min-width: 375px) and (max-width: 768px) {
    padding: 1rem 0 4rem 0;
  }

  img {
    width: 6rem;

    @media screen and (min-width: 375px) and (max-width: 768px) {
      width: 4rem;
    }
  }
`
const UserName = styled.p`
  margin: 1.2rem 0 2rem 0;
  font-size: 1.6rem;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    margin: 0.6rem 0 1rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`
const Name = styled.p`
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 600;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`

function FolderUser({ folderName, folderUserName, folderUserProfile }) {
  return (
    <FolderInfo>
      <img src={folderUserProfile} alt="폴더 사용자 프로필 이미지" />
      <UserName>{folderUserName}</UserName>
      <Name>{folderName}</Name>
    </FolderInfo>
  )
}

export default FolderUser
