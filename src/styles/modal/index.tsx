import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/icons/closeModal.svg";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

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
  flex-direction: column;

  width: 36rem;
  min-height: 24rem;
`;

const ContentItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 3.2rem 4rem;
  gap: 2.4rem;

  background-color: white;
  border-radius: 15px;
  outline: 1px solid ${({ theme }) => theme.gray300};

  width: 100%;
  height: 100%;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const modal = { BackGround, ContentWrapper, ContentItem, Close };
