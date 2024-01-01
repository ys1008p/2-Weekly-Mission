import styled, { css } from 'styled-components';
import closeModal from '../assets/btn-close-modal.svg';
import kakao from '../assets/ico-kakao-share.svg';
import facebook from '../assets/ico-facebook-share.svg';
import link from '../assets/ico-link-copy.svg';
import { shareKakao } from '../components/shareKakao';
import check from '../assets/ico-check.svg';
import useAsync from '../hook/useAsync';
import { useEffect, useState } from 'react';

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

const FolderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: 0 0 2.4rem 0;
`;

const FolderActive = css`
  border-radius: 0.8rem;
  background-color: var(--bg);
`;

const Item = styled.li`
  position: relative;
  cursor: pointer;

  &:hover {
    ${FolderActive}
  }

  & + & {
    margin: 1.1rem 0 0;
  }

  &.active {
    ${FolderActive}

    p {
      color: var(--primary);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.4rem;
      height: 1.4rem;
      background: url('${check}') no-repeat;
    }
  }
`;

const Name = styled.p`
  display: inline-block;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: var(--gray100);
`;

const Count = styled.span`
  margin: 0 0 0 0.8rem;
  font-size: 1.4rem;
  color: var(--gray60);
`;

function shareFacebook({ folderId }) {
  let url = encodeURIComponent(
    `http://localhost:3000/shared?user=1/&folderId=${folderId}`
  );
  let title = '페이스북';
  window.open(
    `http://www.facebook.com/sharer.php?u=${url}&t=${title}`,
    '',
    'width=400, height=400'
  );
}

function Folder({ handleClickFolder, folderActive, menu }) {
  const folder = menu.map((folder) => (
    <Item onClick={() => handleClickFolder(folder)} className={folderActive === folder ? 'active' : ''}>
      <Name>{folder.name}</Name>
      <Count>{folder.link.count}개</Count>
    </Item>
  ));

  return folder;
}

function Modal({
  $isOpen,
  onClick,
  edit,
  add,
  share,
  folderRemove,
  LinkRemove,
  folderAdd,
  title,
  url,
  menu,
}) {
  const [folderActive, setFolderActive] = useState('');

  const handleClickFolder = (item) => setFolderActive(item);

  return (
    <>
      <ModalContainer $isOpen={$isOpen}>
        <Title>
          {edit
            ? '폴더 이름 변경'
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
        {add || edit ? (
          <Input placeholder="내용 입력" />
        ) : (
          <Text>
            {LinkRemove
              ? url
              : folderAdd
                ? '링크 주소'
                : title}
          </Text>
        )}
        {folderAdd && (
          <FolderList>
            <Folder folderActive={folderActive} handleClickFolder={handleClickFolder} menu={menu}/>
          </FolderList>
        )}
        {!share && (
          <Button type="button" folderRemove={folderRemove}>
            {add || folderAdd
              ? '추가하기'
              : folderRemove || LinkRemove
                ? '삭제하기'
                : '변경하기'}
          </Button>
        )}
        {share && (
          <Sns>
            <li onClick={shareKakao}>
              <img src={kakao} alt="카카오톡" />
              카카오톡
            </li>
            <li
              onClick={() => {
                shareFacebook();
              }}
            >
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
