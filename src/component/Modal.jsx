import styled from "styled-components";

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.4;
  z-index: 98;
  display: ${({ $isLender }) => ($isLender ? `block` : `none`)};
`;
const StyledModalItem = styled.form`
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;

  display: ${({ $isLender }) => ($isLender ? `flex` : `none`)};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

function Modal({ $isModalOn, $isLender, modalData, location }) {
  return (
    <>
      <StyledModalBackground
        onClick={() => {
          $isModalOn(false);
        }}
        $isLender={$isLender}
      />
      <StyledModalItem $isLender={$isLender} location={location}>
        {modalData.title}
        {modalData.sideTitle}
        {modalData.input}
        {modalData.addLinkList}
        {modalData.button}
        {modalData.img}
      </StyledModalItem>
    </>
  );
}

export default Modal;
