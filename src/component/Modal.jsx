import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.4;
  z-index: 98;
`;

const StyledModalItem = styled.div`
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

const StyledModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;

const StyledModalInput = styled.input`
  border-radius: 8px;
  width: 100%;
  padding: 1.8rem 1.5rem;
  border: 1px solid #ccd5e3;
  margin-bottom: 1.5rem;

  &::placeholder {
    color: #ccd5e3;
  }
`;

const StyledModalBtn = styled.button`
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  border: none;
  width: 28rem;
  padding: 1.6rem 2rem;

7
`;

function Modal() {
  return (
    <>
      <StyledModalContainer />
      <StyledModalItem>
        <StyledModalTitle>폴더이름변경</StyledModalTitle>
        <StyledModalInput type="text" placeholder="내용 입력" />
        <StyledModalBtn>변경하기</StyledModalBtn>
      </StyledModalItem>
    </>
  );
}

export default Modal;
