import styled from "styled-components";

interface InfoProps {
  $isInterSecting?: boolean;
}

const Wrapper = styled.header<InfoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;

  gap: 1.2rem;
  padding: 20px 0;
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

const FolderInputContainer = styled.div<InfoProps>`
  position: ${({ $isInterSecting }) => ($isInterSecting ? "static" : "fixed")};
  bottom: ${({ $isInterSecting }) => ($isInterSecting ? "auto" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 10rem;
  background-color: #edf7ff;

  z-index: 1;
`;

export const info = {
  Wrapper,
  SharedAvatar,
  SharedOwner,
  SharedFolder,
  FolderInputContainer,
};
