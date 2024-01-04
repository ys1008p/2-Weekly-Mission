import styled from "styled-components";

const Sorts = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FolderHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    flex-direction: column;
    gap: 12px;
  }
`;

const FolderName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
const FolderOption = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.gray600};
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const folder = { Sorts, FolderHeader, FolderName, FolderOption, Option };
