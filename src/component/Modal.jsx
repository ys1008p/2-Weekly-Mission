import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #000000;
  opacity: 0.4;
  filter: blur(5px);
`;

const StyledModalItem = styled.div`
  padding: 32px 40px;
  display: flex;
  position: absolute;
`;

function Modal() {
  <StyledModalContainer>
    <StyledModalItem>
      <p>ㅇㄴㅁ언ㅁ럼</p>
    </StyledModalItem>
  </StyledModalContainer>;
}

export default Modal;
