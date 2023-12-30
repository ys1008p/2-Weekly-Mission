import styled from 'styled-components';
import closeModal from '../assets/btn-close-modal.svg';
import kakao from '../assets/ico-kakao-share.svg';
import facebook from '../assets/ico-facebook-share.svg';
import link from '../assets/ico-link-copy.svg';

const ModalContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  padding: 3.2rem 4rem;
  border: 1px solid var(--gray20);
  border-radius: 1.5rem;
  z-index: 999;
  background-color: var(--white);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: var(--gray100);
`;

const Input = styled.input`
  width: 28rem;
  margin: 2.4rem 0 1.5rem 0;
  padding: 1.8rem 1.5rem;
  font-size: 1.6rem;
  outline: none;
  border: 1px solid var(--primary);
  border-radius: 0.8rem;
  color: var(--gray100);
`;

const Text = styled.p`
  margin: 0.8rem 0 2.4rem 0;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: var(--gray60);
`;

const Button = styled.button`
  border: none;
  width: 28rem;
  padding: 1.6rem 0;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--white);
  background: ${({ folderRemove, LinkRemove }) =>
    folderRemove || LinkRemove
      ? 'var(--red)'
      : 'linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%)'};
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
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--black-000);
  opacity: 0.4;
`;

const Sns = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 3.2rem;

  li {
    font-size: 1.3rem;

    img {
      display: block;
      margin: 0 0 1rem 0;
    }
  }
`;

function Modal({
  $isOpen,
  onClick,
  edit,
  add,
  share,
  folderRemove,
  LinkRemove,
  folderAdd,
}) {
  return (
    <>
      <ModalContainer $isOpen={$isOpen}>
        <Title>
          {edit
            ? '폴더 변경'
            : add
              ? '폴더 추가'
              : share
                ? '폴더 공유'
                : folderRemove
                  ? '폴더 삭제'
                  : LinkRemove
                    ? '링크 삭제'
                    : folderAdd
                      ? '폴더에 추가'
                      : ''}
        </Title>
        {!share && !folderRemove && !LinkRemove && !folderAdd ? (
          <Input placeholder="내용 입력" />
        ) : (
          <Text>{!LinkRemove ? '폴더명' : 'httpw://www.abc.com'}</Text>
        )}
        {!share && (
          <Button type="button" folderRemove={folderRemove}>
            {edit
              ? '변경하기'
              : add || folderAdd
                ? '추가하기'
                : folderRemove || LinkRemove
                  ? '삭제하기'
                  : ''}
          </Button>
        )}
        {share && (
          <Sns>
            <li>
              <img src={kakao} alt="카카오톡" />
              카카오톡
            </li>
            <li>
              <img src={facebook} alt="페이스북" />
              페이스북
            </li>
            <li>
              <img src={link} alt="링크 복사" />
              링크 복사
            </li>
          </Sns>
        )}
        <CloseButton type="button" onClick={onClick}>
          닫기
        </CloseButton>
      </ModalContainer>
      <Dim $isOpen={$isOpen}></Dim>
    </>
  );
}

export default Modal;
