import styled from "styled-components";

const StyledPersonalFolderBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: #fff;
  padding: 0.8rem 1.2rem;
  font-size: 16px;
  font-weight: 400;
  margin-right: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;

function UserPersonalFolder({ data }) {
  return <StyledPersonalFolderBtn>{data.name}</StyledPersonalFolderBtn>;
}

export default UserPersonalFolder;
