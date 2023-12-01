import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;

  gap: 1.2rem;
  padding: 20px 0 60px;
`;

const SharedAvatar = styled.img`
  width: 60px;
  height: 60px;
`;
const SharedOwner = styled.span`
  color: ${(props) => props.theme.black};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const SharedFolder = styled.span`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FolderInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 800px;
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.6rem;
  }
`;

const FolderInput = styled.input`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  padding-left: 4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.white};
  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

const FolderInputButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
  height: 3.4rem;

  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background-image: linear-gradient(
    91deg,
    ${(props) => props.theme.primary} 0%,
    #6ae3fe 100%
  );
  color: #f5f5f5;
`;

export const info = {
  Wrapper,
  SharedAvatar,
  SharedOwner,
  SharedFolder,
  FolderInputContainer,
  FolderInput,
  FolderInputButton,
};
