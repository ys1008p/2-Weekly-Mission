import styled from "styled-components";
import { CtaShort } from "../cta";

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
  align-items: center;
  gap: 8px;
  max-width: 80rem;
  width: calc(100% - 3.2rem);
  margin: auto;

  & > svg {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: calc(100% - 1.6rem);
  }
`;

const FolderInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: 4rem;
  border-radius: 15px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.white};

  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

const FolderInputButton = styled(CtaShort)`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 8rem;
  height: 3.4rem;
  font-size: 1.4rem;
  font-weight: 600;
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
