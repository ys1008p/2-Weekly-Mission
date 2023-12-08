import styled from "styled-components";

const COLORS = {
  blue: `var(--gradient-purpleblue-skyblue)`,
  red: `red`,
};

export const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ModalBox = styled.div`
  background-color: var(--white-color);
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 1.5rem;
  border: 1px solid #dee2e6;
  padding: 3.2rem 4rem;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const ModalTop = styled.div`
  positon: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 28rem;
`;

export const ModalExit = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.4rem;
  height: 2.4rem;
`;

export const ModalTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

export const ModalLink = styled.p`
  color: var(--gray-60-color);
  font-size: 14px;
  font-weight: 400;
`;

export const ModalList = styled.div``;

export const ModalButton = styled.button`
  background: ${({ color }) => COLORS[color]};
  color: var(--white-color);
  border-radius: 0.8rem;
  padding: 1.6rem 2rem;
  width: 28rem;
`;

export const ModalShareSNS = styled.div``;
