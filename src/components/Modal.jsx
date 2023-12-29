import styled from 'styled-components';
import closeModal from '../assets/btn-close-modal.svg';

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  padding: 3.2rem 4rem;
  border: 1px solid var(--box-border-color);
  border-radius: 1.5rem;
  z-index: 999;
  background-color: var(--color-white);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: var(--black-color);
`;

const Input = styled.input`
  width: 28rem;
  margin: 2.4rem 0 1.5rem 0;
  padding: 1.8rem 1.5rem;
  font-size: 1.6rem;
  border: 1px solid var(--primary-color);
  border-radius: 0.8rem;
  color: var(--black-color);
`;

const Button = styled.button`
  border: none;
  width: 28rem;
  padding: 1.6rem 0;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--color-white);
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;

const CloseButton = styled.button`
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  border: none;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  width: 2.4rem;
  height: 2.4rem;
  background: url('${closeModal}') no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Dim = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black-000);
  opacity: 0.4;
`;

function Modal({ isOpen, onClick, edit, add }) {
  return (
    <>
      {edit && (
        <>
          <ModalContainer isOpen={isOpen}>
            <Title>폴더 이름 변경</Title>
            <Input placeholder="내용 입력" />
            <Button type="button">변경하기</Button>
            <CloseButton type="button" onClick={onClick}>
              닫기
            </CloseButton>
          </ModalContainer>
          <Dim isOpen={isOpen}></Dim>
        </>
      )}

      {add && (
        <>
          <ModalContainer isOpen={isOpen}>
            <Title>폴더 추가</Title>
            <Input placeholder="내용 입력" />
            <Button type="button">추가하기</Button>
            <CloseButton type="button" onClick={onClick}>
              닫기
            </CloseButton>
          </ModalContainer>
          <Dim isOpen={isOpen}></Dim>
        </>
      )}
    </>
  );
}

export default Modal;
