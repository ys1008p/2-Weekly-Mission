import styled from "styled-components";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  flex-direction: column;
  gap: 24px;
`;

const ContentItem = styled.div`
  background-color: white;
  border-radius: 15px;
  outline: 1px solid ${({ theme }) => theme.gray300};
`;

export const modal = { BackGround, ContentWrapper, ContentItem };
