import styled from 'styled-components';

const PopOverBox = styled.ul`
  position: absolute;
  right: -3.2rem;
  top: 70%;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  background-color: var(--linkbrary-white);

  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 1;

  > li {
    width: 100%;
  }
`;

const PopOverText = styled.button`
  padding: 0.4375rem 0.75rem;
  border: none;
  width: 100%;
  color: var(--gray-light-gray-100);
  font-size: 0.875rem;
  font-weight: 400;
  z-index: 2;

  background-color: var(--linkbrary-white);

  &:hover {
    cursor: pointer;
    background: var(--Linkbrary-gray10, #e7effb);
    color: var(--linkbrary-primary-color);
  }
`;

export default function PopOver() {
  return (
    <PopOverBox>
      <li>
        <PopOverText>삭제하기</PopOverText>
      </li>
      <li>
        <PopOverText>폴더에 추가</PopOverText>
      </li>
    </PopOverBox>
  );
}
