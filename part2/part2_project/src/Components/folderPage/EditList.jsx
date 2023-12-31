import { Children } from 'react';
import penImg from '../../img/pen.svg';
import shardImg from '../../img/share.svg';
import deleteImg from '../../img/trashCan.svg';
import styled from 'styled-components';

const EditBox = styled.section`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
`;

const EditButton = styled.button`
  display: flex;
  gap: 0.25rem;
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
`;

export default function EditList({ handleModal }) {
  return (
    <EditBox>
      <EditButton id="goshare" onClick={handleModal}>
        <img src={shardImg} alt="공유하기" />
        공유
      </EditButton>
      <EditButton id="changeName" onClick={handleModal}>
        <img src={penImg} alt="이름 변경" />
        이름 변경
      </EditButton>
      <EditButton id="deleteFolder" onClick={handleModal}>
        <img src={deleteImg} alt="삭제하기" />
        삭제
      </EditButton>
    </EditBox>
  );
}
